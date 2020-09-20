import React from 'react';
import { StyleSheet, View } from 'react-native';

import MovingCircle from './MovingCircle';
import Animated from 'react-native-reanimated';

/** Enables to display the cuts of a given step */
class DisplayedCuts extends React.Component {
  /** Props must contain:
	- step: the step to display
	- drillCuts: the DrillCuts which contain the position of all the cuts at each step of the drill
    */
  constructor(props) {
    super(props);

    this.state = {
      stateFromProps: _initializeStateFromProps(props),
      step: props.step,
    };
  }

  _displayCut = cut => {
    return (
      <View key={cut.key}>
        <Animated.View
          style={[
            styles.cut,
            {
              width: cut.d1,
              top: cut.top1,
              left: cut.left1,
              transform: [{ rotate: cut.angle1.__getValue() }],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.cut,
            {
              width: cut.d2,
              top: cut.top2,
              left: cut.left2,
              transform: [{ rotate: cut.angle2.__getValue() }],
            },
          ]}
        />
        {cut?.cutCircle}
        {cut?.countercutCircle}
      </View>
    );
  };

  render() {
    return (
      <Animated.View style={{ position: 'absolute', left: 0, top: 0 }} height="100%" width="100%">
        {this.state.stateFromProps?.cuts[this.state.step]?.map(this._displayCut)}
      </Animated.View>
    );
  }

  /** Used to update the cuts when a modification is made in the animation */
  static getDerivedStateFromProps(props, state) {
    // Test if the animation has changed
    let isEqual = true;

    const isSameStep = props.step === state.step;

    /* If the animation is defined in the state */
    if (state.stateFromProps.animation !== undefined && state.stateFromProps.animation !== null)
      /* Test if all the elements have the same position at each step in both animations */
      isEqual = props.animation.isEqualTo(state.stateFromProps.animation);
    else if (props.animation !== undefined || props.animation !== null)
      /* If the animation is not defined in the state but is defined in props */
      isEqual = false;

    if (isEqual)
      if (isSameStep) return null;
      else return { step: props.step };
    else {
      return {
        stateFromProps: _initializeStateFromProps(props),
        step: props.step,
      };
    }
  }
}

const _initializeStateFromProps = props => {
  const animationSize = props.positionPercentToPixel(1, 1);
  const playerRadius = Math.min(animationSize[0], animationSize[1]) / 12;
  const discRadius = playerRadius / 2;
  const coneSize = (playerRadius * 5) / 16;

  /* 2D array: this.cuts[stepId][cutId]
   * Each cut contains:
   * - coordinate x0, y0, x1, y1, x2, y2
   * If there is no counter-cut, (x1, y1) == (x2, y2)
   */
  const cuts = [];

  if (props.animation.ids.length > 0) {
    const elemCount = props.animation.ids.length;

    for (let stepId = 0; stepId < props.animation.stepCount(); stepId++) {
      cuts.push([]);

      // Nothing to do at step 0 as there is no previous position
      if (stepId > 0) {
        // For each element displayed
        for (let elemId = 0; elemId < elemCount; elemId++) {
          // If the element moves at this step
          if (
            props.animation.positions[stepId][elemId] !== null &&
            props.animation.positions[stepId][elemId] !== undefined &&
            props.animation.ids[elemId] !== 'triangle'
          ) {
            const elemCut = [];

            // The cut starting position is its position at step stepId
            const startingPosition = props.positionPercentToPixel(
              props.animation.positions[stepId][elemId][0][0],
              props.animation.positions[stepId][elemId][0][1],
            );
            startingPosition[1] -= props.topMargin;

            elemCut.push(startingPosition);

            const positions = props.animation.getPositionsAtStep(elemId, stepId - 1);
            // For each substep in this cut add the position(s) of the cut
            for (let subStepId = 0; subStepId < positions.length; subStepId++) {
              const pos = props.positionPercentToPixel(positions[subStepId][0], positions[subStepId][1]);
              pos[1] -= props.topMargin;

              elemCut.push(pos);
            }

            let counterCutX = (elemCut[0][0] + elemCut[1][0]) / 2;
            let counterCutY = (elemCut[0][1] + elemCut[1][1]) / 2;

            if (elemCut.length > 2) {
              counterCutX = elemCut[2][0];
              counterCutY = elemCut[2][1];
            }

            const x0 = elemCut[0][0];
            const y0 = elemCut[0][1];
            const x1 = elemCut[1][0];
            const y1 = elemCut[1][1];
            const x2 = counterCutX;
            const y2 = counterCutY;

            const d1 = Math.sqrt(Math.pow(x0 - x2, 2) + Math.pow(y0 - y2, 2));
            const d2 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

            if (d1 !== 0 && d2 !== 0) {
              let angle1 = new Animated.Value(Math.asin(Math.abs(y0 - y2) / d1));
              let angle2 = new Animated.Value(Math.asin(Math.abs(y2 - y1) / d2));

              if (y2 > y0) {
                if (x2 < x0) angle1 = new Animated.Value(3.14159 - angle1.__getValue());
              } else if (x2 > x0) angle1 = new Animated.Value(3.14159 - angle1.__getValue());

              if (y1 > y2) {
                if (x1 < x2) angle2 = new Animated.Value(3.14159 - angle2.__getValue());
              } else if (x1 > x2) angle2 = new Animated.Value(3.14159 - angle2.__getValue());

              const left1 = (x0 + x2 - d1) / 2;
              const top1 = (y0 + y2) / 2;
              const left2 = (x1 + x2 - d2) / 2;
              const top2 = (y1 + y2) / 2;

              cuts[stepId].push({
                key: elemId,
                d1,
                d2,
                angle1,
                angle2,
                left1,
                top1,
                left2,
                top2,
                cutCircle: new MovingCircle({
                  onMoveEnd: props.onMoveEnd,
                  elemId,
                  cx: x1,
                  cy: y1,
                  radius: discRadius / 2,
                  isCounterCut: false,
                }),
                countercutCircle: new MovingCircle({
                  onMoveEnd: props.onMoveEnd,
                  elemId,
                  cx: counterCutX,
                  cy: counterCutY,
                  radius: discRadius / 2,
                  isCounterCut: true,
                }),
              });
            }
          }
        }
      }
    }
  }

  return {
    cuts,
    animation: props.animation,
  };
};

export default DisplayedCuts;

const styles = StyleSheet.create({
  cut: {
    height: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'green',
    borderStyle: 'dashed',
    position: 'absolute',
  },
});
