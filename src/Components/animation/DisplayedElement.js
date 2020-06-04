import React from 'react';
import { StyleSheet, Easing, Animated, View, Text, PanResponder } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import theme from '../../styles/theme.style';

import debug from './debug';

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
    this.playerRadius = Math.min(this.props.animationWidth, this.props.animationHeight) / 12;
    this.bottomconeSize = this.playerRadius / 2;

    console.log('de movable?: ' + this.props.movable);
    /* Positions of the element at each step of the drill */
    this.xPositions = [];
    this.yPositions = [];

    /* Value of the progress at which the element must be at these given positions */
    this.time = [];

    console.log(
      'de constructor player radius/animationH/animationW: ' +
        this.playerRadius +
        '/' +
        this.props.animationHeight +
        '/' +
        this.props.animationWidth +
        '/' +
        Math.min(this.props.animationWidth, this.props.animationHeight) / 12,
    );

    for (var stepId = 0; stepId < this.props.animation.stepCount(); stepId++) {
      var currentPositions = this.props.animation.getPositionsAtStep(this.props.eId, stepId);

      var p0 = this.props.positionPercentToPixel(currentPositions[0][0], currentPositions[0][1]);

      this.xPositions.push(p0[0]);
      this.yPositions.push(p0[1]);
      this.time.push(stepId);

      /* If there is a count-cut */
      if (currentPositions.length > 1) {
        var p1 = this.props.positionPercentToPixel(currentPositions[1][0], currentPositions[1][1]);
        this.xPositions.push(p1[0]);
        this.yPositions.push(p1[1]);
        this.time.push(stepId + 0.5);
      }
    }

    this.interpolateX = this.props.currentStepAV.interpolate({
      inputRange: this.time,
      outputRange: this.xPositions,
    });

    this.interpolateY = this.props.currentStepAV.interpolate({
      inputRange: this.time,
      outputRange: this.yPositions,
    });

    this.offset = new Animated.ValueXY({ x: 0, y: 0 });

    // Add a listener on each coordinate offset to get its value at the end of each move
    this.offset.x.addListener(({ value }) => {
      this._value = value;
      console.log('dans le listener: ' + typeof this);
      console.log('dans le listener 2: ' + this.props.animationHeight);
    });
    this.offset.y.addListener(({ value }) => {
      this._value = value;
    });

    // True if the element has already been moved
    this.moved = false;
    this._val = { x: 0, y: 0 };

    this.offset.addListener(value => (this._val = value)); // Initialize PanResponder with move handling

    // Initiate the panResponder
    this.panResponder = PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: () => true,

      // Called when the gesture starts
      onPanResponderGrant: () => {
        if (this.props.movable) {
          this.offset.setOffset({
            x: this._val.x,
            y: this._val.y,
          });

          this.offset.setValue({ x: 0, y: 0 });
        }
      },

      // Called when a move is made
      onPanResponderMove: this.props.movable
        ? Animated.event([null, { dx: this.offset.x, dy: this.offset.y }])
        : undefined,

      onPanResponderRelease: (evt, gesturestate) => {
        if (this.props.movable && this.props.onMoveEnd !== undefined && this.props.onMoveEnd !== null) {
          this.props.onMoveEnd(this, this.offset.x._value, this.offset.y._value);
        }
        console.log('release: ' + this.offset.x._value + '/' + this.offset.y._value);
      },
    });
  }

  // {...this.panResponder.panHandlers}
  // panStyle,
  render() {
    const panStyle = {
      transform: this.offset.getTranslateTransform(),
    };
    // const panStyle = {
    //   transform: [
    //     {
    //       translateX: this.offset.x,
    //     },
    //     {
    //       translateY: this.offset.y,
    //     },
    //   ],
    // };

    switch (this.props.id) {
      case 'defense':
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              { height: this.animationHeight },
              { width: this.animationWidth },
              { position: 'absolute' },
              { alignItems: 'center' },
              { justifyContent: 'center' },
              { left: 0 },
              { top: 0 },
              { backgroundColor: 'black' },
            ]}
          >
            <Animated.View
              style={[
                {
                  transform: [
                    {
                      translateX: this.interpolateX,
                    },
                    {
                      translateY: this.interpolateY,
                    },
                  ],
                },
                styles.defense,
                { height: this.playerRadius },
                { width: this.playerRadius },
                { borderRadius: this.playerRadius },
                { left: 0 },
                { top: 0 },
              ]}
              key={this.props.eId}
            >
              <Text style={styles.defenseText}>{this.props.number}</Text>
            </Animated.View>
          </Animated.View>
        );

      case 'offense':
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.offense,
              { height: this.playerRadius },
              { width: this.playerRadius },
              { borderRadius: this.playerRadius },
              { left: 0 },
              { top: 0 },
            ]}
            key={this.props.eId}
          >
            <LinearGradient
              colors={[theme.GRADIENT_FIRST_COLOR, theme.GRADIENT_SECOND_COLOR]}
              style={[
                styles.gradient,
                {
                  height: this.playerRadius,
                  width: this.playerRadius,
                  borderRadius: this.playerRadius,
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
            key={this.props.eId}
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
              { borderLeftWidth: this.bottomconeSize / 2 },
              { borderRightWidth: this.bottomconeSize / 2 },
              { borderBottomWidth: this.bottomconeSize },
              { top: 0 },
              { left: 0 },
            ]}
            key={this.props.eId}
          />
        );

      default:
        return <View key={this.props.eId} />;
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
    alignItems: 'center',
    justifyContent: 'center',
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
