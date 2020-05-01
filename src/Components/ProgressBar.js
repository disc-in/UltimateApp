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

    // Opacity of the step dots (visible if the current step is >= to the step represented by the dot)
    this.dotsOpacity = [];

    for (var i = 0; i < this.props.stepCount; i++)
      // The first step is always visible
      if (i === 0) this.dotsOpacity.push(new Animated.Value(1));
      else this.dotsOpacity.push(new Animated.Value(0));

      // Horizontal position of each dot
      this.progressBarDots = [];

      // Width of the progress bar
      this.progressBarWidth = this.props.animationWidth - 40;

      console.log('Progress bar width: ' + this.progressBarWidth);

      var stepWidth = this.progressBarWidth / (this.props.stepCount - 1);

      // If the bar is in the editor, there is an additional button to add a step
      if(this.props.editable){
          stepWidth = this.progressBarWidth / (this.props.stepCount);
          this.progressBarWidth -= stepWidth;
      }

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
      this.progressBarComponents = this.progressBarDots.map(item => (
              <View style={[styles.dot, { left: item.left }, { top: this.props.animationHeight - 30 }]} key={item.key} />
      ));

      /* Add the gray bar */
      this.progressBarComponents.push(
              <Animated.View
          style={[
              styles.progressBar,
              { top: this.props.animationHeight - 30 + 6 },
              { width: this.progressBarWidth },
              { left: 20 },
          ]}
          key={3 * this.progressBarComponents.length + 1}
              />,
      );

      /* Add the blue dots */
      this.progressBarComponents = this.progressBarComponents.concat(
          this.progressBarDots.map(item => (
                  <Animated.View
              style={[
                  styles.activatedDot,
                  { opacity: this.dotsOpacity[item.key] },
                  { left: this.progressBarDots[item.key].left },
                  { top: this.props.animationHeight - 30 },
              ]}
              key={this.progressBarDots[item.key].key + this.progressBarDots.length}
                  />
          )),
      );

      /* Add the step numbers */
      this.progressBarComponents = this.progressBarComponents.concat(
          this.progressBarDots.map(item => (
                  <Text
               style={[{ position: 'absolute' }, 
                       { left: item.left + 4 },
                       { top: this.props.animationHeight - 30 - 19 }
                      ]}
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
              styles.activatedProgressBar,
              { top: this.props.animationHeight - 30 + 6 },
              { width: this.dynamiqueCurrentStep },
              { left: 20 },
          ]}
          key={3 * this.progressBarComponents.length}
              />,
      );

      /* Add the objects used to detect the clicks on the dots */
      //        if(this.props.animationWidth > 50)
      this.progressBarComponents = this.progressBarComponents.concat(
          this.progressBarDots.map(item => (
                  <TouchableOpacity
              hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
              style={[
                  { position: 'absolute' },
                  { height: 80 },
                  { width: 80 },
                  { left: this.progressBarDots[item.key].left - 15 },
                  { top: this.props.animationHeight - 15 - 30 },
              ]}
              onPress={() => this._stepButtonClicked(item.key)}
              key={1000 + item.key}
                  />
          )),
      );

      if(this.props.editable){
          
          var addDotLeft = 10 + this.props.stepCount * stepWidth;

          /* Add the "add step" dot */
          this.progressBarComponents = this.progressBarComponents.concat(
                  <Animated.View
              style={[
                  styles.activatedDot,
                  { left: addDotLeft},
                  { top: this.props.animationHeight - 30 },
              ]}
              key={2001}
                  />
          );

          /* Add the text "+" */
          this.progressBarComponents = this.progressBarComponents.concat(
              <Text
              style={[{ position: 'absolute' }, 
                      { left: addDotLeft + 4 },
                      { top: this.props.animationHeight - 30 - 3 },
                      {color:'white'}
                     ]}
              key={2002}
              >
                {"+"}
            </Text>
          );

          /* Add the TouchableOpacity to detect the click */
          this.progressBarComponents = this.progressBarComponents.concat(
                  <TouchableOpacity
              hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
              style={[
                  { position: 'absolute' },
                  { height: 80 },
                  { width: 80 },
                  { left: addDotLeft - 15 },
                  { top: this.props.animationHeight - 15 - 30 },
              ]}
              onPress={() => this._addStepButtonClicked()}
              key={2003}
                  />
          );
      }
  }

    _addStepButtonClicked(){

        if(this.props.onStepAdded() !== undefined && this.props.onStepAdded !== null) this.props.onStepAdded();

        
    }

  _stepButtonClicked = key => {
    console.log('step button cliked');

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

const styles = StyleSheet.create({
  activatedDot: {
    position: 'absolute',
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: 'blue',
  },
  dot: {
    position: 'absolute',
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: 'gray',
  },
  activatedProgressBar: {
    position: 'absolute',
    backgroundColor: 'blue',
    height: 3,
  },
  progressBar: {
    position: 'absolute',
    backgroundColor: 'gray',
    height: 3,
  },
});
