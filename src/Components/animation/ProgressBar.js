import React from 'react';
import { Text, StyleSheet, Easing, Animated, View, TouchableOpacity, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../styles/theme.style';

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
  constructor(props) {
    super(props);

    this.state = {
      stateFromProps: _initializeStateFromProps(props),
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barArea}>
          {/* Gray bar */}
          <View
            style={[
              styles.progressBar,
              this.props.readonly && styles.largeProgressBar,
              { width: this.state.stateFromProps.progressBarWidth },
            ]}
          />
          {/* Black bar */}
          <Animated.View
            style={[
              styles.progressBar,
              styles.black,
              this.props.readonly && styles.largeProgressBar,
              { width: this.state.stateFromProps.interpolatedWidth },
            ]}
          />

          {/* Gray dots */}
          {!this.props.readonly &&
            this.state.stateFromProps.progressBarDots?.map(item => (
              <View style={[styles.dot, { left: item.left }]} key={item.key} />
            ))}
          {/* Black dots */}
          {!this.props.readonly &&
            this.state.stateFromProps.progressBarDots?.map(item => (
              <Animated.View
                style={[
                  styles.dot,
                  styles.black,
                  {
                    opacity: this.state.stateFromProps.interpolatedOpacities[item.key],
                    left: item.left,
                  },
                ]}
                key={item.key + this.state.stateFromProps.progressBarDots.length}
              />
            ))}
          {/* White squares */}
          {this.props.readonly &&
            this.state.stateFromProps.progressBarDots?.map(item => (
              <Animated.View
                style={styles.square}
                key={item.key + this.state.stateFromProps.progressBarDots.length}
                left={item.left}
              />
            ))}

          {/* Step number */}
          {!this.props.readonly &&
            this.state.stateFromProps.progressBarDots?.map(item => (
              <Text
                style={[styles.progressBarNumbers, { left: item.left + 4 }]}
                key={item.key + 2 * this.state.stateFromProps.progressBarDots.length}
              >
                {item.key + 1}
              </Text>
            ))}

          {/* Clickable areas to move to each step */}
          {this.state.stateFromProps.progressBarDots?.map((item, idx) => (
            <TouchableOpacity
              style={
                this.props.readonly
                  ? [
                      styles.largeHitBox,
                      {
                        width: item.touchableWidth,
                        left: item.touchableLeft,
                      },
                    ]
                  : [styles.dotHitBox, { left: item.left - DOT_SIZE / 2 }]
              }
              onPress={() => this.props.goToStep(item.key)}
              key={1000 + item.key}
            />
          ))}
        </View>

        <View style={styles.controlsArea}>
          <TouchableOpacity onPress={() => this.props.playAnimation()}>
            <MaterialCommunityIcons name="play" color={theme.COLOR_PRIMARY} size={36} />
          </TouchableOpacity>
          {!this.props.readonly && (
            <>
              <TouchableOpacity onPress={() => this.props.onStepAdded()}>
                <MaterialCommunityIcons name="plus-box" color={theme.COLOR_PRIMARY} size={22} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.onStepRemoved()}>
                <MaterialCommunityIcons name="minus-box" color={theme.COLOR_PRIMARY} size={22} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.animationWidth !== state.stateFromProps.animationWidth ||
      props.animationHeight !== state.stateFromProps.animationHeight ||
      props.stepCount !== state.stateFromProps.stepCount
    )
      return { stateFromProps: _initializeStateFromProps(props) };
    else return null;
  }
}

export default ProgressBar;

const DOT_SIZE = 15;

const _initializeStateFromProps = props => {
  let progressBarWidth = props.animationWidth - 135;
  if (props.readonly) progressBarWidth = props.animationWidth - 35;
  const stepWidth = progressBarWidth / props.stepCount;
  progressBarWidth -= stepWidth;

  // Set the horizontal position in pixels of each dot on the progress bar
  let progressBarDots = [];
  for (let i = 0; i < props.stepCount; i++) {
    let touchableWidth = stepWidth;
    const left = i * stepWidth;
    let touchableLeft = left;

    if (i === 0)
      if (props.readonly) touchableWidth = 0;
      else touchableWidth = stepWidth / 2;
    else if (props.readonly) touchableLeft -= stepWidth;
    else touchableLeft -= stepWidth / 2;

    const frozenObj = Object.freeze({
      key: i,
      touchableLeft,
      left,
      touchableWidth,
    });
    progressBarDots = Object.freeze(progressBarDots.concat(frozenObj));
  }

  /* Create an array with all the step numbers */
  const time = [];
  for (let stepId = 0; stepId < props.stepCount; stepId++) time.push(stepId);

  /* For each dot interpolate the step dots opacity */
  const interpolatedOpacities = [];
  for (let dotId = 0; dotId < props.stepCount; dotId++) {
    const opacity = new Array(props.stepCount);
    opacity.fill(0, 0, dotId);
    opacity.fill(1, dotId, props.stepCount);

    interpolatedOpacities.push(
      props.currentStepAV.interpolate({
        inputRange: time,
        outputRange: opacity,
      }),
    );
  }

  return {
    animationHeight: props.animationHeight,
    animationWidth: props.animationWidth,
    progressBarDots,
    progressBarWidth,
    interpolatedOpacities,
    interpolatedWidth: props.currentStepAV.interpolate({
      // Interpolation of the current step which enables to get the current progress bar width
      inputRange: [0, 1],
      outputRange: [0, stepWidth],
    }),
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  barArea: {
    flex: 1,
  },
  controlsArea: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  progressBar: {
    position: 'absolute',
    backgroundColor: 'gray',
    top: (DOT_SIZE - 4) / 2,
    height: 4,
  },
  largeProgressBar: {
    top: (DOT_SIZE + 10) / 2,
    height: 10,
  },
  dot: {
    position: 'absolute',
    backgroundColor: 'gray',
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: 10,
  },
  square: {
    position: 'absolute',
    height: '100%',
    width: DOT_SIZE / 2,
    backgroundColor: 'white',
  },
  dotHitBox: {
    position: 'absolute',
    height: '100%',
    width: DOT_SIZE * 2,
  },
  largeHitBox: {
    position: 'absolute',
    height: '100%',
  },
  black: {
    backgroundColor: 'black',
  },
  progressBarNumbers: {
    position: 'absolute',
    top: DOT_SIZE,
  },
});
