import React from 'react';
import { StyleSheet, Easing, Animated, View, PanResponder } from 'react-native';

/** An element displayed in a drill animation */
class DisplayedElement extends React.Component {
  /* Props must contain:
      - id: which indicates how to display the element
      ("offense", "defense", "triangle" or "disc")

      - movable: true if element can be moved by the user

      - number: string defined if there is something written on the element

      - eId: element index in the list of elements of the drill (-1 if it is not currently in a drill)

    */
  constructor(props) {
    super(props);

    // TODO: put the constant coefficient used in the following somewhere to avoir writing them twice (in this class and in DrillCuts)
    var dimensionMin = Math.min(this.props.animationWidth, this.props.animationHeight);
    this.props.playerRadius = dimensionMin / 12;
    this.props.discRadius = this.props.playerRadius / 2;
    //    this.props.discRadius = 200;
    this.props.coneSize = (this.props.playerRadius * 5) / 16;

    this.props.bottomconeSize = (this.props.playerRadius * 10) / 16;
    this.props.borderWidth = this.props.discRadius / 10;

    /* Current position of the element in pixels */

    this.currentPosition = new Animated.ValueXY({ x: 0, y: 0 });

    // Add a listener on each coordinate offset to get its value at the end of each move
    this.currentPosition.x.addListener(({ value }) => {
      this._value = value;
    });
    this.currentPosition.y.addListener(({ value }) => {
      this._value = value;
    });

    // True if the element has already been moved
    this.moved = false;
    this._val = { x: 0, y: 0 };

    //	console.log("de movable: " + this.props.movable);

    this.currentPosition.addListener(value => (this._val = value)); // Initialize PanResponder with move handling

    // Initiate the panResponder
    this.panResponder = PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: () => true,

      // Called when the gesture starts
      onPanResponderGrant: () => {
        if (this.props.movable) {
          this.currentPosition.setOffset({
            x: this._val.x,
            y: this._val.y,
          });

          this.currentPosition.setValue({ x: 0, y: 0 });
        }
      },

      // Called when a move is made
      onPanResponderMove: this.props.movable
        ? Animated.event([null, { dx: this.currentPosition.x, dy: this.currentPosition.y }])
        : undefined,

      onPanResponderRelease: (evt, gesturestate) => {
        if (this.props.movable && this.props.onMoveEnd !== undefined && this.props.onMoveEnd !== null) {
          this.props.onMoveEnd(this, this.currentPosition.x._value, this.currentPosition.y._value);
        }
        console.log('release: ' + this.currentPosition.x._value + '/' + this.currentPosition.y._value);
      },
    });
  }

  /** Set the position of the element (the argument are in pixels not in percentage of the screen) */
  setPosition(xArg, yArg) {
    //	console.log("de: set position: " + xArg + "/" + yArg);
    this.currentPosition.setValue({ x: xArg, y: yArg });
  }

  /** Get an animation to move the element at a given position */
  getAnimation(xValue, yValue, durationValue) {
    return Animated.timing(this.currentPosition, {
      toValue: { x: xValue, y: yValue },
      duration: durationValue,
      easing: Easing.linear,
    });
  }

  render() {
    var panStyle = {
      transform: this.currentPosition.getTranslateTransform(),
    };

    /* Returns a component according to the element type */
    switch (this.props.id) {
      case 'defense':
        //            console.log("Render in defense");
        return (
          <Animated.Text
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.defense,
              { height: 40 },
              { width: 40 },
              { borderRadius: 40 },
              { left: 0 },
              { top: 0 },
            ]}
            key={this.props.key}
          >
            {this.props.number}
          </Animated.Text>
        );

      case 'offense':
        //            console.log("Render in offense l/t: " + this.props.left + "/" + this.props.top);

        return (
          <Animated.Text
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.offense,
              { height: 40 },
              { width: 40 },
              { borderRadius: 40 },
              { left: 0 },
              { top: 0 },
            ]}
            key={this.props.key}
          >
            {this.props.number}
          </Animated.Text>
        );

      case 'disc':
        //            console.log("Render in disc");
        return (
          <Animated.View
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.disc,
              { height: 20 },
              { width: 20 },
              { borderRadius: 20 },
              { borderWidth: 2 },
              { left: 0 },
              { top: 0 },
            ]}
            key={this.props.key}
          />
        );

      case 'triangle':
        //            console.log("Render in triangle");
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
              { top: 0 },
              { left: 0 },
            ]}
            key={this.props.key}
          />
        );

      default:
        return <View key={this.props.key} />;
    }
  }
}

const styles = StyleSheet.create({
  defense: {
    position: 'absolute',
    backgroundColor: '#dcdcdc',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },

  offense: {
    position: 'absolute',
    backgroundColor: '#cd5c5c',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },

  disc: {
    position: 'absolute',
    borderColor: 'black',
    backgroundColor: 'white',
  },

  triangle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'orange',
  },
});

export default DisplayedElement;
