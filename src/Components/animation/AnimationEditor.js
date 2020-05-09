import React from 'react';
import { TextInput, StyleSheet, Animated, Dimensions, View } from 'react-native';

import Animation from './Animation';
// import ElementAdderBar from './ElementAdderBar';

import Test from './Test';
// import DisplayedElement from './DisplayedElement';
import Drill from './Drill';

class AnimationEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      draggableElements: [],
      screenH: 1,
      screenW: 1,
      animation: new Drill(props.animation),
      dTop: 0, // Distance between the top of the window and the editor
      dLeft: 0, // Distance between the left of the window and the editor
      width: 0,
      height: 0,
    };

    /** Vertical ratio of the space of the editor in which the animation is displayed */
    this.hRatio = 6 / 7;

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

  onLayout = e => {
    //TODO see why this is needed...
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      dTop: 40,
      dLeft: e.nativeEvent.layout.x,
    });

    console.log('animationE onlayout top left position x/y: ' + e.nativeEvent.layout.x + '/' + e.nativeEvent.layout.y);
    console.log('animationE onlayout w/h: ' + e.nativeEvent.layout.width + '/' + e.nativeEvent.layout.height);
  };

  addElementToAnimation = (element, xDelta, yDelta) => {
    // TODO Replace the hard coded values

    // Get the original position of the element
    var x = 0;
    var y = 0;

    console.log('animationE: element id: ' + element.props.id);

    switch (element.props.id) {
      case 'offense':
        x = 30;
        y = 450;
        this.offenseCount++;
        this.state.draggableElements[0].setNumber(this.offenseCount);
        break;
      case 'defense':
        x = 90;
        y = 450;
        this.defenseCount++;
        this.state.draggableElements[1].setNumber(this.defenseCount);
        break;
      case 'triangle':
        x = 270;
        y = 450;
        break;
      case 'disc':
        x = 190;
        y = 450;
        break;
    }

    var newPosition = this._positionPixelToPercent(x + xDelta, y + yDelta);

    //        yDelta /= 2;
    console.log('x+xDelta/y+yDelta: ' + x + '+' + xDelta + '/' + y + '+' + yDelta);
    console.log('screen w/h + ' + this.state.screenW + '/' + this.state.screenH);
    console.log('window w/h + ' + this.state.width + '/' + this.state.height);
    console.log('added element to animation at position: ' + newPosition[0] + '/' + newPosition[1]);

    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    newAnimation.addElement(element, newPosition[0], newPosition[1]);

    this.setState({ animation: newAnimation });

    //	console.log("ae, add element, step count: " + this.state.animation.positions.length);

    if (this.state.animation.positions.length > 0)
      console.log('\telem count: ' + this.state.animation.positions[0].length);
  };

  /** Convert a position (x, y) in pixels of the phone screen in a position (x2, y2) in percentages of the animation area
   * x: horizontal position in pixels (=0 left edge, =1 right edge)
   * y: vertical position in pixels (=0 top, =1 bottom)
   * x2: corresponding horizontal position in percentage (=0 if centered)
   * y2: corresponding vertical position in percentage (=0 if centered)
   */
  _positionPixelToPercent = (x, y) => {
    console.log(
      'Animation : positionPercentToPixel, animation width/height: ' +
        this.state.width +
        '/' +
        this.state.height * this.hRatio,
    );
    console.log('Animation : positionPercentToPixel, x/y: ' + x + '/' + y);
    console.log('Animation : positionPercentToPixel, dLeft/dTop: ' + this.state.dLeft + '/' + this.state.dTop);

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
    console.log('component mount');

    var newAnimation = this._copyAnimation();

    newAnimation.positions = Array(2);
    newAnimation.positions[0] = [];
    newAnimation.positions[1] = [];

    /* Get the dimension of the screen and then initialize the animation */
    var { height, width } = Dimensions.get('window');

    console.log('screen h/w: ' + height + '/' + width);

    // Create the elements in the horizontal bar
    this.initialElements = [];

    this.initialElements.push(this._createDE('offense'));
    this.initialElements.push(this._createDE('defense'));
    this.initialElements.push(this._createDE('disc'));
    this.initialElements.push(this._createDE('triangle'));

    this.setState(prevState => ({
      draggableElements: prevState.draggableElements.concat(this.initialElements),
      screenH: height,
      screenW: width,
      animation: newAnimation,
    }));
  }

  cutMove = (elemId, xDelta, yDelta, isCounterCut) => {
    console.log('Animation editor: in cut move xD/yD: ' + xDelta + '/' + yDelta);

    console.log('previousStep: ' + (this.currentStep - 1) + ' ceil: ' + Math.ceil(this.currentStep - 1));

    console.log('elemId: ' + elemId);

    console.log('Animation before update: ');
    this.state.animation.log();

    var previousStepId = Math.ceil(this.currentStep) - 1;

    var previousPositions = this.state.animation.getPositionsAtStep(elemId, previousStepId);

    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    console.log(
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

    this.setState({ animation: newAnimation }, () => {
      console.log('Animation after update: ');
      this.state.animation.log();
    });
  };

  moveElement = (element, xDelta, yDelta) => {
    console.log('Animation editor: in move element xD/yD: ' + xDelta + '/' + yDelta);

    console.log('currentStep: ' + this.currentStep + ' ceil: ' + Math.ceil(this.currentStep));

    var currentPosition = this.state.animation.getPositionsAtStep(element.props.eId, Math.ceil(this.currentStep));
    currentPosition = currentPosition[0];
    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    console.log(
      'moved element to position: ' + (currentPosition[0] + xDeltaPercent) + '/' + (currentPosition[1] + yDeltaPercent),
    );
    console.log('Animation before update: ');
    this.state.animation.log();

    var newAnimation = this._copyAnimation();

    newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId] = [];
    newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId].push([]);
    newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(currentPosition[0] + xDeltaPercent);
    newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(currentPosition[1] + yDeltaPercent);

    this.setState({ animation: newAnimation }, () => {
      console.log('Animation after update: ');
      this.state.animation.log();
    });
  };

  _modifiedText = () => {
    //TODO
  };

  _createDE(deType) {
    console.log('create de with type: ' + deType);
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

    console.log('text: ' + text);
    return new Test({
      onMoveEnd: this.addElementToAnimation,
      // key: this.keyCount,
      id: deType,
      eId: -1,
      key,
      movable: true,
      animationWidth: this.state.screenW,
      animationHeight: this.state.screenH,
      number: text,
    });
  }

  _display(item) {
    console.log(item);
    if (item !== undefined && item !== null) return item.render();
    else return undefined;
  }

  addStep = () => {
    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    newAnimation.addStep();

    this.setState({ animation: newAnimation });
  };

  displayStepDescription = () => {
    // TODO
  };

  render() {
    console.log('render AE');
    console.log('this.currentStep: ' + this.currentStep);

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
          heightRatio={1 / 2}
          dTop={this.state.dTop}
          lTop={this.state.lTop}
          onStepChange={this.displayStepDescription}
          onStepAdded={this.addStep}
          currentStepAV={this.currentStepAV}
        />

        {this.state.draggableElements.map(function(item) {
          console.log('render de');
          return item.render();
        })}

        <View style={[{ flex: 3, height: 80 }]} />

        <TextInput
          style={[{ flex: 3 }, {}]}
          placeholder="Step description"
          onChangeText={text => this._modifiedText()}
        />
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
