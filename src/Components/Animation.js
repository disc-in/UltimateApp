import React from 'react';
import { Text, Button, StyleSheet, Easing, Animated, Dimensions, View } from 'react-native';

import DisplayedElement from './DisplayedElement';

/** Display a drill and enables to animate it using buttons (play, next step, previous step)
 *
 * TODO:
 * - when moving to a given step stepId, put back all displayed elements to their position prior stepId
 * - when restarting the complete animation, if the elements are not in their initial positions, add an empty animation to move the elements to their initial position before starting the animation
 * - fix the ratio of a drill (otherwise the display of a drill may be distorted)
 */
class Animation extends React.Component {
  state = {
    screenH: 1, // Height of the animation space
    screenW: 0, // Width of the animation space
    stepLength: 1000, // Duration of a step in milliseconds
    drill: this.props.animation,
    de: [], // The graphical elments displayed in the drill
    currentStep: 0, // Current step displayed on the phone
  };

  // Enables to update the current step inside an animation
  currentStepAV = new Animated.Value(0);

  /** Number of elements displayed in the drill */
  _elemCount() {
    return this.state.drill.ids.length;
  }

  /** Number of steps in the drill */
  _stepCount() {
    return this.state.drill.positions[0].length;
  }

  /** Create the DisplayedElement used in the drill and set them to their initial position */
  _initDrill() {
    /* For each element displayed in the current drill */
    for (let elemId = 0; elemId < this._elemCount(); ++elemId) {
      /* Create the displayed element according to the drill */
      this.state.de.push(
        new DisplayedElement({
          id: this.state.drill.ids[elemId],
          number: this.state.drill.texts[elemId],
          positions: this.state.drill.positions[elemId],
          key: elemId,
        }),
      );
    }

    /* Set all the elements to their initial positions */
    this._initPositions();
  }

  /** Convert a position (x, y) in percentages in a position (x2, y2) in pixels
   * x: horizontal position in percentages (=0 left edge, =1 right edge)
   * y: vertical position in percentages (=0 top, =1 bottom)
   * x2: corresponding horizontal position in pixel (=0 if centered)
   * y2: corresponding vertical position in pixel (=0 if centered)
   */
  _positionPercentToPixel(x, y) {
    return [
      this.state.screenW * x, // - this.state.screenW/2,
      this.state.screenH * y, // - this.state.screenH/2
    ];
  }

  /** Set each displayed element at its original position */
  _initPositions() {
    /* For each element */
    for (let i = 0; i < this.state.de.length; i++) {
      const element = this.state.de[i];

      /* Get its position in pixel (it is represented in percentage in the drill) */
      const pixelPosition = this._positionPercentToPixel(
        this.state.drill.positions[i][0][0][0],
        this.state.drill.positions[i][0][0][1],
      );

      element.setPosition(pixelPosition[0], pixelPosition[1]);
    }

    this.setState({ currentStep: 0 });
  }

  componentDidMount() {
    /* Get the dimension of the screen and then initialize the drill */
    const { height, width } = Dimensions.get('window');

    this.currentStepAV.addListener(progress => {
      this.setState({ currentStep: progress.value });
    });

    this.setState(
      {
        screenH: height,
        screenW: width,
      },
      () => {
        this._initDrill();
      },
    );
  }

  /** Play the whole drill */
  _restart() {
    this._initPositions();

    /* Animation of the whole drill */
    const completeSequence = [];

    /* For each step (start at step 1 as step 0 corresponds to the initial positions)*/
    for (let stepId = 1; stepId < this._stepCount(); stepId++)
      completeSequence.push(Animated.parallel(this._getStepAnimation(stepId, true)));

    Animated.sequence(completeSequence).start();
  }

  /** Get back to the previous step */
  _previousStep() {
    if (this.state.currentStep !== 0) {
      this.setState(
        ({ currentStep }) => ({ currentStep: currentStep - 1 }),
        () => {
          Animated.parallel(this._getStepAnimation(this.state.currentStep, false)).start();
        },
      );
    }
  }

