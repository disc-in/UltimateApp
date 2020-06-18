import React from 'react';
import { StyleSheet, Animated, Dimensions, Easing, View, Picker } from 'react-native';

import Animation from './Animation';

import DraggableDisplayedElement from './DraggableDisplayedElement';
import BackgroundPicker from './BackgroundPicker';
import Drill from './Drill';

import debug from './debug';

class AnimationEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draggableElements: [],
      animation: new Drill(props.animation),
      dTop: 0, // Distance between the top of the window and the editor
      dLeft: 0, // Distance between the left of the window and the editor
      width: 0,
      height: 0,
    };

    /** Vertical ratio of the space of the editor in which the animation is displayed */
    this.hRatio = 5 / 7;

    /** Horizontal ratio of the space of the editor in which the animation is displayed */
    this.wRatio = 1;

    this.offenseCount = 1;
    this.defenseCount = 1;
    this.discCount = 1;

    this.keyCount = 0;

    this.currentStep = 0;

    // Enables to update  the current step inside an animation
    this.currentStepAV = new Animated.Value(0);

    this.currentStepAV.addListener(progress => {
      this.currentStep = progress.value;
    });
  }

  saveAnimation = (newAnimation, cb) => {
    this.props.onAnimationChange && this.props.onAnimationChange(newAnimation);
    this.setState({ animation: newAnimation }, cb);
  };

  onLayout = e => {
    var editorHeight = e.nativeEvent.layout.height;
    var editorWidth = e.nativeEvent.layout.width;

    //TODO see why this is needed...
    this.setState({
      width: editorWidth,
      height: editorHeight,
      dTop: e.nativeEvent.layout.y,
      dLeft: e.nativeEvent.layout.x,
    });

    // Create the elements in the horizontal bar
    this.initialElements = [];

    var animationWidth = editorWidth * this.wRatio;
    var animationHeight = editorHeight * this.hRatio;

    var playerRadius = Math.min(animationWidth, animationHeight) / 12;
    this.draggableElementsTop = animationHeight + 2.5 * playerRadius;
    this.draggableElementsLeft = Array(4);

    this.draggableElementsLeft[0] = (1 * animationWidth) / 7 - playerRadius / 2;
    this.draggableElementsLeft[1] = (2 * animationWidth) / 7 - playerRadius / 2;
    this.draggableElementsLeft[2] = (3 * animationWidth) / 7 - playerRadius / 2;
    this.draggableElementsLeft[3] = (4 * animationWidth) / 7 - playerRadius / 2;

    this.initialElements.push(
      this._createDraggableElements('offense', playerRadius, this.draggableElementsTop, this.draggableElementsLeft[0]),
    );
    this.initialElements.push(
      this._createDraggableElements('defense', playerRadius, this.draggableElementsTop, this.draggableElementsLeft[1]),
    );
    this.initialElements.push(
      this._createDraggableElements('disc', playerRadius, this.draggableElementsTop, this.draggableElementsLeft[2]),
    );
    this.initialElements.push(
      this._createDraggableElements('triangle', playerRadius, this.draggableElementsTop, this.draggableElementsLeft[3]),
    );

    this.setState(prevState => ({
      draggableElements: prevState.draggableElements.concat(this.initialElements),
    }));
  };

  addElementToAnimation = (element, xDelta, yDelta) => {
    // TODO Replace the hard coded values

    // Get the original position of the element
    var x = 0;
    var y = 0;

    var elementNumber = '';

    switch (element.props.id) {
      case 'offense':
        x = this.draggableElementsLeft[0];
        y = this.draggableElementsTop;
        break;
      case 'defense':
        x = this.draggableElementsLeft[1];
        y = this.draggableElementsTop;
        break;
      case 'triangle':
        x = this.draggableElementsLeft[3];
        y = this.draggableElementsTop;
        break;
      case 'disc':
        x = this.draggableElementsLeft[2];
        y = this.draggableElementsTop;
        break;
    }

    var newPosition = this._positionPixelToPercent(x + xDelta, y + yDelta);
    if (newPosition[0] <= 1 && newPosition[1] <= 0.88 && newPosition[0] >= 0 && newPosition[1] >= 0) {
      switch (element.props.id) {
        case 'offense':
          elementNumber = this.offenseCount;
          this.offenseCount++;
          this.state.draggableElements[0].setNumber(this.offenseCount);
          break;
        case 'defense':
          elementNumber = this.defenseCount;
          this.defenseCount++;
          this.state.draggableElements[1].setNumber(this.defenseCount);
          break;
        case 'disc':
          elementNumber = this.discCount;
          this.discCount++;
          this.state.draggableElements[2].setNumber(this.discCount);
          break;
      }

      // Add the element with its initial position
      var newAnimation = this._copyAnimation();

      newAnimation.addElement(element, newPosition[0], newPosition[1], elementNumber);

      this.saveAnimation(newAnimation);
    }
  };

  onBackgroundChange = value => {
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
    return [
      (x - this.state.dLeft) / (this.state.width * this.wRatio),
      (y - this.state.dTop) / (this.state.height * this.hRatio),
    ];
  };

  /** Convert a position (x, y) in percentage of the animation area (x2, y2) in pixels of the phone screen
   * x: horizontal position in percentage (=0 if centered)
   * y: vertical position in percentage (=0 if centered)
   * x: corresponding horizontal position in pixels (=0 left edge, =1 right edge)
   * y: corresponding vertical position in pixels (=0 top, =1 bottom)
   */
  _positionPercentToPixel = (x, y) => {
    return [
      x * (this.state.width * this.wRatio) + this.state.dLeft,
      y * (this.state.height * this.hRatio) + this.state.dTop,
    ];
  };

  _copyAnimation() {
    var newAnimation = new Drill();

    newAnimation.positions = JSON.parse(JSON.stringify(this.state.animation.positions));
    newAnimation.ids = JSON.parse(JSON.stringify(this.state.animation.ids));
    newAnimation.texts = JSON.parse(JSON.stringify(this.state.animation.texts));

    return newAnimation;
  }

  componentDidMount() {
    var newAnimation = this._copyAnimation();

    newAnimation.positions = Array(2);
    newAnimation.positions[0] = [];
    newAnimation.positions[1] = [];

    /* Get the dimension of the screen and then initialize the animation */
    var { height, width } = Dimensions.get('window');

    this.saveAnimation(newAnimation);
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

    this.saveAnimation(newAnimation, () => {
      this.state.animation.log();
    });
  };

  moveElement = (element, xDelta, yDelta) => {
    var currentPosition = this.state.animation.getPositionsAtStep(element.props.eId, Math.ceil(this.currentStep));
    currentPosition = currentPosition[0];
    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    var newPosition = [currentPosition[0] + xDeltaPercent, currentPosition[1] + yDeltaPercent];
    var newPixelPosition = this._positionPercentToPixel(newPosition[0], newPosition[1]);

    var newAnimation = this._copyAnimation();
    var animationWidth = this.state.width * this.wRatio;
    var animationHeight = this.state.height * this.hRatio;

    /* If the element is dropped on the trash icon */
    if (
      newPixelPosition[0] >= animationWidth - 50 &&
      newPixelPosition[1] >= animationHeight - 50 &&
      newPixelPosition[1] <= animationHeight + 3
    ) {
      /* Remove it from the drill */
      newAnimation.removeElement(element.props.eId);

      /* If it had a number, we need to decrement the number of the corresponding draggable element */
      switch (element.props.id) {
        case 'offense':
          this.offenseCount--;
          this.state.draggableElements[0].setNumber(this.offenseCount);
          break;
        case 'defense':
          this.defenseCount--;
          this.state.draggableElements[1].setNumber(this.defenseCount);
          break;
        case 'disc':
          this.discCount--;
          this.state.draggableElements[2].setNumber(this.discCount);
          break;
      }
    } else {
      /* If the element is moved outside of the animation area, move it to the closest position inside the animation area */
      if (newPosition[0] < 0) newPosition[0] = 0;
      else if (newPosition[0] > 1) newPosition[0] = 1;

      if (newPosition[1] < 0) newPosition[1] = 0;
      else if (newPosition[1] > 0.85) newPosition[1] = 0.85;

      /* If the element is not moved outside of the animation area, updated its coordinates */
      newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId] = [];
      newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId].push([]);
      newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(newPosition[0]);
      newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(newPosition[1]);
    }

    this.saveAnimation(newAnimation);
  };

  _createDraggableElements(displayedElementType, playerRadius, top, left) {
    var text = '';

    var key = 600;
    this.keyCount += 1;

    if (displayedElementType === 'offense') text = '1';

    if (displayedElementType === 'defense') {
      text = '1';
      key = 601;
    }

    if (displayedElementType === 'triangle') key = 602;

    if (displayedElementType === 'disc') {
      text = '1';
      key = 603;
    }

    return new DraggableDisplayedElement({
      onMoveEnd: this.addElementToAnimation,
      id: displayedElementType,
      eId: -1,
      key,
      movable: true,
      playerRadius,
      top,
      left,
      number: text,
    });
  }

  _display(item) {
    if (item !== undefined && item !== null) return item.render();
    else return undefined;
  }

  addStep = () => {
    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    newAnimation.addStep();

    this.saveAnimation(newAnimation);
  };

  removeStep = () => {
    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    /* If the last step is currently displayed */
    if (this.currentStep === this.state.animation.stepCount() - 1)
      Animated.timing(this.currentStepAV, {
        toValue: this.state.animation.stepCount() - 2,
        duration: 0,
        easing: Easing.linear,
        key: 0,
      }).start();

    newAnimation.removeStep();

    this.saveAnimation(newAnimation);
  };

  render() {
    return (
      <View style={styles.mainContainer} onLayout={this.onLayout}>
        <Animation
          onLayout={this.onLayout}
          style={[{ flex: 10 }]}
          editable
          animation={this.state.animation}
          onElementMove={this.moveElement}
          onCutMove={this.cutMove}
          widthRatio={1}
          heightRatio={this.hRatio}
          dTop={this.state.dTop}
          lTop={this.state.lTop}
          onStepChange={this.displayStepDescription}
          onStepAdded={this.addStep}
          onStepRemoved={this.removeStep}
          currentStepAV={this.currentStepAV}
        />

        <BackgroundPicker
          onBackgroundChange={this.onBackgroundChange}
          type={this.state.animation.background}
          style={[{ position: 'absolute', left: 10 }]}
        />

        {this.state.draggableElements.map(function(item) {
          return item.render();
        })}

        <View style={[{ flex: 3, height: 80 }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 0,
    paddingTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default AnimationEditor;
