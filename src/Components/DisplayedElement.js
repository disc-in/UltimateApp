import React from 'react';
import { StyleSheet, Easing, Animated, View } from 'react-native';

/** An element displayed in a drill animation */
class DisplayedElement extends React.Component {

    /* Props must contain a property "id" which indicates how to display the element
       ("offense", "defense" or "disc") */
    constructor(props) {
	super(props);

        // TODO: put the constant coefficient used in the following somewhere to avoir writing them twice (in this class and in DrillCuts)
	var dimensionMin = Math.min(this.props.animationWidth, this.props.animationHeight);
	this.props.playerRadius = dimensionMin / 12;
	this.props.discRadius = this.props.playerRadius / 2;
	this.props.coneSize = this.props.playerRadius * 5 / 16;

	this.state = {
	    /* Current position of the element in pixels */
	    currentPosition: new Animated.ValueXY({ x: 0, y: 0 }),
	};


        this.xCut = 10;
        this.yCut = 10;
    }

    setPosition(xArg, yArg) {
	this.state.currentPosition.setValue({ x: xArg, y: yArg });
    }

    /** Get an animation to move the element at a given position */
    getAnimation(xValue, yValue, durationValue) {
	return Animated.timing(this.state.currentPosition, {
	    toValue: { x: xValue, y: yValue },
	    duration: durationValue,
	    easing: Easing.linear,
	});
    }

    render() {
	/* Returns a component according to the element type */
	switch (this.props.id) {
	case 'defense':
            return (
		    <Animated.Text
		style={[styles.defense,
			{height: this.props.playerRadius},
			{width: this.props.playerRadius},
			{borderRadius: this.props.playerRadius},
			{ top: this.state.currentPosition.y },
			{ left: this.state.currentPosition.x }]}
		key={this.props.key}
		    >
		    {this.props.number}
		    </Animated.Text>
            );

	case 'offense':
            return (
		    <Animated.Text
		style={[styles.offense,
			{height: this.props.playerRadius},
			{width: this.props.playerRadius},
			{borderRadius: this.props.playerRadius},
			{ top: this.state.currentPosition.y },
			{ left: this.state.currentPosition.x }
		       ]}
		key={this.props.key}
		    >
		    {this.props.number}
		    </Animated.Text>
            );

	case 'disc':
            return (
		    <Animated.View
		style={[styles.disc, 
			{height: this.props.discRadius},
			{width: this.props.discRadius},
			{borderRadius: this.props.discRadius},
			{borderWidth: this.props.discRadius/10},
			{ top: this.state.currentPosition.y },
			{ left: this.state.currentPosition.x }]}
		key={this.props.key}
		    />
            );

	case 'triangle':
            return (
		    <Animated.View
		style={[styles.triangle, 
			{borderLeftWidth: this.props.coneSize},
			{borderRightWidth: this.props.coneSize},
			{borderBottomWidth: 2*this.props.coneSize},
			{top: this.state.currentPosition.y},
			{left: this.state.currentPosition.x}
		       ]}
		key={this.props.key}
		    />
	    );

	default:
	    return <View />;
	}
    }
}

export default DisplayedElement;

const styles = StyleSheet.create({
    offense: {
	position: 'absolute',
	height: 40,
	width: 40,
	borderRadius: 80 / 2,
	backgroundColor: '#cd5c5c',
	textAlign: 'center',
	textAlignVertical: 'center',
	color: 'white',
    },

    defense: {
	position: 'absolute',
	backgroundColor: '#dcdcdc',
	textAlign: 'center',
	textAlignVertical: 'center',
	color: 'black',
    },

    disc: {
	position: 'absolute',
	borderColor: 'black',
	backgroundColor: 'white',
    },

    triangle: {
	position: 'absolute',
	width: 0,
	height: 0,
	backgroundColor: 'transparent',
	borderStyle: 'solid',
	borderLeftColor: 'transparent',
	borderRightColor: 'transparent',
	borderBottomColor: 'orange',
    },
});
