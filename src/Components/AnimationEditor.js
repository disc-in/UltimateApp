import React from 'react';
import { TextInput, Button, StyleSheet, Easing, Animated, Dimensions, View, TouchableOpacity } from 'react-native';

import Animation from './Animation';
import ElementAdderBar from './ElementAdderBar';

import DisplayedDraggableElement from './DisplayedDraggableElement';

class AnimationEditor extends React.Component{

    constructor(props){
	super(props);
	
        this.playerRadius = 40;
        this.discRadius = this.playerRadius / 2;
        this.triangleSize = this.playerRadius * 5/16;

        this.state = {
            draggableElements: []
        };
    }

    _modifiedText = () => {
        //TODO
    }

    _createDE = (deType) => {
        console.log("- In create function");
        console.log("type: " + deType);
	console.log("key: " + this.state.draggableElements.length);
	
        this.setState({
            draggableElements: this.state.draggableElements.concat(
                new DisplayedDraggableElement({onClick: () => this._createDE(deType), key:this.state.draggableElements.length, id:deType})
            ) 
        });
//        var de = <DisplayedDraggableElement animationWidth="200" animationHeight="200" key={this.state.draggableElements.length} onClick={() => this._createDE(deType)}/>
        
        //id: deType, animationWidth: "200", animationHeight: "200", key: "this.state.draggableElements.length", 
    }

    _display(item){

        console.log(item);
        if(item !== undefined)
            return item.render();
        else
            return undefined;
    }

    _test(val){
        console.log("test called with: " + val);
    }
    
    render(){

        console.log("drag undefined?");
        console.log(this.state.draggableElements == undefined);
        console.log("taille: " + this.state.draggableElements.length);
	return( 

	    <View style={styles.main_container}>
	      
	      <Animation style={[{flex:10}]} heightRatio={4/7} widthRatio={1} editable={true}/>
              <DisplayedDraggableElement  id="offense" animationWidth="200" animationHeight="200"  onClick={() => this._createDE("offense")}/>
              <DisplayedDraggableElement  id="defense" animationWidth="200" animationHeight="200"  onClick={() => this._createDE("defense")}/>
              <DisplayedDraggableElement  id="disc" animationWidth="200" animationHeight="200" onClick={() => this._createDE("disc")}/>
              <DisplayedDraggableElement id="triangle" animationWidth="200" animationHeight="200" onClick={() => this._createDE("triangle")}/>

              
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

    disc: {
	borderColor: 'black',
	backgroundColor: 'white',
	height: 20,
	width: 20,
	borderRadius: 20,
	borderWidth: 2
    },
});

export default AnimationEditor;
