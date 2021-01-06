import React from 'react';

import { StyleSheet, Animated, Easing, View, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animation from '../animation/Animation';
import DraggableDisplayedElement from './DraggableDisplayedElement';
import BackgroundPicker from './BackgroundPicker';
import Drill from '../animation/Drill';
import theme from '../../styles/theme.style';
import AnimationHistory from './AnimationHistory';

class AnimationEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: new Drill(props.animation),
      dTop: 0, // Distance between the top of the window and the editor
      dLeft: 0, // Distance between the left of the window and the editor
      width: 0,
      height: 0,
      draggableBaseWidth: 0,
      labels: {
        offense: 1,
        defense: 1,
        disc: 1,
        triangle: 1,
      },
      animationHeight: 100,
      animationWidth: 100,
      isElementMoving: false,
      currentStepAV: new Animated.Value(0), // Enables to update the current step inside an animation
    };

    /** Vertical ratio of the space of the editor in which the animation is displayed */
    this.hRatio = 5 / 8;

    /** Horizontal ratio of the space of the editor in which the animation is displayed */
    this.wRatio = 1;

    this.currentStep = 0;

    this.state.currentStepAV.addListener((progress) => {
      this.currentStep = progress.value;
    });
  }

  saveAnimation = (newAnimation) => {
    this.props.onAnimationChange(newAnimation);
    this.setState({ animation: newAnimation }, this.setLabels);
  };

  setLabels = () => {
    const labels = {
      offense: 1,
      defense: 1,
      disc: 1,
      triangle: 1,
    };
    for (const type of this.state.animation.ids) labels[type] += 1;
    this.setState({ labels });
  };

  onLayout = (e) => {
    if (this.marker) {
      this.marker.measure((x, y, width, height, pageX, pageY) => {
        let dLeft = pageX || this.state.dLeft;
        // On iOS, when the left margin is = 0, pageX can be equal to the whole width instead of 0
        if (dLeft > 0.99 * width) dLeft = 0;
        if (Platform.OS === 'ios') {
          dLeft = 0;
        }
        const dTop = pageY || this.state.dTop;
        this.setState({ dLeft, dTop });
      });
    }

    const editorHeight = e.nativeEvent.layout.height;
    const editorWidth = e.nativeEvent.layout.width;
    const animationWidth = editorWidth * this.wRatio;
    const animationHeight = editorHeight * this.hRatio;

    //TODO see why this is needed...
    this.setState({
      width: editorWidth,
      height: editorHeight,
      draggableBaseWidth: Math.min(animationWidth, animationHeight) / 12,
    });
  };

  setAnimationDimension = (height, width) => {
    this.setState({
      animationHeight: height,
      animationWidth: width,
    });
  };

  addElementToAnimation = (type, x, y) => {
    const position = this._positionPixelToPercent(x, y);

    // 0.90 more or less matches the position of the progress bar in Animation
    if (position[0] <= 1 && position[1] <= 0.9 && position[0] >= 0 && position[1] >= 0) {
      const text = this.state.labels[type];

      var newAnimation = this._copyAnimation();
      newAnimation.addElement(type, position[0], position[1], text);
      this.saveAnimation(newAnimation);
    }
  };

  // Function called when a button undo or redo is pressed
  onAnimationHistoryChange = (animation) => {
    // Reduce the currentStep if it is greater than the number of steps in animation
    this.state.currentStepAV.setValue(Math.min(this.currentStep, animation.stepCount() - 1));
    this.saveAnimation(animation);
  };

  onBackgroundChange = (value) => {
    var newAnimation = this._copyAnimation();
    newAnimation.background = value;
    this.saveAnimation(newAnimation);
  };

  /** Convert a position (x, y) in pixels of the phone screen in a position (x2, y2) in percentages of the animation area
   * x: horizontal position in pixels (=0 left edge, =1 right edge)
   * y: vertical position in pixels (=0 top, =1 bottom)
   * x2: corresponding horizontal position in percentage (=0 if centered)
   * y2: corresponding vertical position in percentage (=0 if centered)
   */
  _positionPixelToPercent = (x, y) => {
    /* Here we assume that there is no view at the left or the bottom of the editor */
    return [(x - this.state.dLeft) / this.state.animationWidth, (y - this.state.dTop) / this.state.animationHeight];
  };

  _copyAnimation = () => {
    var newAnimation = new Drill();

    newAnimation.positions = JSON.parse(JSON.stringify(this.state.animation.positions));
    newAnimation.ids = JSON.parse(JSON.stringify(this.state.animation.ids));
    newAnimation.texts = JSON.parse(JSON.stringify(this.state.animation.texts));
    newAnimation.background = JSON.parse(JSON.stringify(this.state.animation.background));

    return newAnimation;
  };

  componentDidUpdate(prevProps, prevState) {
    const animation = new Drill(this.props.animation);
    if (!prevState.animation.isEqualTo(animation)) {
      this.state.currentStepAV.setValue(0);
      this.setState({ animation });
      this.setLabels();
    }
  }

  cutMove = (elemId, xDelta, yDelta, isCounterCut) => {
    var previousStepId = Math.ceil(this.currentStep) - 1;

    var previousPositions = this.state.animation.getPositionsAtStep(elemId, previousStepId);

    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    var newAnimation = this._copyAnimation();

    var xCutDelta = xDeltaPercent;
    var yCutDelta = yDeltaPercent;
    var xCCutDelta = xDeltaPercent;
    var yCCutDelta = yDeltaPercent;

    if (isCounterCut) {
      xCutDelta = 0;
      yCutDelta = 0;
    } else {
      xCCutDelta = 0;
      yCCutDelta = 0;
    }

    var newCutPosition = [previousPositions[0][0] + xCutDelta, previousPositions[0][1] + yCutDelta];

    /* If the cut goes outside of the animation area, put it at the border of the animation */
    if (newCutPosition[0] < 0) newCutPosition[0] = 0;
    else if (newCutPosition[0] > 1) newCutPosition[0] = 1;

    if (newCutPosition[1] < 0) newCutPosition[1] = 0;
    else if (newCutPosition[1] > 0.85) newCutPosition[1] = 0.85;

    /* Set the starting position */
    newAnimation.positions[previousStepId][elemId] = [];
    newAnimation.positions[previousStepId][elemId].push([]);
    newAnimation.positions[previousStepId][elemId][0].push(newCutPosition[0]);
    newAnimation.positions[previousStepId][elemId][0].push(newCutPosition[1]);

    /* If there was a counter-cut or if the counter-cut is moving */
    if (previousPositions.length > 1 || isCounterCut) {
      /* Set the counter-cut position */
      newAnimation.positions[previousStepId][elemId].push([]);

      /* Get the new position of the counter-cut */

      /* 1 - If there was no counter-cut, the move is from (previousPosition + currentPosition) / 2 */
      var currentPositions = this.state.animation.getPositionsAtStep(elemId, previousStepId + 1);
      var newPositionX = (currentPositions[0][0] + previousPositions[0][0]) / 2 + xCCutDelta;
      var newPositionY = (currentPositions[0][1] + previousPositions[0][1]) / 2 + yCCutDelta;

      /* 2 - If there was a counter cut, the move is from this counter-cut position */
      if (previousPositions.length > 1) {
        newPositionX = previousPositions[1][0] + xCCutDelta;
        newPositionY = previousPositions[1][1] + yCCutDelta;
      }

      /* If the counter-cut goes outside of the animation area, put it at the border of the animation */
      if (newPositionX < 0) newPositionX = 0;
      else if (newPositionX > 1) newPositionX = 1;

      if (newPositionY < 0) newPositionY = 0;
      else if (newPositionY > 0.85) newPositionY = 0.85;

      newAnimation.positions[previousStepId][elemId][1].push(newPositionX);
      newAnimation.positions[previousStepId][elemId][1].push(newPositionY);
    }

    this.saveAnimation(newAnimation);
  };

  onElementMoveEnd = (elementIndex, type, xDelta, yDelta) => {
    var currentPositions = this.state.animation.getPositionsAtStep(elementIndex, Math.ceil(this.currentStep));
    const currentPosition = currentPositions[0];
    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    var newPosition = [currentPosition[0] + xDeltaPercent, currentPosition[1] + yDeltaPercent];

    var newAnimation = this._copyAnimation();

    /* If the element is dropped on the trash area */
    if (newPosition[1] > 1) {
      newAnimation.removeElement(elementIndex);
    } else {
      /* If the element is moved outside of the animation area, move it to the closest position inside the animation area */
      if (newPosition[0] < 0) newPosition[0] = 0;
      else if (newPosition[0] > 1) newPosition[0] = 1;
      if (newPosition[1] < 0) newPosition[1] = 0;

      const newPositions = [newPosition];
      if (currentPositions.length > 1) newPositions.push(currentPositions[1]);

      /* If the element is not moved outside of the animation area, updated its coordinates */
      newAnimation.positions[Math.ceil(this.currentStep)][elementIndex] = newPositions;
    }
    this.saveAnimation(newAnimation);
    this.setState({ isElementMoving: false });
  };

  onMoveStart = () => {
    this.setState({
      isElementMoving: true,
    });
  };

  addStep = () => {
    var newAnimation = this._copyAnimation();
    newAnimation.addStep();
    this.saveAnimation(newAnimation);
  };

  removeStep = () => {
    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    /* If the last step is currently displayed */
    if (this.currentStep === this.state.animation.stepCount() - 1)
      Animated.timing(this.state.currentStepAV, {
        toValue: this.state.animation.stepCount() - 2,
        duration: 0,
        easing: Easing.linear,
        key: 0,
        useNativeDriver: false,
      }).start();

    newAnimation.removeStep();

    this.saveAnimation(newAnimation);
  };

  render() {
    return (
      <View
        ref={(ref) => {
          this.marker = ref;
        }}
        onLayout={this.onLayout}
      >
        <Animation
          editable
          animation={this.state.animation}
          currentStep={this.currentStep}
          onMoveStart={this.onMoveStart}
          onElementMoveEnd={this.onElementMoveEnd}
          onDimensionSet={this.setAnimationDimension}
          onCutMove={this.cutMove}
          widthRatio={this.wRatio}
          heightRatio={this.hRatio}
          dTop={this.state.dTop}
          dLeft={this.state.dLeft}
          onStepAdded={this.addStep}
          onStepRemoved={this.removeStep}
          currentStepAV={this.state.currentStepAV}
        />

        <View style={styles.actionsArea}>
          <View
            style={[styles.deletionArea, this.state.isElementMoving ? null : { transform: [{ scale: 0 }] }]}
            pointerEvents="none"
          >
            <MaterialCommunityIcons name="trash-can" color={theme.COLOR_PRIMARY} size={22} />
          </View>
          <View style={[styles.draggableArea, this.state.isElementMoving ? { transform: [{ scale: 0 }] } : null]}>
            <BackgroundPicker
              onBackgroundChange={this.onBackgroundChange}
              selectedBackground={this.state.animation.background}
            />
            {['offense', 'defense', 'disc', 'triangle'].map((type) => (
              <DraggableDisplayedElement
                type={type}
                draggableBaseWidth={this.state.draggableBaseWidth}
                onMoveEnd={this.addElementToAnimation}
                key={type}
                number={this.state.labels[type]}
              />
            ))}
            <AnimationHistory
              animation={this.state.animation}
              onAnimationHistoryChange={this.onAnimationHistoryChange}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionsArea: {
    marginHorizontal: 10,
    marginTop: 10,
    height: 80,
  },
  draggableArea: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 0,
    left: 0,
    top: 0,
    flex: 1,
    zIndex: 1,
  },
  deletionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    height: 80,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    zIndex: 2,
    borderWidth: 2,
    justifyContent: 'center',
  },
});
export default AnimationEditor;
