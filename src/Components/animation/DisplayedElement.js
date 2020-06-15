import React from 'react';
import { StyleSheet, Easing, Animated, View, Text, PanResponder } from 'react-native';

import theme from '../../styles/theme.style';

import debug from './debug';

/** An element displayed in a drill animation */
class DisplayedElement extends React.Component {
  /* Props must contain:
      - id: which indicates how to display the element: "offense", "defense", "triangle" or "disc"
      - movable: true if element can be moved by the user
      - number: string defined if there is something written on the element
      - eId: element index in the list of elements of the drill (-1 if it is not currently in a drill)
    */
  constructor(props) {
    super(props);

    this.state = {
      isMoving: false,
      stateFromProps: _initializeStateFromProps(props),
    };

    this.offset = new Animated.ValueXY({ x: 0, y: 0 });

    // Initiate the panResponder
    this.panResponder = PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: () => true,

      // Called when the gesture starts
      onPanResponderGrant: () => {
        if (this.props.movable) {
          this.setState({
            isMoving: true,
          });

          this.offset.setOffset({
            x: this.state.stateFromProps.interpolateX.__getValue(),
            y: this.state.stateFromProps.interpolateY.__getValue(),
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
        this.setState({
          isMoving: false,
        });
      },
    });
  }

  static getDerivedStateFromProps(props, state) {
    var isEqual = true;

    /* If most of the attributes are equal */
    if (
      props.id !== state.stateFromProps.id ||
      props.number !== state.stateFromProps.number ||
      props.eId !== state.stateFromProps.eId ||
      props.animationWidth !== state.stateFromProps.animationWidth ||
      props.animationHeight !== state.stateFromProps.animationHeight
    )
      isEqual = false;

    if (isEqual) {
      /* If the animation is defined in the state */
      if (state.stateFromProps.animation !== undefined && state.stateFromProps.animation !== null)
        /* Test if the element has the same position at each step in both animations */
        isEqual = props.animation.isElementEqualIn(props.eId, state.stateFromProps.animation);
      else if (props.animation !== undefined || props.animation !== null)
        /* If the animation is not defined in the state but is defined in props */
        isEqual = false;
    }

    if (isEqual) return null;
    else {
      return {
        stateFromProps: _initializeStateFromProps(props),
      };
    }
  }

  render() {
    const panStyle = {
      transform: this.offset.getTranslateTransform(),
    };

    switch (this.state.stateFromProps.id) {
      case 'defense':
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              this.state.moving
                ? panStyle
                : {
                    transform: [
                      {
                        translateX: this.state.stateFromProps.interpolateX,
                      },
                      {
                        translateY: this.state.stateFromProps.interpolateY,
                      },
                    ],
                  },
              styles.defense,
              { height: this.state.stateFromProps.playerRadius },
              { width: this.state.stateFromProps.playerRadius },
              { borderRadius: this.state.stateFromProps.playerRadius },
              { left: 0 },
              { top: 0 },
            ]}
            key={this.state.stateFromProps.id}
          >
            <Text style={styles.defenseText}>{this.state.stateFromProps.number}</Text>
          </Animated.View>
        );
      case 'offense':
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              this.state.isMoving
                ? panStyle
                : {
                    transform: [
                      {
                        translateX: this.state.stateFromProps.interpolateX,
                      },
                      {
                        translateY: this.state.stateFromProps.interpolateY,
                      },
                    ],
                  },
              styles.offense,
              { height: this.state.stateFromProps.playerRadius },
              { width: this.state.stateFromProps.playerRadius },
              { borderRadius: this.state.stateFromProps.playerRadius },
              { left: 0 },
              { top: 0 },
            ]}
            key={this.state.stateFromProps.id}
          >
            <Text style={styles.offenseText}>{this.state.stateFromProps.number}</Text>
          </Animated.View>
        );
      case 'disc':
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              this.state.isMoving
                ? panStyle
                : {
                    transform: [
                      {
                        translateX: this.state.stateFromProps.interpolateX,
                      },
                      {
                        translateY: this.state.stateFromProps.interpolateY,
                      },
                    ],
                  },
              styles.disc,
              { height: 20 },
              { width: 20 },
              { borderRadius: 20 },
              { borderWidth: 2 },
              { left: 0 },
              { top: 0 },
            ]}
            key={this.state.stateFromProps.id}
          />
        );
      case 'triangle':
        return (
          <Animated.View
            // Use the panResponder in this view
            {...this.panResponder.panHandlers}
            style={[
              this.state.isMoving
                ? panStyle
                : {
                    transform: [
                      {
                        translateX: this.state.stateFromProps.interpolateX,
                      },
                      {
                        translateY: this.state.stateFromProps.interpolateY,
                      },
                    ],
                  },
              styles.triangle,
              { borderLeftWidth: this.state.stateFromProps.bottomConeSize / 2 },
              { borderRightWidth: this.state.stateFromProps.bottomConeSize / 2 },
              { borderBottomWidth: this.state.stateFromProps.bottomConeSize },
              { top: 0 },
              { left: 0 },
            ]}
            key={this.state.stateFromProps.id}
          />
        );
      default:
        return <View key={this.state.stateFromProps.id} />;
    }
  }
}

