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
        if (this.props.onMoveStart !== undefined && this.props.onMoveStart !== null) this.props.onMoveStart();

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

      onPanResponderMove: this.props.movable
        ? Animated.event([null, { dx: this.offset.x, dy: this.offset.y }])
        : undefined,

      onPanResponderRelease: (event, gestureState) => {
        if (this.props.movable && this.props.onMoveEnd !== undefined && this.props.onMoveEnd !== null) {
          this.props.onMoveEnd(this.props.eId, this.props.id, gestureState.dx, gestureState.dy);
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
    const panStyle = this.state.isMoving
      ? {
          transform: this.offset.getTranslateTransform(),
        }
      : {
          transform: [
            {
              translateX: this.state.stateFromProps.interpolateX,
            },
            {
              translateY: this.state.stateFromProps.interpolateY,
            },
          ],
        };
    const playerRadius = this.state.stateFromProps.playerRadius;
    const discRadius = playerRadius / 1.5;
    const coneSize = playerRadius / 2;

    let itemStyle, textStyle;
    switch (this.state.stateFromProps.id) {
      case 'defense':
      case 'offense':
        itemStyle = [
          panStyle,
          styles.displayedElement,
          this.state.stateFromProps.id == 'defense' ? styles.defense : styles.offense,
          {
            height: playerRadius,
            width: playerRadius,
            borderRadius: playerRadius,
          },
        ];
        textStyle = styles.playerText;
        break;
      case 'disc':
        itemStyle = [
          panStyle,
          styles.displayedElement,
          styles.disc,
          {
            height: discRadius,
            width: discRadius,
            borderRadius: discRadius,
            borderWidth: discRadius / 10,
          },
        ];
        textStyle = styles.discText;
        break;
      case 'triangle':
        itemStyle = [
          panStyle,
          styles.displayedElement,
          styles.triangle,
          {
            borderLeftWidth: coneSize / 2,
            borderRightWidth: coneSize / 2,
            borderBottomWidth: coneSize,
          },
        ];
        textStyle = styles.triangleText;
    }
    return (
      <Animated.View {...this.panResponder.panHandlers} style={itemStyle} key={this.state.stateFromProps.id}>
        <Animated.Text style={textStyle}>{this.state.stateFromProps.number}</Animated.Text>
      </Animated.View>
    );
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
  displayedElement: {
    position: 'absolute',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
  },
  defense: {
    backgroundColor: theme.DEFENSE_COLOR,
  },
  offense: {
    backgroundColor: theme.MAIN_COLOR,
  },
  playerText: {
    color: theme.PLAYER_TEXT_COLOR,
    fontWeight: 'bold',
  },
  disc: {
    borderColor: theme.DISC_BORDER,
    backgroundColor: theme.DISC_COLOR,
  },
  discText: {
    width: 0,
    height: 0,
  },
  triangle: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderBottomColor: theme.CONE_COLOR,
  },
  triangleText: {
    width: 0,
    height: 0,
  },
});

export default DisplayedElement;
