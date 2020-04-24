import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';
import { elementsSize } from './shared/animationUtils';

/** The cuts that must be displayed at each step of a drill */
class DrillCuts extends React.Component {
  /** Props must contain:
       - drill: the drill
       - animationHeight/Width: size of the animation area
       - currentStep: the current step
    */
  constructor(props) {
    super(props);

    const { playerRadius, discRadius, coneSize } = elementsSize(props.animationWidth, props.animationHeight);
    this.playerRadius = playerRadius;
    this.discRadius = discRadius;
    this.coneSize = coneSize;

    /* 2D array: this.cuts[stepId][cutId]
     * Each cut contains:
     * - coordinate x0, y0, x1, y1, x2, y2
     * If there is no counter-cut, (x1, y1) == (x2, y2)
     */
    this.cuts = [];

    if (this.props.drill.ids.length > 0) {
      var elemCount = this.props.drill.ids.length;

      /* For each step (except the last which does not have any cut as the elements are in their final position) */
      for (var stepId = 0; stepId < this.props.drill.stepCount() - 1; stepId++) {
        console.log('stepId: ' + stepId);
        this.cuts.push([]);

        /* For each element displayed */
        for (var elemId = 0; elemId < elemCount; elemId++) {
          console.log('\telemId: ' + elemId);

          /* If the element moves at the next step */
          if (
            this.props.drill.positions[stepId + 1][elemId] !== null &&
            this.props.drill.positions[stepId + 1][elemId] !== undefined
          ) {
            var elemCut = [];

            var positionsAtStep = this.props.drill.getPositionsAtStep(elemId, stepId);

            /* The cut starting position is its position at step stepId */
            var pos = this._positionPercentToPixel(
              positionsAtStep[positionsAtStep.length - 1][0],
              positionsAtStep[positionsAtStep.length - 1][1],
            );

            this._addOffset(pos, elemId);

            elemCut.push(pos);

            var positions = this.props.drill.positions[stepId + 1][elemId];

            console.log('positions: ' + positions);

            /* For each substep in this cut */
            for (var subStepId = 0; subStepId < positions.length; subStepId++) {
              /* Add the position(s) of the cut */
              pos = this._positionPercentToPixel(positions[subStepId][0], positions[subStepId][1]);
              this._addOffset(pos, elemId);

              elemCut.push(pos);
            }

            console.log('positions2: ' + positions);

            this.cuts[stepId].push({
              key: elemId,
              x0: elemCut[0][0],
              y0: elemCut[0][1],
              x1: elemCut[1][0],
              y1: elemCut[1][1],
              x2: elemCut[elemCut.length - 1][0],
              y2: elemCut[elemCut.length - 1][1],
            });
          }
        }
      }

      /* Create an empty entry for the last step */
      this.cuts.push([]);
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

  /** Convert a position (x, y) in percentages in a position (x2, y2) in pixels
   * x: horizontal position in percentages (=0 left edge, =1 right edge)
   * y: vertical position in percentages (=0 top, =1 bottom)
   * x2: corresponding horizontal position in pixel (=0 if centered)
   * y2: corresponding vertical position in pixel (=0 if centered)
   */
  _positionPercentToPixel(x, y) {
    return [this.props.animationWidth * x, this.props.animationHeight * y];
  }

  _displayCut = cut => {
    /* If there is no counter cut */
    if (cut.x1 == cut.x2 && cut.y1 == cut.y2)
      return (
        <Svg style={[StyleSheet.absoluteFill]} height="100%" width="100%" key={cut.key}>
          <Line x1={cut.x0} y1={cut.y0} x2={cut.x1} y2={cut.y1} stroke="green" strokeWidth="2" strokeDasharray="5, 5" />
          <Circle
            cx={cut.x1}
            cy={cut.y1}
            r={this.discRadius / 2}
            fill="white"
            stroke="green"
            strokeWidth={this.discRadius / 8}
            strokeDasharray="3, 3"
          />
        </Svg>
      );
    else
      return (
        <Svg style={[StyleSheet.absoluteFill]} height="100%" width="100%">
          <Line x1={cut.x0} y1={cut.y0} x2={cut.x1} y2={cut.y1} stroke="green" strokeWidth="2" strokeDasharray="5, 5" />
          <Line x1={cut.x1} y1={cut.y1} x2={cut.x2} y2={cut.y2} stroke="green" strokeWidth="2" strokeDasharray="5, 5" />
          <Circle cx={cut.x2} cy={cut.y2} r={this.discRadius} fill="green" />
        </Svg>
      );
  };

  render() {
    return (
      <View key="1" style={[{ position: 'absolute' }]} height="100%" width="100%">
        {this.cuts.length >= this.props.currentStep && this.cuts[this.props.currentStep] != undefined
          ? this.cuts[this.props.currentStep].map(this._displayCut)
          : undefined}
      </View>
    );
  }
}

export default DrillCuts;
