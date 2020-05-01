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

    this.playerRadius = 40;
    this.discRadius = this.playerRadius / 2;
    this.triangleSize = (this.playerRadius * 5) / 16;

    this.state = {
      draggableElements: [],
      screenH: 1,
      screenW: 1,
      drill: new Drill(),
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

    this.keyCount = 0;

    this.currentStep = 0;

    // Enables to update the current step inside an animation
    this.currentStepAV = new Animated.Value(0);

    this.currentStepAV.addListener(progress => {
      this.currentStep = progress.value;
    });
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      dTop: e.nativeEvent.layout.y,
      dLeft: e.nativeEvent.layout.x,
    });

    console.log('animationE onlayout top left position x/y: ' + e.nativeEvent.layout.x + '/' + e.nativeEvent.layout.y);
    console.log('animationE onlayout w/h: ' + e.nativeEvent.layout.width + '/' + e.nativeEvent.layout.height);
  };

  addElementToDrill = (element, xDelta, yDelta) => {
    // TODO Replace the hard coded values

    // Get the original position of the element
    var x = 0;
    var y = 0;

    console.log('animationE: element id: ' + element.props.id);

    switch (element.props.id) {
      case 'offense':
        x = 30;
        y = 450;
        break;
      case 'defense':
        x = 90;
        y = 450;
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
    console.log('added element to drill at position: ' + newPosition[0] + '/' + newPosition[1]);

    // Add the element with its initial position
    var newDrill = this._copyDrill();

    newDrill.addElement(element, newPosition[0], newPosition[1]);

    this.setState({ drill: newDrill });

    //	console.log("ae, add element, step count: " + this.state.drill.positions.length);

    if (this.state.drill.positions.length > 0) console.log('\telem count: ' + this.state.drill.positions[0].length);
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

  _copyDrill() {
    var newDrill = new Drill();

    newDrill.positions = JSON.parse(JSON.stringify(this.state.drill.positions));
    newDrill.ids = JSON.parse(JSON.stringify(this.state.drill.ids));
    newDrill.texts = JSON.parse(JSON.stringify(this.state.drill.texts));

    return newDrill;
  }

  componentDidMount() {
    console.log('component mount');

    var newDrill = this._copyDrill();

    newDrill.positions = Array(3);
    newDrill.positions[0] = [];
    newDrill.positions[1] = [];
    newDrill.positions[2] = [];

    /* Get the dimension of the screen and then initialize the drill */
    var { height, width } = Dimensions.get('window');

    console.log('screen h/w: ' + height + '/' + width);

    // Create the elements in the horizontal bar
    var initialElements = [];

    initialElements.push(this._createDE('offense'));
    initialElements.push(this._createDE('defense'));
    initialElements.push(this._createDE('disc'));
    initialElements.push(this._createDE('triangle'));

    this.setState(prevState => ({
      draggableElements: prevState.draggableElements.concat(initialElements),
      screenH: height,
      screenW: width,
      drill: newDrill,
    }));
  }

  moveElement = (element, xDelta, yDelta) => {
    console.log('Animation editor: in move element xD/yD: ' + xDelta + '/' + yDelta);

    console.log('currentStep: ' + this.currentStep + ' ceil: ' + Math.ceil(this.currentStep));

    var currentPosition = this.state.drill.getPositionsAtStep(element.props.eId, Math.ceil(this.currentStep));
    currentPosition = currentPosition[0];
    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    console.log(
      'moved element to position: ' + (currentPosition[0] + xDeltaPercent) + '/' + (currentPosition[1] + yDeltaPercent),
    );
    console.log('Drill before update: ');
    this.state.drill.log();

    var newDrill = this._copyDrill();

    newDrill.positions[Math.ceil(this.currentStep)][element.props.eId] = [];
    newDrill.positions[Math.ceil(this.currentStep)][element.props.eId].push([]);
    newDrill.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(currentPosition[0] + xDeltaPercent);
    newDrill.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(currentPosition[1] + yDeltaPercent);

    console.log('newDrill new pos x: ' + newDrill.positions[Math.ceil(this.currentStep)][element.props.eId][0][0]);
    console.log('newDrill new pos y: ' + newDrill.positions[Math.ceil(this.currentStep)][element.props.eId][0][1]);

    this.setState({ drill: newDrill }, () => {
      console.log('Drill after update: ');
      this.state.drill.log();
    });
  };

  _modifiedText = () => {
    //TODO
  };

  _createDE(deType) {
    //        console.log("create de with type: " + deType);
    var text = '';

    if (deType === 'offense') {
      text = this.offenseCount;
      this.offenseCount++;
    }

    this.keyCount += 1;

    return new Test({
      onMoveEnd: this.addElementToDrill,
      key: this.keyCount,
      id: deType,
      eId: -1,
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

  render() {
    console.log('render AE');
    console.log('this.currentStep: ' + this.currentStep);

    return (
      <View style={styles.mainContainer} onLayout={this.onLayout}>
        <Animation
          onLayout={this.onLayout}
          style={[{ flex: 10 }]}
          editable
          drill={this.state.drill}
          onElementMove={this.moveElement}
          height={this.state.height === undefined ? 300 : this.state.height * this.hRatio}
          width={this.state.width === undefined ? 300 : this.state.width * this.wRatio}
          dTop={this.state.dTop}
          lTop={this.state.lTop}
          currentStepAV={this.currentStepAV}
        />

        {this.state.draggableElements.map(function(item) {
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
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default AnimationEditor;
