import React from 'react';
import ReactDOM from 'react-dom';
import { Text, Button, StyleSheet, Easing, Animated, Dimensions, View} from 'react-native';

import DisplayedElement from './DisplayedElement';
import DrillMenageATrois from './DrillMenageATrois';
import DrillSquare from './DrillSquare';
import DrillCuts from './DrillCuts';
import Svg, {Line} from 'react-native-svg';
import ProgressBar from './ProgressBar';


import DisplayedDraggableElement from './DisplayedDraggableElement';

/** Display a drill and enables to animate it using buttons (play, next step, previous step)
  * 
  * TODO: 
  * - when moving to a given step stepId, put back all displayed elements to their position prior stepId
  * - when restarting the complete animation, if the elements are not in their initial positions, add an empty animation to move the elements to their initial position before starting the animation
  * - fix the ratio of a drill (otherwise the display of a drill may be distorted)
  */
class Animation extends React.Component{

    
    constructor(props){
	super(props);

        this.state = {
	    screenH: 1, // Height of the animation space
	    screenW: 0, // Width of the animation space
	    stepLength: 1000, // Duration of a step in milliseconds
            drill: new DrillSquare(), // The drill to display
            de: [], // The graphical elments displayed in the drill
	    currentStep: 0, // Current step displayed on the phone
        };
	
        // Enables to update the current step inside an animation
        this.currentStepAV = new Animated.Value(0);

        this.currentStepAV.addListener((progress) => {
            this.setState({currentStep: progress.value});
        });

        this.animationWidth = 100;
        this.animationHeight = 100;
	
    }

    /** Once we get the screen size, create the DisplayedElement used in the drill and set them to their initial position */
    _initDrill(){

        this.animationWidth = this.state.screenW * this.props.widthRatio;
        this.animationHeight = this.state.screenH * this.props.heightRatio;

        console.log("ratio h/w: " + this.props.heightRatio + "/" + this.props.widthRatio);
        
        /* For each element displayed in the current drill */
        for(var elemId = 0; elemId < this.state.drill.elemCount(); ++elemId){

            /* Create the displayed element according to the drill */
            this.state.de.push(new DisplayedElement({id: this.state.drill.ids[elemId], number: this.state.drill.texts[elemId], key: elemId, animationWidth: this.animationWidth, animationHeight: this.animationHeight}));
            this.state.de[elemId].test = elemId;
        }

        /* Set all the elements to their initial positions */
        this._initPositions();
        
        this.pb = new ProgressBar({animationWidth:this.animationWidth, animationHeight: this.animationHeight, stepCount: this.state.drill.stepCount(), currentStepAV: this.currentStepAV, getStepAnimation: this._getStepAnimation, stepLength: this.state.stepLength, key: 1});

	this.cuts = new DrillCuts({drill:this.state.drill, animationHeight: this.animationHeight, animationWidth: this.animationWidth, currentStep: this.state.currentStep});

    }
    
    /** Convert a position (x, y) in percentages in a position (x2, y2) in pixels 
     * x: horizontal position in percentages (=0 left edge, =1 right edge)
     * y: vertical position in percentages (=0 top, =1 bottom)
     * x2: corresponding horizontal position in pixel (=0 if centered)
     * y2: corresponding vertical position in pixel (=0 if centered)
     */
    _positionPercentToPixel(x, y){
	return [this.animationWidth * x,// - this.state.screenW/2,
		this.animationHeight * y// - this.state.screenH/2
	       ];
    }

    /** Set each displayed element at its original position */
    _initPositions(){
	
        /* For each element */
	for(var i = 0; i < this.state.de.length; i++){
            
	    var element = this.state.de[i];

            /* Get its position in pixel (it is represented in percentage in the drill) */
            var pixelPosition = this._positionPercentToPixel(this.state.drill.positions[i][0][0][0], this.state.drill.positions[i][0][0][1]);
	    
	    element.setPosition(pixelPosition[0], pixelPosition[1]);
	}

	this.setState({currentStep: 0});
    }

    componentDidMount(){

        /* Get the dimension of the screen and then initialize the drill */
	var {height, width} = Dimensions.get('window');

        console.log("screen h/w: " + height + "/" + width);
        
        this.setState({
            screenH: height,
            screenW: width
        }, () => {this._initDrill();});
    }

    /** Play the whole drill */
    _restart(){

        this._initPositions();

	/* Animation of the whole drill */
	var completeSequence = [];

        completeSequence.push(Animated.timing(
            this.currentStepAV,
            {
                toValue: 0,
                duration: 0,
                easing: Easing.linear
            }
        ));

	/* For each step (start at step 1 as step 0 corresponds to the initial positions)*/
	for(var stepId = 1; stepId < this.state.drill.stepCount(); stepId++)
	    completeSequence.push(Animated.parallel(this._getStepAnimation(stepId, true)));

	Animated.sequence(completeSequence).start();
        
    }

