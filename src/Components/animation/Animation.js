import React from 'react';
import { Easing, Animated, Dimensions, View, Platform } from 'react-native';

import DisplayedElement from './DisplayedElement';
import DisplayedCuts from './DisplayedCuts';
import ProgressBar from './ProgressBar';
import AnimationBackground from './AnimationBackground';

class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stepLength: 1000, // Duration of a step in milliseconds
      currentStep: props.currentStep || 0, // Current step displayed on the phone
      animationPlaying: false,
    };

    // Enables to update the current step inside an animation
    if (this.props.currentStepAV !== null && this.props.currentStepAV !== undefined)
      this.currentStepAV = this.props.currentStepAV;
    else this.currentStepAV = new Animated.Value(0);

    this.currentStepAV.addListener((progress) => {
      this.setState({ currentStep: progress.value });
    });

    this.animationWidth = 100;
    this.animationHeight = 100;

    // Distance between the top of the window and the animation area
    this.dTop = this.props.dTop || 0;

    // Distance between the left of the window and the animation area
    if (Platform.OS === 'ios') {
      this.dLeft = 0;
    } else {
      this.dLeft = this.props.dLeft || 0;
    }
  }

  /** Convert a position (x, y) in percentages of the animation area in a position (x2, y2) in pixels of the phone screen
   * x: horizontal position in percentages (=0 left edge, =1 right edge)
   * y: vertical position in percentages (=0 top, =1 bottom)
   * x2: corresponding horizontal position in pixel (=0 if centered)
   * y2: corresponding vertical position in pixel (=0 if centered)
   */
  _positionPercentToPixel = (x, y) => {
    if (Platform.OS === 'ios') {
      return [this.animationWidth * x + 0, this.animationHeight * y + this.dTop];
    } else {
      return [this.animationWidth * x + this.dLeft, this.animationHeight * y + this.dTop];
    }
  };

  componentDidMount() {
    var { height, width } = Dimensions.get('window');

    this.animationWidth = width * this.props.widthRatio;

    this.animationHeight = height * this.props.heightRatio;
    if (this.props.editable) this.props.onDimensionSet(this.animationHeight, this.animationWidth);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.editable && prevProps.animation !== this.props.animation) {
      this.currentStepAV.setValue(0);
    }
  }

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
            useNativeDriver: false,
          }),
        );

        sequence.push(
          Animated.timing(this.currentStepAV, {
            toValue: this.props.animation.stepCount() - 1,
            duration: this.state.stepLength * (this.props.animation.stepCount() - 1),
            easing: Easing.linear,
            key: 1,
            useNativeDriver: false,
          }),
        );

        Animated.sequence(sequence).start(() =>
          this.setState({ animationPlaying: false, currentStep: this.props.animation.stepCount() - 1 }),
        );
      },
    );
  };

  playStep = (stepId) => {
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
            useNativeDriver: false,
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
              useNativeDriver: false,
            }),
          );
        }

        Animated.sequence(sequence).start(() => this.setState({ animationPlaying: false, currentStep: stepId }));
      },
    );
  };

  render() {
    return (
      <View>
        <View
          ref={(ref) => {
            this.marker = ref;
          }}
          onLayout={({ nativeEvent }) => {
            if (this.props.editable) {
              this.marker.measure((x, y, width, height, pageX, pageY) => {
                // On iOS, when the left margin is = 0, pageX can be equal to the whole width instead of 0
                if (pageX > 0.99 * width) pageX = 0;

                if (pageY !== undefined) this.dTop = pageY;

                if (pageX !== undefined) this.dLeft = pageX;
                if (Platform.OS === 'ios') {
                  pageX = 0;
                }

                this.props.onTopMarginSet(this.dTop);
              });
            }
          }}
          style={{ height: this.animationHeight, width: this.animationWidth }}
        >
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
              topMargin={this.dTop}
            />
          )}
          {this.props.animation.ids.map((id, index) => (
            <DisplayedElement
              type={id}
              number={this.props.animation.texts[index]}
              key={index}
              eId={index}
              editable={this.props.editable}
              onMoveStart={this.props.onMoveStart}
              onMoveEnd={this.props.onElementMoveEnd}
              topMargin={this.dTop}
              animationWidth={this.animationWidth}
              animationHeight={this.animationHeight}
              animation={this.props.animation}
              currentStepAV={this.currentStepAV}
              positionPercentToPixel={this._positionPercentToPixel}
            />
          ))}
        </View>
        <View>
          <ProgressBar
            readonly={!this.props.editable}
            animationWidth={this.animationWidth}
            animationHeight={this.animationHeight}
            stepCount={this.props.animation.stepCount()}
            currentStepAV={this.currentStepAV}
            goToStep={this.playStep}
            playAnimation={this.playAnimation}
            onStepAdded={this.props.onStepAdded}
            onStepRemoved={this.props.onStepRemoved}
          />
        </View>
      </View>
    );
  }
}

export default Animation;
