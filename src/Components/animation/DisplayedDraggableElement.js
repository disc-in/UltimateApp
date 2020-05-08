import React from 'react';
import { StyleSheet, Easing, Animated, View, PanResponder } from 'react-native';

/** An element displayed in a drill animation */
class DisplayedDraggableElement extends React.Component {
  /* Props must contain a property "id" which indicates how to display the element
      ("offense", "defense" or "disc") */
  constructor(props) {
    super(props);

    // TODO: put the constant coefficient used in the following somewhere to avoir writing them twice (in this class and in DrillCuts)
    var dimensionMin = Math.min(this.props.animationWidth, this.props.animationHeight);
    this.props.playerRadius = dimensionMin / 12;
    //	this.props.discRadius = this.props.playerRadius / 2;
    this.props.coneSize = (this.props.playerRadius * 5) / 16;
    this.props.bottomconeSize = (this.props.playerRadius * 10) / 16;
    this.props.borderWidth = this.props.discRadius / 10;

    this.state = {
      /* Current position of the element in pixels */
      currentPosition: new Animated.ValueXY({ x: 0, y: 0 }),
    };

    this.xCut = 10;
    this.yCut = 10;

    // True if the element has already been moved
    this.moved = false;
    this._val = { x: 0, y: 0 };

    this.state.currentPosition.addListener(value => (this._val = value)); // Initialize PanResponder with move handling

    console.log('create pan responder (' + this.props.truc + ')');
    // Initiate the panResponder
    this.panResponder = PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: () => true,

      // Called when the gesture starts
      onPanResponderGrant: () => {
        this.state.currentPosition.setOffset({
          x: this._val.x,
          y: this._val.y,
        });

        console.log(
          'pos: ' +
            this.state.currentPosition.x +
            '/' +
            this.state.currentPosition.x +
            ', offset: ' +
            this._val.x +
            '/' +
            this._val.y,
        );

        // We always want an element displayed at the original position of the first element.
        // If the current element A is moved for the first time, we create a new element B at the original position of A
        // If A is moved again, we do not do anything. B (or an element created by B) will be at the original position of A.
        if (this.props.onClick !== undefined && !this.moved) {
          this.props.onClick();
          this.moved = true;
        }

        this.state.currentPosition.setValue({ x: 0, y: 0 });
        console.log('grant');
      },

      // Called when a move is made
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.currentPosition.x, dy: this.state.currentPosition.y },
      ]),

      onPanResponderRelease: (evt, gesturestate) => {
        this.props.onMoveEnd(this.state.currentPosition.x._value, this.state.currentPosition.y._value);
      },
    });
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
    const panStyle = {
      transform: this.state.currentPosition.getTranslateTransform(),
    };

    /* Returns a component according to the element type */
    switch (this.props.id) {
      case 'defense':
        console.log('Render in defense');
        return (
          <Animated.Text
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.defense, { height: 40 }, { width: 40 }, { borderRadius: 40 }]}
            key={this.props.key}
          >
            {this.props.number}
          </Animated.Text>
        );

      case 'offense':
        console.log('Render in offense');
        return (
          <Animated.Text
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.offense, { height: 40 }, { width: 40 }, { borderRadius: 40 }]}
            key={this.props.key}
          >
            {this.props.number}
          </Animated.Text>
        );

      case 'disc':
        console.log('Render in disc');
        return (
          <Animated.View
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.disc, { height: 20 }, { width: 20 }, { borderRadius: 20 }, { borderWidth: 2 }]}
            key={this.props.key}
          />
        );

      case 'triangle':
        console.log('Render in triangle');
        return (
          <Animated.View
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.triangle,
              { borderLeftWidth: 12 },
              { borderRightWidth: 12 },
              { borderBottomWidth: 25 },
            ]}
            key={this.props.key}
          />
        );

      default:
        return <View />;
    }
  }
}

export default DisplayedDraggableElement;

const styles = StyleSheet.create({
  offense: {
    position: 'absolute',
    left: 30,
    top: 450,
    backgroundColor: '#cd5c5c',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },

  defense: {
    position: 'absolute',
    left: 110,
    top: 450,
    backgroundColor: '#dcdcdc',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },

  disc: {
    position: 'absolute',
    left: 190,
    top: 450,
    borderColor: 'black',
    backgroundColor: 'white',
  },

  triangle: {
    position: 'absolute',
    left: 270,
    top: 450,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'orange',
    width: 0,
    height: 0,
  },
});
