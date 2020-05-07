import React from 'react';
import { Text, StyleSheet, Easing, Animated, View, TouchableOpacity } from 'react-native';

/** Progress bar displayed with an animation which:
    - shows the number of step;
    - shows the current step;
    - enable to move to a given step by clicking on the associated button
 */
class ProgressBar extends React.Component {
  // The props contains:
  // - animationWidth/animationHeight: size in pixel of the animation
  // - stepCount: the number of steps
  // - currentStepAV: an animated value which represents the current step
  // - getStepAnimation(): set the animation to a given step
  // - stepLength: length of an animation step in ms
  constructor(props) {
    super(props);

    this.state = {
      animationWidth: 1,
      animationHeight: 1,
    };

    // Opacity of the step dots (visible if the current step is >= to the step represented by the dot)
    this.dotsOpacity = [];

    for (var i = 0; i < this.props.stepCount; i++)
      // The first step is always visible
      if (i === 0) this.dotsOpacity.push(new Animated.Value(1));
      else this.dotsOpacity.push(new Animated.Value(0));

    // Horizontal position of each dot
    this.progressBarDots = [];

    // Width of the progress bar
    this.progressBarWidth = this.props.animationWidth - 120;
    var stepWidth = this.progressBarWidth / (this.props.stepCount - 1);

    //        if(this.props.animationWidth > 50)
    // Interpolation of the current step which enables to get the current progress bar width
    this.dynamiqueCurrentStep = this.props.currentStepAV.interpolate({
      inputRange: [0, 1],
      outputRange: [0, stepWidth],
    });

    // Set the horizontal position in pixels of each dot on the progress bar
    for (i = 0; i < this.props.stepCount; i++) {
      this.progressBarDots = this.appendObjTo(this.progressBarDots, {
        key: i,
        left: 10 + i * stepWidth,
      });
    }

    // Contains the graphical components in the progress bar
    this.progressBarComponents = [];

    /* Add the gray dots */
    if (!this.props.readonly)
      this.progressBarComponents = this.progressBarDots.map(item => (
        <View style={[styles.gray, styles.dot, { left: item.left }]} key={item.key} />
      ));

    /* Add the gray bar */
    this.progressBarComponents.push(
      <Animated.View
        style={[
          styles.gray,
          styles.progressBar,
          props.readonly && styles.largeProgressBar,
          { width: this.progressBarWidth },
        ]}
        key={3 * this.progressBarComponents.length + 1}
      />,
    );

    /* Add the blue dots */
    if (!this.props.readonly)
      this.progressBarComponents = this.progressBarComponents.concat(
        this.progressBarDots.map(item => (
          <Animated.View
            style={[
              styles.blue,
              styles.dot,
              {
                opacity: this.dotsOpacity[item.key],
                left: this.progressBarDots[item.key].left,
              },
            ]}
            key={this.progressBarDots[item.key].key + this.progressBarDots.length}
          />
        )),
      );

    /* Add the step numbers */
    if (!props.readonly)
      this.progressBarComponents = this.progressBarComponents.concat(
        this.progressBarDots.map(item => (
          <Text
            style={[styles.progressBarNumbers, { left: item.left + 4 }]}
            key={item.key + 2 * this.progressBarDots.length}
          >
            {item.key + 1}
          </Text>
        )),
      );

    /* Add the blue bar */
    this.progressBarComponents.push(
      <Animated.View
        style={[
          styles.blue,
          styles.progressBar,
          props.readonly && styles.largeProgressBar,
          { width: this.dynamiqueCurrentStep },
        ]}
        key={3 * this.progressBarComponents.length}
      />,
    );

    /* Add the objects used to detect the clicks on the dots */
    //        if(this.props.animationWidth > 50)
    this.progressBarComponents = this.progressBarComponents.concat(
      this.progressBarDots.map((item, idx, arr) => (
        <TouchableOpacity
          style={
            props.readonly
              ? [
                  styles.largeHitBox,
                  {
                    width: idx === 0 ? stepWidth / 2 : idx === arr.length - 1 ? stepWidth / 2 + 15 : stepWidth,
                    left: this.progressBarDots[item.key].left - (idx === 0 ? 0 : stepWidth / 2),
                  },
                ]
              : [styles.dotHitBox, { left: this.progressBarDots[item.key].left - 15 }]
          }
          onPress={() => this._stepButtonClicked(item.key)}
          key={1000 + item.key}
        />
      )),
    );
  }

  _stepButtonClicked = key => {
    Animated.parallel(
      this.props.getStepAnimation(this.progressBarDots[key].key, this.props.currentStepAV <= key),
    ).start();

    if (this.props.onStepChange !== undefined && this.props.onStepChange !== null) this.props.onStepChange(key);
  };

  appendObjTo(thatArray, newObj) {
    const frozenObj = Object.freeze(newObj);
    return Object.freeze(thatArray.concat(frozenObj));
  }

  /** Get an array of Animated.timing which update the opacity of the active dots according to a step.
   * The opacity of the dots of id <= stepId are set to 1
   * The opacity of the other dots is set to 0
   */

  getOpacityAnimation(stepId) {
    var stepAnimation = [];

    /* Color the dots of id <= stepId */
    for (var i = 1; i <= stepId; i++) {
      stepAnimation.push(
        Animated.timing(this.dotsOpacity[i], {
          toValue: 1,
          duration: this.props.stepLength,
          easing: Easing.cubic,
          key: i,
        }),
      );
    }

    /* Hide the dots of id > stepId */
    for (i = stepId + 1; i < this.props.stepCount; i++) {
      stepAnimation.push(
        Animated.timing(this.dotsOpacity[i], {
          toValue: 0,
          duration: this.props.stepLength,
          easing: Easing.cubic,
          key: i,
        }),
      );
    }

    return stepAnimation;
  }

  render() {
    return this.progressBarComponents;
  }
}

export default ProgressBar;

const DOT_SIZE = 15;
const PROGRESS_BAR_MIDDLE = 15;
const HITBOX_SLOP = 20;

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: 10,
    borderWidth: 0,
    bottom: PROGRESS_BAR_MIDDLE - DOT_SIZE / 2,
  },
  dotHitBox: {
    position: 'absolute',
    bottom: 0,
    height: DOT_SIZE + HITBOX_SLOP,
    width: DOT_SIZE + HITBOX_SLOP,
  },
  largeHitBox: {
    position: 'absolute',
    height: PROGRESS_BAR_MIDDLE + HITBOX_SLOP,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  blue: {
    backgroundColor: 'black',
  },
  gray: {
    backgroundColor: 'gray',
  },
  progressBar: {
    position: 'absolute',
    bottom: PROGRESS_BAR_MIDDLE - 4 / 2,
    height: 4,
    left: 20,
  },
  largeProgressBar: {
    height: 10,
    bottom: PROGRESS_BAR_MIDDLE - 10 / 2,
  },
  progressBarNumbers: {
    position: 'absolute',
    bottom: PROGRESS_BAR_MIDDLE + 1 + DOT_SIZE / 2,
  },
});
