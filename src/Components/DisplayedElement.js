import React from 'react';
import { StyleSheet, Easing, Animated, View } from 'react-native';

/** An element displayed in a drill animation */
class DisplayedElement extends React.Component {
  /* Props must contain a property "id" which indicates how to display the element
      ("offense", "defense" or "disc") */
  constructor(props) {
    super(props);

    this.state = {
      /* Current position of the element in pixels */
      currentPosition: new Animated.ValueXY({ x: 0, y: 0 }),
    };
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
            style={[
              styles.defense,
              { top: this.state.currentPosition.y },
              { left: this.state.currentPosition.x },
            ]}
            key={this.props.key}
          >
            {this.props.number}
          </Animated.Text>
        );

      case 'offense':
        return (
          <Animated.Text
            style={[
              styles.offense,
              { top: this.state.currentPosition.y },
              { left: this.state.currentPosition.x },
            ]}
            key={this.props.key}
          >
            {this.props.number}
          </Animated.Text>
        );

      case 'disc':
        return (
          <Animated.View
            style={[
              styles.disc,
              { top: this.state.currentPosition.y },
              { left: this.state.currentPosition.x },
            ]}
            key={this.props.key}
          />
        );

      case 'triangle':
        return (
          <Animated.View
            style={[
              styles.triangle,
              { top: this.state.currentPosition.y },
              { left: this.state.currentPosition.x },
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
    height: 40,
    width: 40,
    borderRadius: 80 / 2,
    backgroundColor: '#dcdcdc',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },

  disc: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 40 / 2,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
  },

  triangle: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12.5,
    borderRightWidth: 12.5,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'orange',
  },
});
