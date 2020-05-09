import React from 'react';
import { StyleSheet, Easing, Animated, View, Text, PanResponder } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import theme from '../../styles/theme.style';

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
    this.props.coneSize = (this.props.playerRadius * 5) / 16;
    this.props.bottomconeSize = (this.props.playerRadius * 14) / 16;
    this.props.borderWidth = (this.props.discRadius * 8) / 10;

    console.log('DE: player radius: ' + this.props.playerRadius);
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
              { left: 0 },
              { top: 0 },
            ]}
            key={this.props.key}
          >
            <Text style={styles.defenseText}>{this.props.number}</Text>
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
              { left: 0 },
              { top: 0 },
            ]}
            key={this.props.key}
          >
            <LinearGradient
              colors={[theme.GRADIENT_FIRST_COLOR, theme.GRADIENT_SECOND_COLOR]}
              style={[
                styles.gradient,
                {
                  height: this.props.playerRadius,
                  width: this.props.playerRadius,
                  borderRadius: this.props.playerRadius,
                },
              ]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
            >
              <Text style={styles.offenseText}>{this.props.number}</Text>
            </LinearGradient>
          </Animated.View>
        );

      case 'disc':
        return (
          <Animated.View
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
        return (
          <Animated.View
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.triangle,
              { borderLeftWidth: this.props.borderWidth },
              { borderRightWidth: this.props.borderWidth },
              { borderBottomWidth: this.props.bottomconeSize },
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
    backgroundColor: theme.DEFENSE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defenseText: {
    color: theme.OFFENSE_TEXT_COLOR,
    fontWeight: 'bold',
  },
  offense: {
    position: 'absolute',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  offenseText: {
    fontWeight: 'bold',
    color: theme.OFFENSE_TEXT_COLOR,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disc: {
    position: 'absolute',
    borderColor: theme.DISC_BORDER,
    backgroundColor: theme.DISC_COLOR,
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

export default DisplayedElement;
