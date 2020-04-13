import React from 'react';
import { TextInput, Button, StyleSheet, Easing, Animated, Dimensions, View, TouchableOpacity, PanResponder } from 'react-native';

import DisplayedDraggableElement from './DisplayedDraggableElement';


class ElementAdderBar extends React.Component{

    constructor(props){
	super(props);

        this.playerRadius = 40;
        this.discRadius = this.playerRadius / 2;
        this.triangleSize = this.playerRadius * 5/16;
;
    }

    /** Set the elements dimension once when the player radius is updated */
    _setElementsDimension(playerRadius){

        this.playerRadius =  playerRadius;
        this.discRadius = this.playerRadius / 2;
        this.triangleSize = this.playerRadius * 5/16;
        
    }

    render(){

        console.log("player.radius: " + this.playerRadius);
        console.log("disc.radius: " + this.discRadius);
	return(
            <View style={styles.main_container}>
              <Animated.Text style={styles.offense}>O</Animated.Text>
              <Animated.Text style={styles.defense}>D</Animated.Text>
              <View style={[styles.disc, {borderWidth: this.discRadius/10}]}/>
              <View style={[styles.triangle, {borderBottomWidth: 2*this.triangleSize}]}/>
              <DisplayedDraggableElement id="disc" animationWidth="200" animationHeight="200"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    main_container: {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    offense: {
	backgroundColor: '#cd5c5c',
	textAlign: 'center',
	textAlignVertical: 'center',
	color: 'white',
	height: 40,
	width: 40,
	borderRadius: 40,
    },

    defense: {
	backgroundColor: '#dcdcdc',
	textAlign: 'center',
	textAlignVertical: 'center',
	color: 'black',
	height: 40,
	width: 40,
	borderRadius: 40,
    },

    disc: {
	borderColor: 'black',
	backgroundColor: 'white',
	height: 20,
	width: 20,
	borderRadius: 20,
    },

    triangle: {
	width: 0,
	height: 0,
	backgroundColor: 'transparent',
	borderStyle: 'solid',
	borderLeftColor: 'transparent',
	borderRightColor: 'transparent',
	borderBottomColor: 'orange',
	borderLeftWidth: 12,
	borderRightWidth: 12,
    },
});

export default ElementAdderBar;
