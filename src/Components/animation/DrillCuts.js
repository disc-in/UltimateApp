import React from 'react';

import Animated from 'react-native-reanimated';

import MovingCircle from './MovingCircle';

import debug from './debug';

/** The cuts that must be displayed at each step of a animation (a cut correspond to the position of a player at the previous step) */
class DrillCuts {
  /** Arguments:
	- animation: the animation
	- animationHeight/Width: size of the animation area
  - positionPercentToPixel: function which returns the absolute position (x, y) in pixel on the screen associated to a position in percentages (xp, yp) on the animation
  - onMoveEnd: what to do when the move is over
    */
  constructor(animation, animationHeight, animationWidth, positionPercentToPixel, onMoveEnd) {
    // TODO: put the constant coefficient used in the following somewhere to avoir writing them twice (in this class and in DisplayedElement)
    var dimensionMin = Math.min(animationWidth, animationHeight);
    this.playerRadius = dimensionMin / 12;
    this.discRadius = this.playerRadius / 2;
    this.coneSize = (this.playerRadius * 5) / 16;

    /* 2D array: this.cuts[stepId][cutId]
     * Each cut contains:
     * - coordinate x0, y0, x1, y1, x2, y2
     * If there is no counter-cut, (x1, y1) == (x2, y2)
     */
    this.cuts = [];

    if (animation.ids.length > 0) {
      var elemCount = animation.ids.length;

      /* For each step */
      for (var stepId = 0; stepId < animation.stepCount(); stepId++) {
        //        debug('stepId: ' + stepId);
        this.cuts.push([]);

        /* Nothing to do at step 0 as there is no previous position */
        if (stepId > 0) {
          /* For each element displayed */
          for (var elemId = 0; elemId < elemCount; elemId++) {
            debug('animation cut, elem id: ' + elemId);
            /* If the element moves at this step */
            if (animation.positions[stepId][elemId] !== null && animation.positions[stepId][elemId] !== undefined) {
              var elemCut = [];

              /* The cut starting position is its position at step stepId */
              var pos = positionPercentToPixel(
                animation.positions[stepId][elemId][0][0],
                animation.positions[stepId][elemId][0][1],
              );

              this._addOffset(animation, pos, elemId);
              elemCut.push(pos);

              var positions = animation.getPositionsAtStep(elemId, stepId - 1);
              //            debug('positions: ' + positions);

              /* For each substep in this cut */
              for (var subStepId = 0; subStepId < positions.length; subStepId++) {
                /* Add the position(s) of the cut */
                pos = positionPercentToPixel(positions[subStepId][0], positions[subStepId][1]);
                this._addOffset(animation, pos, elemId);

                elemCut.push(pos);
              }

              var counterCutX = (elemCut[0][0] + elemCut[1][0]) / 2;
              var counterCutY = (elemCut[0][1] + elemCut[1][1]) / 2;

              if (elemCut.length > 2) {
                counterCutX = elemCut[2][0];
                counterCutY = elemCut[2][1];
              }

              var x0 = elemCut[0][0];
              var y0 = elemCut[0][1];
              var x1 = elemCut[1][0];
              var y1 = elemCut[1][1];
              var x2 = counterCutX;
              var y2 = counterCutY;

              var d1 = Math.sqrt(Math.pow(x0 - x2, 2) + Math.pow(y0 - y2, 2));
              var d2 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

              var angle1 = new Animated.Value(Math.asin(Math.abs(y0 - y2) / d1)); // + 'rad';
              var angle2 = new Animated.Value(Math.asin(Math.abs(y2 - y1) / d2)); //.toString() + 'rad';

              if (y2 > y0) {
                if (x2 < x0) angle1 = new Animated.Value(3.14159 - angle1._value);
              } else if (x2 > x0) angle1 = new Animated.Value(3.14159 - angle1._value);

              if (y1 > y2) {
                if (x1 < x2) angle2 = new Animated.Value(3.14159 - angle2._value);
              } else if (x1 > x2) angle2 = new Animated.Value(3.14159 - angle2._value);

              var left1 = (x0 + x2 - d1) / 2;
              var top1 = (y0 + y2) / 2;
              var left2 = (x1 + x2 - d2) / 2;
              var top2 = (y1 + y2) / 2;

              debug('p0: ' + x0 + '/' + y0);
              debug('p1: ' + x1 + '/' + y1);
              debug('p2: ' + x2 + '/' + y2);
              debug('angle1: ' + angle1);

              debug('recompute cut');

              this.cuts[stepId].push({
                key: elemId,
                x0,
                y0,
                x1,
                y1,
                x2,
                y2,

                d1,
                d2,

                angle1,
                angle2,

                left1,
                top1,
                left2,
                top2,

                cutCircle: new MovingCircle({
                  onMoveEnd,
                  elemId,
                  animationHeight,
                  animationWidth,
                  cx: elemCut[1][0],
                  cy: elemCut[1][1],
                  radius: this.discRadius / 2,
                  isCounterCut: false,
                }),
                countercutCircle: new MovingCircle({
                  onMoveEnd,
                  elemId,
                  animationHeight,
                  animationWidth,
                  cx: counterCutX,
                  cy: counterCutY,
                  radius: this.discRadius / 2,
                  isCounterCut: true,
                }),
              });
            }
          }
        }
      }
    }
  }

  /** Add an offset to the position so that the cut is placed at the center of the element (otherwise it would be at its top left) */
  _addOffset(animation, pos, elemId) {
    switch (animation.ids[elemId]) {
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

  log() {
    for (var stepId = 0; stepId < this.cuts.length; stepId++) {
      debug('step ' + stepId);

      for (var cutId = 0; cutId < this.cuts[stepId].length; cutId++)
        debug(
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