  /** Go to the next step */
  _nextStep() {
    if (this.state.currentStep !== this._stepCount() - 1) {
      this.setState(
        ({ currentStep }) => ({ currentStep: currentStep + 1 }),
        () => {
          Animated.parallel(this._getStepAnimation(this.state.currentStep, true)).start();
        },
      );
    }
  }

  /** Returns the animation to a given step for all displayed elements */
  _getStepAnimation(stepId, isForward) {
    /* Animation of all the elements at step stepId */
    const stepAnimation = [];

    /* For each displayed element */
    for (let elemId = 0; elemId < this.state.drill.positions.length; elemId++) {
      /* Get the position of the element at step stepId */
      let nextPosition = this.state.drill.positions[elemId][stepId];

      /* The substep are played only if the element moves at step stepId.
	       Otherwise, we just move the element to its previous position without playing the substeps of this position */
      let playSubSteps = true;

      if (nextPosition === undefined || (nextPosition !== undefined && !isForward)) playSubSteps = false;

      /* If the element does not change its position at step stepId, find its last previous position */
      let stepToCheck = stepId - 1;
      let allStepChecked = false;

      /* While the position of the element at step stepId has not been found  and all the steps after the current one have been checked */
      while (nextPosition === undefined && !allStepChecked) {
        nextPosition = this.state.drill.positions[elemId][stepToCheck];

        stepToCheck -= 1;

        if (stepToCheck === this.state.currentStep) allStepChecked = true;
      }

      /* If this element must change its position */
      if (nextPosition !== undefined) {
        /* Animation of the element at step stepId */
        const deStepAnimation = [];

        /* The first animation in the sequence enables to update the current step */
        deStepAnimation.push(
          Animated.timing(this.currentStepAV, {
            toValue: stepId,
            duration: 0,
            easing: Easing.linear,
          }),
        );

        const substepCount = nextPosition.length;

        /* If the sub steps must be played */
        if (playSubSteps) {
          if (isForward) {
            /* For each substep of element de in step stepId */
            for (let substep = 0; substep < substepCount; substep++) {
              const currentDE = this.state.de[elemId];

              /* Get the position of the element at this substep */
              const pixelPosition = this._positionPercentToPixel(nextPosition[substep][0], nextPosition[substep][1]);

              /* Get the corresponding animation */
              const anim = currentDE.getAnimation(
                pixelPosition[0],
                pixelPosition[1],
                this.state.stepLength / substepCount,
              );

              deStepAnimation.push(anim);
            }
          } else {
            /* If the step must be played backward */
            /* For each substep of element de in step stepId */
            for (let substep = substepCount - 1; substep >= 0; substep--) {
              const currentDE = this.state.de[elemId];

              /* Get the position of the element at this substep */
              const pixelPosition = this._positionPercentToPixel(nextPosition[substep][0], nextPosition[substep][1]);

              /* Get the corresponding animation */
              const anim = currentDE.getAnimation(
                pixelPosition[0],
                pixelPosition[1],
                this.state.stepLength / substepCount,
              );

              deStepAnimation.push(anim);
            }
          }
        } else {
          /* If the sub steps must not be played, just move the element to the last position */
          const currentDE = this.state.de[elemId];

          /* Get the position of the element at this substep */
          const pixelPosition = this._positionPercentToPixel(
            nextPosition[substepCount - 1][0],
            nextPosition[substepCount - 1][1],
          );

          /* Get the corresponding animation */
          const anim = currentDE.getAnimation(pixelPosition[0], pixelPosition[1], this.state.stepLength);

          deStepAnimation.push(anim);
        }

        stepAnimation.push(Animated.sequence(deStepAnimation));
      }
    }

    return stepAnimation;
  }

  _displayElement(item) {
    return item.render();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.state.de.map(this._displayElement)}
        <Text>
          Step {this.state.currentStep + 1}/{this._stepCount()}
        </Text>
        <View style={{ flex: 0.1 }} />
        <Button style={{ flex: 1 }} title=" < " onPress={() => this._previousStep()} />
        <View style={{ flex: 0.1 }} />
        <Button style={{ flex: 1 }} title="Lancer" onPress={() => this._restart()} />
        <View style={{ flex: 0.1 }} />
        <Button title=" > " style={{ flex: 1 }} onPress={() => this._nextStep()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Animation;
