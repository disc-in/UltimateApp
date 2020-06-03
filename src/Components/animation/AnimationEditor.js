import React from 'react';
import { StyleSheet, Animated, Dimensions, View } from 'react-native';

import Animation from './Animation';

import DraggableDisplayedElement from './DraggableDisplayedElement';
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

    this.keyCount = 0;

    this.currentStep = 0;

    // Enables to update the current step inside an animation
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

    debug('onLayout: animationWidth/animationHeight: ' + animationWidth + '/' + animationHeight);

    var playerRadius = Math.min(animationWidth, animationHeight) / 12;
    this.draggableElementsTop = animationHeight + 2.5 * playerRadius;
    this.draggableElementsLeft = Array(4);

    this.draggableElementsLeft[0] = (1 * animationWidth) / 5 - playerRadius / 2;
    this.draggableElementsLeft[1] = (2 * animationWidth) / 5 - playerRadius / 2;
    this.draggableElementsLeft[2] = (3 * animationWidth) / 5 - playerRadius / 2;
    this.draggableElementsLeft[3] = (4 * animationWidth) / 5 - playerRadius / 2;

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

    debug('animationE onlayout top left position x/y: ' + e.nativeEvent.layout.x + '/' + e.nativeEvent.layout.y);
    debug('animationE onlayout w/h: ' + e.nativeEvent.layout.width + '/' + e.nativeEvent.layout.height);
  };

  addElementToAnimation = (element, xDelta, yDelta) => {
    // TODO Replace the hard coded values

    // Get the original position of the element
    var x = 0;
    var y = 0;

    debug('animationE: element id: ' + element.props.id);
    var elementNumber = '';

    switch (element.props.id) {
      case 'offense':
        x = this.draggableElementsLeft[0];
        y = this.draggableElementsTop;
        elementNumber = this.offenseCount;
        this.offenseCount++;
        this.state.draggableElements[0].setNumber(this.offenseCount);
        break;
      case 'defense':
        x = this.draggableElementsLeft[1];
        y = this.draggableElementsTop;
        elementNumber = this.defenseCount;
        this.defenseCount++;
        this.state.draggableElements[1].setNumber(this.defenseCount);
        break;
      case 'triangle':
        x = this.draggableElementsLeft[2];
        y = this.draggableElementsTop;
        break;
      case 'disc':
        x = this.draggableElementsLeft[3];
        y = this.draggableElementsTop;
        break;
    }

    var newPosition = this._positionPixelToPercent(x + xDelta, y + yDelta);

    //        yDelta /= 2;
    debug('x+xDelta/y+yDelta: ' + x + '+' + xDelta + '/' + y + '+' + yDelta);
    debug('window w/h + ' + this.state.width + '/' + this.state.height);
    debug('added element to animation at position: ' + newPosition[0] + '/' + newPosition[1]);

    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    newAnimation.addElement(element, newPosition[0], newPosition[1], elementNumber);

    this.saveAnimation(newAnimation);

    //	debug("ae, add element, step count: " + this.state.animation.positions.length);

    if (this.state.animation.positions.length > 0) debug('\telem count: ' + this.state.animation.positions[0].length);
  };

  /** Convert a position (x, y) in pixels of the phone screen in a position (x2, y2) in percentages of the animation area
   * x: horizontal position in pixels (=0 left edge, =1 right edge)
   * y: vertical position in pixels (=0 top, =1 bottom)
   * x2: corresponding horizontal position in percentage (=0 if centered)
   * y2: corresponding vertical position in percentage (=0 if centered)
   */
  _positionPixelToPercent = (x, y) => {
    debug(
      'Animation : positionPercentToPixel, animation width/height: ' +
        this.state.width +
        '/' +
        this.state.height * this.hRatio,
    );
    debug('Animation : positionPercentToPixel, x/y: ' + x + '/' + y);
    debug('Animation : positionPercentToPixel, dLeft/dTop: ' + this.state.dLeft + '/' + this.state.dTop);

    // TODO replace coefficient by variable
    return [
      (x - this.state.dLeft) / (this.state.width * this.wRatio),
      (y - this.state.dTop) / (this.state.height * this.hRatio),
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
    debug('component mount');

    var newAnimation = this._copyAnimation();

    newAnimation.positions = Array(2);
    newAnimation.positions[0] = [];
    newAnimation.positions[1] = [];

    /* Get the dimension of the screen and then initialize the animation */
    var { height, width } = Dimensions.get('window');

    debug('screen h/w: ' + height + '/' + width);

    this.saveAnimation(newAnimation);
  }

  cutMove = (elemId, xDelta, yDelta, isCounterCut) => {
    debug('Animation editor: in cut move xD/yD: ' + xDelta + '/' + yDelta);

    debug('previousStep: ' + (this.currentStep - 1) + ' ceil: ' + Math.ceil(this.currentStep - 1));

    debug('elemId: ' + elemId);

    debug('Animation before update: ');
    this.state.animation.log();

    var previousStepId = Math.ceil(this.currentStep) - 1;

    var previousPositions = this.state.animation.getPositionsAtStep(elemId, previousStepId);

    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    debug(
      'moved cut element to position: ' +
        (previousPositions[0][0] + xDeltaPercent) +
        '/' +
        (previousPositions[0][1] + yDeltaPercent),
    );

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

    /* Set the starting position */
    newAnimation.positions[previousStepId][elemId] = [];
    newAnimation.positions[previousStepId][elemId].push([]);
    newAnimation.positions[previousStepId][elemId][0].push(previousPositions[0][0] + xCutDelta);
    newAnimation.positions[previousStepId][elemId][0].push(previousPositions[0][1] + yCutDelta);

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

      newAnimation.positions[previousStepId][elemId][1].push(newPositionX);
      newAnimation.positions[previousStepId][elemId][1].push(newPositionY);
    }

    this.saveAnimation(newAnimation, () => {
      debug('Animation after update: ');
      this.state.animation.log();
    });
  };

  moveElement = (element, xDelta, yDelta) => {
    debug('Animation editor: in move element xD/yD: ' + xDelta + '/' + yDelta);

    debug('currentStep: ' + this.currentStep + ' ceil: ' + Math.ceil(this.currentStep));

    var currentPosition = this.state.animation.getPositionsAtStep(element.props.eId, Math.ceil(this.currentStep));
    currentPosition = currentPosition[0];
    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    debug(
      'moved element to position: ' + (currentPosition[0] + xDeltaPercent) + '/' + (currentPosition[1] + yDeltaPercent),
    );
    debug('Animation before update: ');
    this.state.animation.log();

    var newAnimation = this._copyAnimation();

    newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId] = [];
    newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId].push([]);
    newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(currentPosition[0] + xDeltaPercent);
    newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(currentPosition[1] + yDeltaPercent);

    this.saveAnimation(newAnimation, () => {
      debug('Animation after update: ');
      this.state.animation.log();
    });
  };

  _createDraggableElements(deType, playerRadius, top, left) {
    var text = '';

    var key = 600;
    this.keyCount += 1;

    if (deType === 'offense') text = '1';

    if (deType === 'defense') {
      text = '1';
      key = 601;
    }

    if (deType === 'triangle') key = 602;

    if (deType === 'disc') key = 603;

    debug('text: ' + text);
    return new DraggableDisplayedElement({
      onMoveEnd: this.addElementToAnimation,
      // key: this.keyCount,
      id: deType,
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
    debug(item);
    if (item !== undefined && item !== null) return item.render();
    else return undefined;
  }

  addStep = () => {
    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    newAnimation.addStep();

    this.saveAnimation(newAnimation);
  };

  displayStepDescription = () => {
    // TODO
  };

  render() {
    debug('render AE');
    debug('this.currentStep: ' + this.currentStep);

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
          currentStepAV={this.currentStepAV}
        />

        {this.state.draggableElements.map(function(item) {
          debug('render de');
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
