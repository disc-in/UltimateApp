import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Animated, PanResponder } from 'react-native';
import MovingCircle from './MovingCircle';

/** The cuts that must be displayed at each step of a drill (a cut correspond to the position of a player at the previous step) */
class DrillCuts extends React.Component {
  /** Props must contain:
	- drill: the drill Z
	- animationHeight/Width: size of the animation area
	- currentStep: the current step
	- positionPercentToPixel: function which returns the absolute position (x, y) in pixel on the screen associated to a position in percentages (xp, yp) on the animation
    */
  constructor(props) {
    super(props);

    // TODO: put the constant coefficient used in the following somewhere to avoir writing them twice (in this class and in DisplayedElement)
    var dimensionMin = Math.min(this.props.animationWidth, this.props.animationHeight);
    this.playerRadius = dimensionMin / 12;
    this.discRadius = this.playerRadius / 2;
    this.coneSize = (this.playerRadius * 5) / 16;

    /* 2D array: this.cuts[stepId][cutId]
     * Each cut contains:
     * - coordinate x0, y0, x1, y1, x2, y2
     * If there is no counter-cut, (x1, y1) == (x2, y2)
     */
    this.cuts = [];

    if (this.props.drill.ids.length > 0) {

      var elemCount = this.props.drill.ids.length;

      /* For each step */
      for (var stepId = 0; stepId < this.props.drill.stepCount(); stepId++) {
        //        console.log('stepId: ' + stepId);
        this.cuts.push([]);

        /* Nothing to do at step 0 as there is no previous position */
        if (stepId > 0) {
          /* For each element displayed */
          for (var elemId = 0; elemId < elemCount; elemId++) {

              console.log("drill cut, elem id: " + elemId);
            /* If the element moves at this step */
            if (
              this.props.drill.positions[stepId][elemId] !== null &&
              this.props.drill.positions[stepId][elemId] !== undefined
            ) {
              var elemCut = [];

              /* The cut starting position is its position at step stepId */
              var pos = this.props.positionPercentToPixel(
                this.props.drill.positions[stepId][elemId][0][0],
                this.props.drill.positions[stepId][elemId][0][1],
              );

              this._addOffset(pos, elemId);
              elemCut.push(pos);

              var positions = this.props.drill.getPositionsAtStep(elemId, stepId - 1);
              //            console.log('positions: ' + positions);

              /* For each substep in this cut */
              for (var subStepId = 0; subStepId < positions.length; subStepId++) {
                /* Add the position(s) of the cut */
                pos = this.props.positionPercentToPixel(positions[subStepId][0], positions[subStepId][1]);
                this._addOffset(pos, elemId);

                elemCut.push(pos);
              }
                
                var counterCutX = (elemCut[0][0] + elemCut[1][0]) / 2;
                var counterCutY = (elemCut[0][1] + elemCut[1][1]) / 2;

                if(elemCut.length > 2){
                    counterCutX = elemCut[2][0];
                    counterCutY = elemCut[2][1];
                }
                
              this.cuts[stepId].push({
                key: elemId,
                x0: elemCut[0][0],
                y0: elemCut[0][1],
                x1: elemCut[1][0],
                y1: elemCut[1][1],
                x2: counterCutX,
                y2: counterCutY,
                  cutCircle: new MovingCircle({
                      onMoveEnd:this.props.onMoveEnd,
                      elemId: elemId,
                      animationHeight: this.props.animationHeight,
                      animationWidth: this.props.animationWidth,
                      cx: elemCut[1][0],
                      cy: elemCut[1][1],
                      radius: this.discRadius / 2,
                      isCounterCut: false
                  }),
                  countercutCircle: new MovingCircle({
                      onMoveEnd:this.props.onMoveEnd,
                      elemId: elemId,
                      animationHeight: this.props.animationHeight,
                      animationWidth: this.props.animationWidth,
                      cx: counterCutX,
                      cy: counterCutY,
                      radius: this.discRadius / 2,
                      isCounterCut: true
                  }), 
              });
            }
          }
        }
      }
    }
  }

  /** Add an offset to the position so that the cut is placed at the center of the element (otherwise it would be at its top left) */
  _addOffset(pos, elemId) {
    switch (this.props.drill.ids[elemId]) {
      case 'triangle':
        pos[0] += this.coneSize / 2;
        pos[1] += this.coneSize / 2;
        break;

      case 'offense':
        pos[0] += this.playerRadius / 2;
        pos[1] += this.playerRadius / 2;
        break;

      case 'defense':
        pos[0] += this.playerRadius / 2;
        pos[1] += this.playerRadius / 2;
        break;

      case 'disc':
        pos[0] += this.discRadius / 2;
        pos[1] += this.discRadius / 2;
        break;
    }
  }

    _display(element){
        return (element.render());
    }
    
    _displayCut = cut => {
        
    /* If there is no counter cut */
        console.log('pos 0: ' + cut.x0 + '/' + cut.y0);
        console.log('pos 1: ' + cut.x1 + '/' + cut.y1);
        console.log('pos 2: ' + cut.x2 + '/' + cut.y2);
        console.log('disc radius: ' + this.discRadius);

        return (
            <View key={cut.key+4000} style={[StyleSheet.absoluteFill]} height="100%" width="100%">
              <Svg style={[StyleSheet.absoluteFill]} height="100%" width="100%">
                <Line x1={cut.x0} y1={cut.y0} x2={cut.x2} y2={cut.y2} stroke="green" strokeWidth="2" strokeDasharray="5, 5" />
                <Line x1={cut.x1} y1={cut.y1} x2={cut.x2} y2={cut.y2} stroke="green" strokeWidth="2" strokeDasharray="5, 5" /> 
              </Svg>
              {this._display(cut.countercutCircle)}
            {this._display(cut.cutCircle)}
            </View>
        );
  };

  render() {
        console.log('render drill cut: ');
    return (
        <View key="1" style={[{ position: 'absolute', left: 0, top: 0 }]} height="100%" width="100%">
        {this.cuts.length >= this.props.currentStep &&
        this.cuts[this.props.currentStep] !== undefined &&
        this.cuts[this.props.currentStep] !== null
          ? this.cuts[this.props.currentStep].map(this._displayCut)
          : undefined}
      </View>
    );
  }
    
  log() {
    for (var stepId = 0; stepId < this.cuts.length; stepId++) {
      console.log('step ' + stepId);

      for (var cutId = 0; cutId < this.cuts[stepId].length; cutId++)
        console.log(
          '\tcut ' +
            cutId +
            '\n\t(' +
            this.cuts[stepId][cutId].x0 +
            '/' +
            this.cuts[stepId][cutId].y0 +
            ')' +
            '\n\t(' +
            this.cuts[stepId][cutId].x1 +
            '/' +
            this.cuts[stepId][cutId].y1 +
            ')' +
            '\n\t(' +
            this.cuts[stepId][cutId].x2 +
            '/' +
            this.cuts[stepId][cutId].y2 +
            ')',
        );
    }
  }
}

export default DrillCuts;
