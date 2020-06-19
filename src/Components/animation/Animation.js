import React from 'react';
import { StyleSheet, Easing, Animated, Dimensions, View, Image } from 'react-native';

import DisplayedElement from './DisplayedElement';
import DisplayedCuts from './DisplayedCuts';
import ProgressBar from './ProgressBar';
import Drill from './Drill';
import AnimationBackground from './AnimationBackground';

class Animation extends React.Component {
  constructor(props) {
    super(props);

    var initialStep = 0;

    // If the current step is fixed by the parent (used in the editor)
    if (props.currentStep !== undefined && props.currentStep !== null) initialStep = props.currentStep;

    if (props.onStepChange !== undefined && props.onStepChange !== null) props.onStepChange(initialStep);

    this.state = {
      stepLength: 1000, // Duration of a step in milliseconds
      animation: new Drill(this.props.animation),
      widthRatio: props.widthRatio,
      heigthRatio: props.heigthRatio,
      displayedElements: _createDisplayedElements(props),
      currentStep: initialStep, // Current step displayed on the phone
      animationPlaying: false,
    };

    // Enables to update the current step inside an animation
    if (this.props.currentStepAV !== null && this.props.currentStepAV !== undefined)
      this.currentStepAV = this.props.currentStepAV;
    else this.currentStepAV = new Animated.Value(0);

    this.currentStepAV.addListener(progress => {
      this.setState({ currentStep: progress.value });
    });

    this.animationWidth = 100;
    this.animationHeight = 100;

    // Distance between the top of the window and the animation area
    this.dTop = this.props.dTop || 0;

    // Distance between the left of the window and the animation area
    this.dLeft = this.props.dLeft || 0;
  }

  /** Number of steps in the animation */
  _stepCount = () => {
    if (this.state.animation !== undefined && this.state.animation !== null) return this.state.animation.stepCount();
    else return 0;
  };

  /** Convert a position (x, y) in percentages of the animation area in a position (x2, y2) in pixels of the phone screen
   * x: horizontal position in percentages (=0 left edge, =1 right edge)
   * y: vertical position in percentages (=0 top, =1 bottom)
   * x2: corresponding horizontal position in pixel (=0 if centered)
   * y2: corresponding vertical position in pixel (=0 if centered)
   */
  _positionPercentToPixel = (x, y) => {
    return [this.animationWidth * x + this.dLeft, this.animationHeight * y + this.dTop];
  };

  /** Once we get the screen size, create the DisplayedElement used in the animation and set them to their initial position */
  componentDidMount() {
    var { height, width } = Dimensions.get('window');

    this.animationWidth = width * this.props.widthRatio;
    this.animationHeight = height * this.props.heightRatio;
  }

  /** Play the whole animation */
  playAnimation = () => {
    this.setState(
      {
        animationPlaying: true,
      },
      () => {
        var sequence = [];

        /* Move instantly to the initial position */
        sequence.push(
          Animated.timing(this.currentStepAV, {
            toValue: 0,
            duration: 0,
            easing: Easing.linear,
            key: 0,
          }),
        );

        sequence.push(
          Animated.timing(this.currentStepAV, {
            toValue: this._stepCount() - 1,
            duration: this.state.stepLength * (this._stepCount() - 1),
            easing: Easing.linear,
            key: 1,
          }),
        );

        Animated.sequence(sequence).start(() =>
          this.setState({ animationPlaying: false, currentStep: this._stepCount() - 1 }),
        );
      },
    );
  };

  /** Animate a step (or just move instantly to it is the first step) */
  playStep = stepId => {
    this.setState(
      {
        animationPlaying: true,
      },
      () => {
        stepId = Math.max(0, Math.round(stepId));

        var sequence = [];

        /* Move instantly to the previous step */
        sequence.push(
          Animated.timing(this.currentStepAV, {
            toValue: Math.max(0, stepId - 1),
            duration: 0,
            easing: Easing.linear,
            key: 0,
          }),
        );

        /* If we do not move to the first step, animate the move from the previous step to the current step */
        if (stepId > 0) {
          sequence.push(
            Animated.timing(this.currentStepAV, {
              toValue: stepId,
              duration: this.state.stepLength,
              easing: Easing.linear,
              key: 1,
            }),
          );
        }

        Animated.sequence(sequence).start(() => this.setState({ animationPlaying: false, currentStep: stepId }));
      },
    );
  };

  render() {
    return (
      <View style={[styles.mainContainer, { height: this.animationHeight }, { width: this.animationWidth }]}>
        {this.animationWidth && (
          <AnimationBackground
            animationWidth={this.animationWidth}
            animationHeight={this.animationHeight}
            background={this.props.animation.background}
          />
        )}

        {this.props.editable && !this.state.animationPlaying && (
          <DisplayedCuts
            step={this.state.currentStep}
            positionPercentToPixel={this._positionPercentToPixel}
            animation={this.props.animation}
            onMoveEnd={this.props.onCutMove}
          />
        )}
        {this.state.displayedElements?.map(item => {
          return (
            <DisplayedElement
              id={item.id}
              number={item.number}
              key={item.key}
              eId={item.eId}
              movable={item.movable}
              onMoveStart={this.props.onMoveStart}
              onMoveEnd={item.onMoveEnd}
              animationWidth={this.animationWidth}
              animationHeight={this.animationHeight}
              animation={this.props.animation}
              currentStepAV={this.currentStepAV}
              positionPercentToPixel={this._positionPercentToPixel}
            />
          );
        })}
        <ProgressBar
          readonly={!this.props.editable}
          animationWidth={this.animationWidth}
          animationHeight={this.animationHeight}
          stepCount={this._stepCount()}
          currentStepAV={this.currentStepAV}
          editable={this.props.editable}
          goToStep={this.playStep}
          playAnimation={this.playAnimation}
          onStepAdded={this.props.onStepAdded}
          onStepRemoved={this.props.onStepRemoved}
          key={1}
        />
      </View>
    );
  }

  /** Used to update the animation when a modification is made through the editor */
  static getDerivedStateFromProps(props, state) {
    // Test if the animation has changed
    var isEqual = true;

    /* If a dimension has changed */
    if (props.widthRatio !== state.widthRatio || props.heightRatio !== state.heightRatio) isEqual = false;

    if (isEqual) {
      /* If the animation is defined in the state */
      if (state.animation !== undefined && state.animation !== null)
        /* Test if all the elements have the same position at each step in both animations */
        isEqual = props.animation.isEqualTo(state.animation);
      else if (props.animation !== undefined || props.animation !== null)
        /* If the animation is not defined in the state but is defined in props */
        isEqual = false;
    }

    if (isEqual) return null;
    else {
      return {
        animation: props.animation,
        displayedElements: _createDisplayedElements(props),
        heightRatio: props.heightRatio,
        widthRatio: props.widthRatio,
      };
    }
  }
}

/** Create the Componenets associated to the elements displayed in this animation */
const _createDisplayedElements = props => {
  var result = [];

  /* For each element displayed in the current animation */
  for (var elemId = 0; elemId < props.animation.elemCount(); ++elemId) {
    /* Create the displayed element according to the animation */
    result.push({
      id: props.animation.ids[elemId],
      number: props.animation.texts[elemId],
      key: elemId,
      eId: elemId,
      movable: props.editable,
      onMoveEnd: props.onElementMove,
    });
  }

  return result;
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Animation;