    /** Get back to the previous step */
    _previousStep(){
        if(this.state.currentStep !== 0){
            
	    this.setState({currentStep: this.state.currentStep-1}, () => {
                
                var stepArray = this._getStepAnimation(this.state.currentStep, false);
                Animated.parallel(stepArray).start();
            });
        }
    }

    /** Go to the next step */
    _nextStep(){   
        
        if(this.state.currentStep !== this.state.drill.stepCount() - 1){

	    this.setState({currentStep: this.state.currentStep+1}, () => {
                Animated.parallel(this._getStepAnimation(this.state.currentStep, true)).start();
            });
        }
    }
    
    /** Returns the animation to a given step for all displayed elements 
       The substeps are played if the animation is forward and if the elements moves at step stepId
     */
    _getStepAnimation = (stepId, isForward) =>{

	console.log("Animation: get animation: " + stepId);
	
	/* Animation of all the elements at step stepId */
	var stepAnimation = [];

        /* The first animation in the sequence enables to update the current step */
        stepAnimation.push(Animated.timing(
            this.currentStepAV,
            {
                toValue: stepId,
                duration: this.state.stepLength,
                easing: Easing.linear
            }
        ));

	/** Change the opacity of the step dots */
        if(this.pb !== undefined)
            stepAnimation = stepAnimation.concat(this.pb.getOpacityAnimation(stepId));
        
	/* For each displayed element */
	for(var elemId = 0; elemId < this.state.drill.positions.length; elemId++){
	    
            /* Get the position of the element at step stepId */
            var nextPosition = this.state.drill.getPositionsAtStep(elemId, stepId, this.state.currentStep);//this.state.drill.positions[elemId][stepId];   

	    /* The substeps are played only if the element moves at step stepId.
	       Otherwise, we just move the element to its previous position without playing the substeps of this position */
	    var playSubSteps = true;

	    if(nextPosition == undefined || !isForward)
		playSubSteps = false;
	    
	    /* If this element must change its position */
	    if(nextPosition !== undefined) {

		/* Animation of the element at step stepId */
		var deStepAnimation = [];

		var substepCount = nextPosition.length;

		/* If the sub steps must be played */
		if(playSubSteps){
		    
		    /* For each substep of element de in step stepId */
		    for(var substep = 0; substep < substepCount; substep++){

			var currentDE = this.state.de[elemId];

			/* Get the position of the element at this substep */
			var pixelPosition = this._positionPercentToPixel(nextPosition[substep][0], nextPosition[substep][1]);

			/* Get the corresponding animation */
			var anim = currentDE.getAnimation(pixelPosition[0], pixelPosition[1], this.state.stepLength/substepCount);
			
			deStepAnimation.push(anim);
		    }
		}

		/* If the sub steps must not be played, just move the element to its last position */
		else{

                    if(stepId == 3 && elemId == 11){
                        console.log("");
                    }
                        
		    currentDE = this.state.de[elemId];

		    /* Get the position of the element at this substep */
		    pixelPosition = this._positionPercentToPixel(nextPosition[substepCount-1][0], nextPosition[substepCount-1][1]);

		    /* Get the corresponding animation */
		    anim = currentDE.getAnimation(pixelPosition[0], pixelPosition[1], this.state.stepLength);
		    
		    deStepAnimation.push(anim);
		}
                
		stepAnimation.push(Animated.sequence(deStepAnimation));
	    }
	}

        return stepAnimation; 
    }

    _display(item){
        if(item !== undefined)
            return item.render();
        else
            return <View/>;
    }
    
    render(){

        console.log("render h/w: " + this.animationHeight + "/" + this.animationWidth);
	this.cutsArray = [];

	if(this.cuts !== undefined){
	    this.cuts.props.currentStep = Math.floor(this.state.currentStep);
	    this.cutsArray.push(this.cuts);
	}

        console.log("animationH/W: " + this.animationWidth + "/" + this.animationHeight);
	
	return(
	    <View style={[styles.main_container, {height: this.animationHeight},
                          {width: this.animationWidth}]}>
              
	      {this._display(this.cuts)}
	      {this.state.de.map(this._display)}
	      <Text>Step {Math.round(this.state.currentStep)+1}/{this.state.drill.stepCount()}</Text>
	      <View style={{flex: 0.1}}/>
	      <Button style={{flex: 1}} title=' < ' onPress={() => this._previousStep()}/>
	      <View style={{flex: 0.1}}/>
	      <Button style={{flex: 1}} title='Lancer' onPress={() => this._restart()}/>
	      <View style={{flex: 0.1}}/>
	      <Button  title=' > ' style={{flex: 1}} onPress={() => this._nextStep()}/>
              {this._display(this.pb)}
	    </View>
	);
    }
}

const styles = StyleSheet.create({

    main_container: {
	marginTop: 40,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'flex-start',
        backgroundColor: 'white'
    },
});

export default Animation;
