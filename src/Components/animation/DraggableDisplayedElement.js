import React from 'react';
import { StyleSheet, Easing, Animated, View, PanResponder } from 'react-native';

import theme from '../../styles/theme.style';

/** An element displayed in a drill animation */
class DraggableDisplayedElement extends React.Component {
  /* Props must contain:
      - id: which indicates how to display the element
      ("offense", "defense", "triangle" or "disc")

      - movable: true if element can be moved by the user

      - number: string defined if there is something written on the element

      - eId: element index in the list of elements of the drill (-1 if it is not currently in a drill)

    */
  constructor(props) {
    super(props);

    this.number = this.props.number.toString();

    // TODO: put the constant coefficient used in the following somewhere to avoir writing them twice (in this class and in DrillCuts)

    this.props.discRadius = this.props.playerRadius / 1.1;
    this.props.coneSize = (this.props.playerRadius * 5) / 16;
    this.props.bottomconeSize = (this.props.playerRadius * 10) / 16;
    this.props.borderWidth = this.props.discRadius / 10;

    /* Current position of the element in pixels */

    this.currentPosition = new Animated.ValueXY({ x: 0, y: 0 });

    this.xCut = 10;
    this.yCut = 10;

    // Add a listener on each coordinate offset to get its value at the end of each move
    this.currentPosition.x.addListener(({ value }) => (this._value = value));
    this.currentPosition.y.addListener(({ value }) => (this._value = value));

    // True if the element has already been moved
    this.moved = false;
    this._val = { x: 0, y: 0 };
    this.previousX = -1;
    this.previousY = -1;

    this.currentPosition.addListener(value => (this._val = value)); // Initialize PanResponder with move handling

    // Initiate the panResponder
    this.panResponder = PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: () => true,

      // Called when the gesture starts
      onPanResponderGrant: () => {
        // We always want an element displayed at the original position of the first element.
        // If the current element A is moved for the first time, we create a new element B at the original position of A
        // If A is moved again, we do not do anything. B (or an element created by B) will be at the original position of A.
        if (this.props.movable && this.props.onClick !== undefined && !this.moved) {
          this.currentPosition.setOffset({
            x: this._val.x,
            y: this._val.y,
          });

          this.props.onClick();
          this.moved = true;

          this.currentPosition.setValue({ x: 0, y: 0 });
        }
      },

      // Called when a move is made
      onPanResponderMove: Animated.event([null, { dx: this.currentPosition.x, dy: this.currentPosition.y }]),

      onPanResponderRelease: (evt, gesturestate) => {
        if (this.props.movable && this.props.onMoveEnd !== undefined && this.props.onMoveEnd !== null) {
          this.props.onMoveEnd(this, this.currentPosition.x._value, this.currentPosition.y._value);
          this.currentPosition.setValue({ x: 0, y: 0 });
        }
      },
    });
  }

  setNumber(newNumber) {
    this.number = newNumber.toString();
  }

  setPosition(xArg, yArg) {
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
    const panStyle = {
      transform: this.currentPosition.getTranslateTransform(),
    };

    /* Returns a component according to the element type */
    switch (this.props.id) {
      case 'defense':
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.defense,
              { height: this.props.playerRadius },
              { width: this.props.playerRadius },
              { borderRadius: this.props.playerRadius },
              { top: this.props.top },
              { left: this.props.left },
            ]}
            key={this.props.key + 4}
          >
            <Animated.Text style={styles.defenseText}>{this.number}</Animated.Text>
          </Animated.View>
        );

      case 'offense':
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.offense,
              { height: this.props.playerRadius },
              { width: this.props.playerRadius },
              { borderRadius: this.props.playerRadius },
              { top: this.props.top },
              { left: this.props.left },
            ]}
            key={this.props.key + 4}
          >
            <Animated.Text style={styles.offenseText}>{this.number}</Animated.Text>
          </Animated.View>
        );

      case 'disc':
        return (
          <Animated.View
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.disc,
              { height: this.props.discRadius },
              { width: this.props.discRadius },
              { borderRadius: this.props.discRadius },
              { borderWidth: this.props.discRadius / 10 },
              { top: this.props.top },
              { left: this.props.left },
            ]}
            key={this.props.key + 4}
          >
            <Animated.Text style={styles.discText}>{this.number}</Animated.Text>
          </Animated.View>
        );

      case 'triangle':
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
              { top: this.props.top },
              { left: this.props.left },
            ]}
            key={this.props.key + 4}
          />
        );

      default:
        return <View />;
    }
  }
}

export default DraggableDisplayedElement;

const styles = StyleSheet.create({
  defense: {
    position: 'absolute',
    backgroundColor: theme.DEFENSE_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defenseText: {
    color: theme.OFFENSE_TEXT_COLOR,
    fontWeight: 'bold',
  },
  offense: {
    position: 'absolute',
    backgroundColor: theme.GRADIENT_FIRST_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offenseText: {
    fontWeight: 'bold',
    color: theme.OFFENSE_TEXT_COLOR,
  },
  disc: {
    position: 'absolute',
    borderColor: theme.DISC_BORDER,
    backgroundColor: theme.DISC_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discText: {
    fontWeight: 'bold',
    color: theme.DISC_TEXT_COLOR,
  },
  triangle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: theme.CONE_COLOR,
  },
});
