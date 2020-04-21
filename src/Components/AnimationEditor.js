import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import { TextInput, Button, StyleSheet, Easing, Animated, Dimensions, View, TouchableOpacity } from 'react-native';

import Animation from './Animation';
import ElementAdderBar from './ElementAdderBar';

import Test from './Test';
import DisplayedElement from './DisplayedElement';
import Drill from './Drill';


class AnimationEditor extends React.Component{

    constructor(props){
	super(props);
	
        this.playerRadius = 40;
        this.discRadius = this.playerRadius / 2;
        this.triangleSize = this.playerRadius * 5/16;

        this.state = {
            draggableElements: [],
            screenH: 1,
            screenW: 1,
            drill: new Drill()
        };

        this.offenseCount = 1;

        this.keyCount = 0;
        
        this.animationWidth = 200;
        this.animationHeight = 200;

    }

    addElementToDrill = (element, xDelta, yDelta) =>{


        // TODO Replace the hard coded values
        
        // Get the original position of the element
        var x = 0;
        var y = 0;

        console.log("animationE: element id: " + element.props.id);
        
        switch(element.props.id){
        case "offense":
            x = 30;
            y = 450;
            break;
        case "defense":
            x = 110;
            y = 450;
            break;
        case "triangle":
            x = 270;
            y = 450;
            break;
        case "disc":
            x = 190;
            y = 450;
            break;
            
        }

//        yDelta /= 2;
        console.log("x+xDelta/y+yDelta: " + x + "+" + xDelta + "/" + y + "+" + yDelta);
        console.log("screen w/h + "+  this.state.screenW + "/" + this.state.screenH);
        console.log("added element to drill at position: " + ((x+xDelta)/this.state.screenW) + "/" + ((y+yDelta)/this.state.screenH));

        // Add the element with its initial position
        var newDrill = this._copyDrill();

        
        newDrill.addElement(element, (x+xDelta)/this.state.screenW, (y+yDelta)/this.state.screenH);

        this.setState({drill: newDrill});

        
	console.log("ae, add element, step count: " + this.state.drill.positions.length);

	if(this.state.drill.positions.length > 0)
	    console.log("\telem count: " + this.state.drill.positions[0].length);

    }

    
    /** Function called when the screen size is obtained */
    _initEditor(){

        // TODO set the position of the elements in the bar according to the screen size
    }

    _copyDrill(){
        var newDrill = new Drill();
        
        newDrill.positions = JSON.parse(JSON.stringify(this.state.drill.positions));
        newDrill.ids = JSON.parse(JSON.stringify(this.state.drill.ids));
        newDrill.texts = JSON.parse(JSON.stringify(this.state.drill.texts));

        return newDrill;
    }
    
    componentDidMount(){

        console.log("component mount");

        var newDrill = this._copyDrill();

        newDrill.positions = Array(3);
        newDrill.positions[0] = [];
        newDrill.positions[1] = [];
        newDrill.positions[2] = [];
        
        this.setState({drill: newDrill}, () => {console.log("after set state, ste count " + this.state.drill.positions.length);});

        
        /* Get the dimension of the screen and then initialize the drill */
	var {height, width} = Dimensions.get('window');

//        console.log("screen h/w: " + height + "/" + width);
        
        this.setState({
            screenH: height,
            screenW: width
        }, () => {this._initEditor();});
        
        // Create the elements in the horizontal bar
        var initialElements = [];
        
        initialElements.push(this._createDE("offense"));  
        initialElements.push(this._createDE("defense"));
        initialElements.push(this._createDE("disc")); 
        initialElements.push(this._createDE("triangle"));
        
        this.setState({
            draggableElements: this.state.draggableElements.concat(initialElements) 
        });
    }

    

    moveElement = (element, xDelta, yDelta) => { 

        var currentX = this.state.drill.positions[this.currentStep][element.eId][0][0];
        var currentY = this.state.drill.positions[this.currentStep][element.eId][0][1];
        
        console.log("moved element to position: " + (currentX + xDelta/this.state.screenW) + "/" + (currentY + yDelta/this.state.screenH));

        
        var newDrill = this._copyDrill();

        newDrill.positions[this.currentStep][element.eId][0] = [currentX + xDelta/this.state.screenW, currentY + yDelta/this.state.screenH];

        this.setState({drill: newDrill});
        
    }

    _modifiedText = () => {

        //TODO
    }

    _createDE(deType){


//        console.log("create de with type: " + deType);
        var text = "";

        if(deType == "offense"){
            text = this.offenseCount;
            this.offenseCount++;
        }

        this.keyCount += 1;
        
        return new Test({
            onMoveEnd: this.addElementToDrill,
            key:this.keyCount,
            id:deType,
            eId: -1,
            movable: true,  
            animationWidth: this.animationWidth,
            animationHeight: this.animationHeight,
            number: text
        });
    }

    _display(item){

        console.log(item);
        if(item != undefined)
            return item.render();
        else
            return undefined;
    }
    
    render(){

        console.log("render AE");
        
	return( 

	    <View style={styles.main_container}>

              
	      <Animation
                style={[{flex:10}]}  
                heightRatio={4/7}  
                widthRatio={1}  
                editable={true} 
                drill={this.state.drill}
                onElementMove={this.moveElement}
              />
              
              {this.state.draggableElements.map(function(item){return item.render();})}
	      


              <View style={[{flex:3, height: 80}]}/>
              
              <TextInput style={[{flex:3}, {}]} placeholder='Step description' onChangeText={(text) => this._modifiedText()}/>
            </View>	    
	);
    }
    

}

const styles = StyleSheet.create({

    main_container: {
	flex: 1,
	marginTop: 40,
	alignItems: 'stretch',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'stretch'
    },
});

export default AnimationEditor;
