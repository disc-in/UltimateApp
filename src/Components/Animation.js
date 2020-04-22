import React from 'react';
import ReactDOM from 'react-dom';
import { Text, Button, StyleSheet, Easing, Animated, Dimensions, View} from 'react-native';

import DisplayedElement from './DisplayedElement';
import DrillMenageATrois from './DrillMenageATrois';
import DrillSquare from './DrillSquare';
import DrillCuts from './DrillCuts';
import Svg, {Line} from 'react-native-svg';
import ProgressBar from './ProgressBar';
import Drill from './Drill';

/** Display a drill and enables to animate it using buttons (play, next step, previous step)
  * 
  * TODO: 
  * - when restarting the complete animation, if the elements are not in their initial positions, add an empty animation to move the elements to their initial position before starting the animation
  */
class Animation extends React.Component{

    constructor(props){
	super(props);
	
        this.state = {
	    screenH: 1, // Height of the animation space
	    screenW: 1, // Width of the animation space
	    stepLength: 1000, // Duration of a step in milliseconds
	    drill: undefined,
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

    /** Number of steps in the drill */
    _stepCount = () => {

	console.log("_stepCount");
	console.log(this.state.drill.positions.length);
	
	if(this.state.drill != undefined)
	    return this.state.drill.positions.length;
	else
	    return 0;
    }

    /** Number of elements displayed in the drill */
    _elemCount = () => {

	if(this.state.drill !== undefined && this.state.drill.ids.length > 0)
	    return this.state.drill.ids.length;
	else
	    return 0;
    }

    /** Create the Componenets associated to the elements displayed in this drill */
    _createDE(){

	var tempDe = [];
	
        /* For each element displayed in the current drill */
        for(var elemId = 0; elemId < this._elemCount(); ++elemId){

            /* Create the displayed element according to the drill */
            tempDe.push(new DisplayedElement({
		id: this.state.drill.ids[elemId],
		number: this.state.drill.texts[elemId],
		key: elemId,
		animationWidth: this.animationWidth,
		animationHeight: this.animationHeight,
		movable:this.props.editable,
		onMoveEnd: this.props.onElementMove,
	    }));
        }

	return tempDe;
    }

    /** Create the cuts associated to each step of the drill */
    _initializeCuts(){
	this.cuts = new DrillCuts({
	    drill:this.state.drill,
	    animationHeight: this.animationHeight,
	    animationWidth: this.animationWidth,
	    currentStep: this.state.currentStep
	});
    }

    /** Create the progress bar */
    _createPB(){

        return new ProgressBar({
	    animationWidth:this.animationWidth,
	    animationHeight: this.animationHeight,
	    stepCount: this._stepCount(),
	    currentStepAV: this.currentStepAV,
	    getStepAnimation: this._getStepAnimation,
	    stepLength: this.state.stepLength,
	    onStepChange: this.props.onStepChange,
	    key: 1
	});
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
            var pixelPosition = this._positionPercentToPixel(this.state.drill.positions[0][i][0][0], this.state.drill.positions[0][i][0][1]);
	    
	    element.setPosition(pixelPosition[0], pixelPosition[1]);
	}

	this.setState({currentStep: 0}, () => {
	    if(this.props.onStepChange != undefined)
		this.props.onStepChange(0);
	});
    }
    
    /** Once we get the screen size, create the DisplayedElement used in the drill and set them to their initial position */
    componentDidMount(){

	/* Get the dimension of the screen and then initialize the drill */
	var {height, width} = Dimensions.get('window');

        this.animationWidth = width * this.props.widthRatio;
        this.animationHeight = height * this.props.heightRatio;

	var inputDrill = new Drill(this.props.animation);
	var initialStep = 0;

	// If the current step is fixed by the parent (used in the editor)
	if(this.props.currentStep != undefined)
	    initialStep = this.props.currentStep;
	
	this.setState({
	    drill: inputDrill,
            screenH: height,
            screenW: width,
	    currentStep: initialStep,
	}, () =>{
	    this.setState({
		de: this._createDE()
	    }, () => { 
		
		/* Set all the elements to their initial positions */
		this._initPositions();

		this.pb = this._createPB();
		this._initializeCuts();
		
	    });
	});
	
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
	for(var stepId = 1; stepId < this._stepCount(); stepId++)
	    completeSequence.push(Animated.parallel(this._getStepAnimation(stepId, true)));

	Animated.sequence(completeSequence).start();

	if(this.props.onStepChange != undefined)
	    this.props.onStepChange(this._stepCount());
        
    }

    /** Get back to the previous step */
    _previousStep(){
        if(this.state.currentStep != 0){
            
	    this.setState({currentStep: this.state.currentStep-1}, () => {
                
                var stepArray = this._getStepAnimation(this.state.currentStep, false);
                Animated.parallel(stepArray).start();

		if(this.props.onStepChange != undefined)
		    this.props.onStepChange(this.state.currentStep);
            });
        }
    }

    /** Go to the next step */
    _nextStep(){   

        if(this.state.currentStep != this._stepCount() - 1){

	    this.setState({currentStep: this.state.currentStep+1}, () => {
                Animated.parallel(this._getStepAnimation(this.state.currentStep, true)).start();
		
		if(this.props.onStepChange != undefined)
		    this.props.onStepChange(this.state.currentStep);
            });
        }
    }
    
    /** Returns the animation to a given step for all displayed elements 
       The substeps are played if the animation is forward and if the elements moves at step stepId
     */
    _getStepAnimation = (stepId, isForward) =>{

	stepId = Math.max(0, Math.round(stepId));
	
	/* Animation of all the elements at step stepId */
	var stepAnimation = [];

        /* The first animation in the sequence enables to update the current step */
        stepAnimation.push(Animated.timing(
            this.currentStepAV,
            {
                toValue: stepId,
                duration: this.state.stepLength,
                easing: Easing.linear,
		key: 0
            }
        ));

	/** Change the opacity of the step dots */
        if(this.pb !== undefined)
            stepAnimation = stepAnimation.concat(this.pb.getOpacityAnimation(stepId));

	/* For each displayed element */
	for(var elemId = 0; elemId < this.state.drill.ids.length; elemId++){

            /* Get the position of the element at step stepId */
            var nextPosition = this.state.drill.getPositionsAtStep(elemId, stepId, this.state.currentStep);//this.state.drill.positions[elemId][stepId];   

	    /* The substeps are played only if the element moves at step stepId.
	       Otherwise, we just move the element to its previous position without playing the substeps of this position */
	    var playSubSteps = true;

	    if(nextPosition === null || !isForward)
		playSubSteps = false;
	    
	    /* If this element must change its position */
	    if(nextPosition !== null) {

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
        if(item != undefined)
            return item.render();
        else
            return <View/>;
    }
    
    render(){

	this.cutsArray = [];

	if(this.cuts != undefined){
	    this.cuts.props.currentStep = Math.floor(this.state.currentStep);
	    this.cutsArray.push(this.cuts);
	}
	
	return(
	    <View style={[styles.main_container, {height: this.animationHeight},
                          {width: this.animationWidth}]}>
              
	      {this._display(this.cuts)}
	    {this.state.de == undefined? <View/>:this.state.de.map(this._display)}
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

    /** Used to update the animation when a modification is made through the editor */
    componentDidUpdate(){

	if(this.state.de === undefined && this.state.drill !== undefined){
	    this.setState({
		de:this._createDE()
	    }, () => {
	    
		/* Set all the elements to their initial positions */
		this._initPositions();
		
		this._initializeCuts();
		this.pb = this._createPB();
	    });
	}
    }
    
    /** Used to update the animation when a modification is made through the editor */
    static getDerivedStateFromProps(props, state) {
	
	// Test if the drill has changed
	var isEqual = true;

	if(props.drill != undefined && state.drill != undefined){

	    var stepId = 0;
	    var elemId = 0;
	    var cutId = 0;

	    // Get all the positions in props and stats
	    var pPositions = props.drill.positions;
	    var sPositions = state.drill.positions;

	    // If there is not the same number of steps
	    if(pPositions.length != sPositions.length)
		isEqual = false;

	    // While no difference has been found and all the positions have not been tested
	    while(stepId < pPositions.length && isEqual){

		if(pPositions.length != sPositions.length)
		    isEqual = false;
		
		if(isEqual && pPositions[stepId].length != sPositions[stepId].length)
		    isEqual = false;

		if(isEqual && pPositions[stepId].length > elemId){
		    var pUndefined = pPositions[stepId][elemId] == undefined;
		    var sUndefined = sPositions[stepId][elemId] == undefined;

		    var pSize = -1;
		    var sSize = -1;

		    if(!pUndefined)
			pSize = pPositions[stepId][elemId].length

		    if(!sUndefined)
			sSize = sPositions[stepId][elemId].length

		    // If the position is different
		    if(pSize != sSize
		       || pSize > 0 && (
			   pPositions[stepId][elemId][cutId][0] != sPositions[stepId][elemId][cutId][0]
			       || pPositions[stepId][elemId][cutId][1] != sPositions[stepId][elemId][cutId][1])
		      )
			isEqual = false;
		}

		// Go to the next position
		if(pPositions[stepId][elemId] == undefined){
		    if(pPositions[stepId].length > elemId + 1)
			elemId++;
		    else{
			stepId++;
			elemId = 0;
			cutId = 0;
		    }
		}   
		else if(pPositions[stepId][elemId].length > cutId + 1)
		    cutId++;
		else if(pPositions[stepId].length > elemId + 1){
		    elemId++;
		    cutId = 0;
		}
		else{
		    stepId++;
		    elemId = 0;
		    cutId = 0;
		}
	    }
	}

	if(isEqual)
	    return null;
	else{
	    return {
		drill: props.drill,
		de: undefined,
	    }
	}
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