const _initializeStateFromProps = props => {
  /* Positions of the element at each step of the drill */
  var xPositions = [];
  var yPositions = [];

  /* Value of the progress at which the element must be at these given positions */
  var time = [];

  /* For each step */
  for (var stepId = 0; stepId < props.animation.stepCount(); stepId++) {
    var currentPositions = props.animation.getPositionsAtStep(props.eId, stepId);

    /* Get the element initial position */
    var p0 = props.positionPercentToPixel(currentPositions[0][0], currentPositions[0][1]);

    xPositions.push(p0[0]);
    yPositions.push(p0[1]);
    time.push(stepId);

    /* If there is a count-cut */
    if (currentPositions.length > 1) {
      /* If the counter-cut is not at last step (in theory there should not be any counter-cut at last step) */
      if (stepId !== props.animation.stepCount() - 1) {
        /* Get the element counter-cut position */
        var p1 = props.positionPercentToPixel(currentPositions[1][0], currentPositions[1][1]);

        var nextPositions = props.animation.getPositionsAtStep(props.eId, stepId + 1);
        var p2 = props.positionPercentToPixel(nextPositions[0][0], nextPositions[0][0]);

        var d1 = Math.sqrt(Math.pow(p0[0] - p1[0], 2) + Math.pow(p0[1] - p1[1], 2));
        var d2 = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));

        if (d1 + d2 > 0) {
          xPositions.push(p1[0]);
          yPositions.push(p1[1]);
          time.push(stepId + d1 / (d1 + d2));
        }
      }
    }
  }

  var interpolateX = props.currentStepAV.interpolate({
    inputRange: time,
    outputRange: xPositions,
  });

  var interpolateY = props.currentStepAV.interpolate({
    inputRange: time,
    outputRange: yPositions,
  });

  // TODO: put the constant coefficient used in the following somewhere to avoir writing them twice (in this class and in DrillCuts)
  var playerRadius = Math.min(props.animationWidth, props.animationHeight) / 12;

  return {
    playerRadius,
    bottomConeSize: playerRadius / 2,
    id: props.id,
    eId: props.eId,
    number: props.number,
    animationWidth: props.animationWidth,
    animationHeight: props.animationHeight,
    animation: props.animation,
    interpolateX,
    interpolateY,
  };
};

const styles = StyleSheet.create({
  defense: {
    position: 'absolute',
    backgroundColor: theme.DEFENSE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defenseText: {
    fontWeight: 'bold',
    color: theme.OFFENSE_TEXT_COLOR,
  },
  offense: {
    position: 'absolute',
    backgroundColor: theme.GRADIENT_FIRST_COLOR,
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

export default DisplayedElement;
