import React from 'react';
import { StyleSheet, Easing, Animated, View, TouchableOpacity, Image } from 'react-native';

import DisplayedElement from './animation/DisplayedElement';
import DrillCuts from './animation/DrillCuts';
import ProgressBar from './animation/ProgressBar';
import Drill from './animation/Drill';

import iconPlay from '../../assets/play.png';
import iconPrev from '../../assets/prev.png';
import iconNext from '../../assets/next.png';
import iconReplay from '../../assets/replay.png';

class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drill: undefined,
      de: [], // The graphical elments displayed in the drill
      currentStep: 0, // Current step displayed on the phone
      animationWidth: this.props.width,
      animationHeight: this.props.height,
    };

    this.stepLength = 1000; // Duration of a step in milliseconds

    // Enables to update the current step inside an animation
    if (this.props.currentStepAV !== null && this.props.currentStepAV !== undefined)
      this.currentStepAV = this.props.currentStepAV;
    else this.currentStepAV = new Animated.Value(0);

    this.currentStepAV.addListener(progress => {
      this.setState({ currentStep: progress.value });
    });

    // Distance between the top of the window and the animation area
    this.dTop = 0;

    if (this.props.dTop !== undefined) this.dTop = this.props.dTop;

    // Distance between the left of the window and the animation area
    this.dLeft = 0;

    if (this.props.dLeft !== undefined) this.dLeft = this.props.dLeft;
  }

  /** Number of steps in the drill */
  _stepCount = () => {
    if (this.state.drill !== undefined && this.state.drill !== null) return this.state.drill.positions.length;
    else return 0;
  };

  /** Number of elements displayed in the drill */
  _elemCount = () => {
    if (this.state.drill !== undefined && this.state.drill !== null && this.state.drill.ids.length > 0)
      return this.state.drill.ids.length;
    else return 0;
  };

  /** Create the Componenets associated to the elements displayed in this drill */
  _createDE() {
    //	console.log("animation CreateDE: " + this._elemCount() + " elements");
    var tempDe = [];

    /* For each element displayed in the current drill */
    for (var elemId = 0; elemId < this._elemCount(); ++elemId) {
      //	    console.log("animation createdE: element id: " + this.state.drill.ids[elemId]);

      /* Create the displayed element according to the drill */
      tempDe.push(
        new DisplayedElement({
          id: this.state.drill.ids[elemId],
          number: this.state.drill.texts[elemId],
          key: elemId,
          eId: elemId,
          animationWidth: this.props.animationWidth,
          animationHeight: this.props.animationHeight,
          movable: this.props.editable,
          onMoveEnd: this.props.onElementMove,
          //		    left: this.state.drill.positions[0][elemId][0][0]*this.state.animationWidth + this.dLeft,
          //		    top: this.state.drill.positions[0][elemId][0][1]*this.state.animationHeight + this.dTop
        }),
      );
    }

    return tempDe;
  }

  /** Create the cuts associated to each step of the drill */
  _initializeCuts() {
    console.log('initialize cut');
    this.cuts = new DrillCuts({
      drill: this.state.drill,
      animationHeight: this.state.animationHeight,
      animationWidth: this.state.animationWidth,
      currentStep: this.state.currentStep,
      positionPercentToPixel: this._positionPercentToPixel,
      onMoveEnd: this.props.onCutMove,
    });
    this.cuts.log();
  }

  /** Create the progress bar */
  _createPB() {
    //	console.log("Create PB animation width " + this.state.animationWidth);

    if (
      this.state.animationWidth !== undefined &&
      this.state.animationWidth !== null &&
      this.state.animationHeight !== undefined &&
      this.state.animationHeight !== null
    )
      return new ProgressBar({
        readonly: this.props.readonly,
        animationWidth: this.state.animationWidth,
        animationHeight: this.state.animationHeight,
        stepCount: this._stepCount(),
        currentStepAV: this.currentStepAV,
        getStepAnimation: this._getStepAnimation,
        stepLength: this.stepLength,
        onStepChange: this.props.onStepChange,
        onStepAdded: this.props.onStepAdded,
        editable: this.props.editable,
        key: 1,
      });
    else return undefined;
  }

  /** Convert a position (x, y) in percentages of the animation area in a position (x2, y2) in pixels of the phone screen
   * x: horizontal position in percentages (=0 left edge, =1 right edge)
   * y: vertical position in percentages (=0 top, =1 bottom)
   * x2: corresponding horizontal position in pixel (=0 if centered)
   * y2: corresponding vertical position in pixel (=0 if centered)
   */
  _positionPercentToPixel = (x, y) => {
    //	console.log("Animation : positionPercentToPixel, width/height: " + this.state.animationWidth + "/" + this.state.animationHeight);
    //	console.log("Animation : positionPercentToPixel, x/y: " + x + "/" + y);

    return [this.state.animationWidth * x + this.dLeft, this.state.animationHeight * y + this.dTop];
  };

  /** Set each displayed element at its original position */
  _initPositions() {
    this._setPositions(0);
  }

  _setCurrentPositions() {
    this._setPositions(this.state.currentStep);
  }

  /** Set each displayed element at its position at a given step */
  _setPositions(step) {
    console.log('animation _setPositions(' + step + ') called');

    var intStep = Math.ceil(step);

    console.log('intStep: ' + intStep);

    if (this.state.de !== undefined && this.state.de !== null) {
      /* For each element */
      for (var i = 0; i < this.state.de.length; i++) {
        console.log('element: ' + i);

        var element = this.state.de[i];

        var iPositions = this.state.drill.getPositionsAtStep(i, intStep);
        /* Get its position in pixel (it is represented in percentage in the drill) */
        var pixelPosition = this._positionPercentToPixel(iPositions[0][0], iPositions[0][1]);

        //		console.log("pixelPosition:" + pixelPosition);

        element.setPosition(pixelPosition[0], pixelPosition[1]);
      }
    }

    this.setState({ currentStep: intStep }, () => {
      if (this.props.onStepChange !== undefined && this.props.onStepChange !== null) this.props.onStepChange(intStep);
    });
  }

  /** Once we get the screen size, create the DisplayedElement used in the drill and set them to their initial position */
  componentDidMount() {
    var inputDrill = new Drill();
    var initialStep = 0;

    // If the current step is fixed by the parent (used in the editor)
    if (this.props.currentStep !== undefined && this.props.currentStep !== null) initialStep = this.props.currentStep;

    this.setState(
      {
        drill: inputDrill,
        currentStep: initialStep,
      },
      () => {
        this.setState(
          {
            de: this._createDE(),
          },
          () => {
            /* Set all the elements to their initial positions */
            this._initPositions();

            this.pb = this._createPB();
            this._initializeCuts();

            if (this.props.onStepChange !== undefined && this.props.onStepChange !== null)
              this.props.onStepChange(initialStep);
          },
        );
      },
    );
  }

  _goToInit() {
    this._initPositions();
    Animated.timing(this.currentStepAV, {
      toValue: 0,
      duration: 0,
      easing: Easing.linear,
    }).start();
  }

  /** Play the whole drill */
  _restart() {
    this._initPositions();

    /* Animation of the whole drill */
    var completeSequence = [];

    completeSequence.push(
      Animated.timing(this.currentStepAV, {
        toValue: 0,
        duration: 0,
        easing: Easing.linear,
      }),
    );

    /* For each step (start at step 1 as step 0 corresponds to the initial positions)*/
    for (var stepId = 1; stepId < this._stepCount(); stepId++)
      completeSequence.push(Animated.parallel(this._getStepAnimation(stepId, true)));

    Animated.sequence(completeSequence).start();

    if (this.props.onStepChange !== undefined && this.props.onStepChange !== null)
      this.props.onStepChange(this._stepCount());
  }

  /** Get back to the previous step */
  _previousStep() {
    if (this.state.currentStep !== 0) {
      this.setState(
        prevState => ({ currentStep: prevState.currentStep - 1 }),
        () => {
          var stepArray = this._getStepAnimation(this.state.currentStep, false);
          Animated.parallel(stepArray).start();

          if (this.props.onStepChange !== undefined && this.props.onStepChange !== null)
            this.props.onStepChange(this.state.currentStep);
        },
      );
    }
  }

  /** Go to the next step */
  _nextStep() {
    if (this.state.currentStep !== this._stepCount() - 1) {
      this.setState(
        prevState => ({ currentStep: prevState.currentStep + 1 }),
        () => {
          Animated.parallel(this._getStepAnimation(this.state.currentStep, true)).start();

          if (this.props.onStepChange !== undefined && this.props.onStepChange !== null)
            this.props.onStepChange(this.state.currentStep);
        },
      );
    }
  }

  /** Returns the animation to a given step for all displayed elements
	The substeps are played if the animation is forward and if the elements moves at step stepId
    */
  _getStepAnimation = (stepId, isForward) => {
    console.log('Animation: get animation: ' + stepId);

    stepId = Math.max(0, Math.round(stepId));

    /* Animation of all the elements at step stepId */
    var stepAnimation = [];

    /* The first animation in the sequence enables to update the current step */
    stepAnimation.push(
      Animated.timing(this.currentStepAV, {
        toValue: stepId,
        duration: this.stepLength,
        easing: Easing.linear,
        key: 0,
      }),
    );

    /** Change the opacity of the step dots */
    if (this.pb !== undefined && this.pb !== null)
      stepAnimation = stepAnimation.concat(this.pb.getOpacityAnimation(stepId));

    /* For each displayed element */
    for (let elemId = 0; elemId < this.state.drill.ids.length; elemId += 1) {
      /* Get the position of the element at step stepId */
      console.log('elemId is ', elemId);
      console.log('stepId is ', stepId);
      const nextPosition = this.state.drill.getPositionsAtStep(elemId, stepId, this.state.currentStep); //this.state.drill.positions[elemId][stepId];

      /* The substeps are played only if the element moves at step stepId.
	       Otherwise, we just move the element to its previous position without playing the substeps of this position */
      let playSubSteps = true;
      if (nextPosition === undefined || nextPosition === null || !isForward) playSubSteps = false;

      /* If this element must change its position */
      if (nextPosition !== undefined && nextPosition !== null) {
        /* Animation of the element at step stepId */
        var deStepAnimation = [];

        var substepCount = nextPosition.length;

        /* If the sub steps must be played */
        if (playSubSteps) {
          /* For each substep of element de in step stepId */
          for (var substep = 0; substep < substepCount; substep++) {
            var currentDE = this.state.de[elemId];

            /* Get the position of the element at this substep */
            var pixelPosition = this._positionPercentToPixel(nextPosition[substep][0], nextPosition[substep][1]);

            /* Get the corresponding animation */
            var anim = currentDE.getAnimation(pixelPosition[0], pixelPosition[1], this.stepLength / substepCount);

            deStepAnimation.push(anim);
          }
        } else {
          /* If the sub steps must not be played, just move the element to its last position */
          currentDE = this.state.de[elemId];

          /* Get the position of the element at this substep */
          pixelPosition = this._positionPercentToPixel(
            nextPosition[substepCount - 1][0],
            nextPosition[substepCount - 1][1],
          );

          /* Get the corresponding animation */
          anim = currentDE.getAnimation(pixelPosition[0], pixelPosition[1], this.stepLength);

          displayedElementStepAnimation.push(anim);
        }

        stepAnimation.push(Animated.sequence(displayedElementStepAnimation));
      }
    }

    return stepAnimation;
  };

  _display(item) {
    if (item !== undefined && item !== null) return item.render();
    else return <View />;
  }

  render() {
    // console.log("render a");

    //	if(this.state.drill.positions.length > 0 && this.state.drill.positions[0] != undefined)
    //	console.log("render a2, elem count: " + this.state.drill.positions[0].length);

    //	if(this.state.drill.positions.length > 0)
    //	    console.log("\telem count: " + this.state.drill.positions[0].length);
    //        console.log("render h/w: " + this.state.animationHeight + "/" + this.state.animationWidth);
    this.cutsArray = [];
    //  if(this.state.drill !== undefined && this.state.drill !== null){
    //    console.log("drill a1: ");
    //   this.state.drill.log()
    //}
    //else
    //    console.log("drill a2: " + this.state.drill);

    //  if(this.cuts !== undefined && this.cuts !== null){
    //    console.log("cuts a1: ");
    //    this.cuts.log();
    //  }
    //  else
    //    console.log("cuts a2: " + this.cuts);

    if (this.cuts !== undefined && this.cuts !== null) {
      this.cuts.props.currentStep = Math.floor(this.state.currentStep);
      this.cutsArray.push(this.cuts);
    }

    return (
      <View
        style={[styles.mainContainer, { height: this.state.animationHeight }, { width: this.state.animationWidth }]}
      >
        {!this.props.readonly && this._display(this.cuts)}
        {this.state.de === undefined || this.state.de === null ? <View /> : this.state.de.map(this._display)}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlBtn} onPress={() => this._previousStep()}>
            <Image style={styles.controlIcn} source={iconPrev} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlBtn} onPress={() => this._restart()}>
            <Image style={styles.controlIcn} source={iconPlay} />
          </TouchableOpacity>
          {this.state.currentStep === this._stepCount() - 1 ? (
            <TouchableOpacity style={styles.controlBtn} onPress={() => this._goToInit()}>
              <Image style={styles.controlIcn} source={iconReplay} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.controlBtn} onPress={() => this._nextStep()}>
              <Image style={styles.controlIcn} source={iconNext} />
            </TouchableOpacity>
          )}
        </View>
        {this._display(this.pb)}
      </View>
    );
  }

  /** Used to update the animation when a modification is made through the editor */
  componentDidUpdate() {
    if (
      (this.state.de === undefined || this.state.de === null) &&
      this.state.drill !== undefined &&
      this.state.drill !== null
    ) {
      this.currentStepAV.addListener(progress => {
        this.setState({ currentStep: progress.value });
      });
      this.setState(
        {
          de: this._createDE(),
        },
        () => {
          /* Set all the elements to their initial positions */
          this._setCurrentPositions();

          this._initializeCuts();
          this.pb = this._createPB();
        },
      );
    }
  }

  /** Used to update the animation when a modification is made through the editor */
  static getDerivedStateFromProps(props, state) {
    // Test if the drill has changed
    var isEqual = true;

    if (props.width !== state.animationWidth || props.height !== state.animationHeight) isEqual = false;

    if (isEqual && props.drill !== undefined && state.drill !== undefined) {
      var stepId = 0;
      var elemId = 0;
      var cutId = 0;

      // Get all the positions in props and stats
      var pPositions = props.drill.positions;
      var sPositions = state.drill.positions;

      // If there is not the same number of steps
      if (pPositions.length !== sPositions.length) isEqual = false;

      // While no difference has been found and all the positions have not been tested
      while (stepId < pPositions.length && isEqual) {
        if (pPositions.length !== sPositions.length) isEqual = false;

        if (isEqual && pPositions[stepId].length !== sPositions[stepId].length) isEqual = false;

        if (isEqual && pPositions[stepId].length > elemId) {
          var pUndefined = pPositions[stepId][elemId] === undefined || pPositions[stepId][elemId] === null;
          var sUndefined = sPositions[stepId][elemId] === undefined || sPositions[stepId][elemId] === null;

          var pSize = -1;
          var sSize = -1;

          if (!pUndefined) pSize = pPositions[stepId][elemId].length;

          if (!sUndefined) sSize = sPositions[stepId][elemId].length;

          // If the position is different
          if (
            pSize !== sSize ||
            (pSize > 0 &&
              (pPositions[stepId][elemId][cutId][0] !== sPositions[stepId][elemId][cutId][0] ||
                pPositions[stepId][elemId][cutId][1] !== sPositions[stepId][elemId][cutId][1]))
          )
            isEqual = false;
        }

        // Go to the next position
        if (pPositions[stepId][elemId] === undefined || pPositions[stepId][elemId] === null) {
          if (pPositions[stepId].length > elemId + 1) elemId++;
          else {
            stepId++;
            elemId = 0;
            cutId = 0;
          }
        } else if (pPositions[stepId][elemId].length > cutId + 1) cutId++;
        else if (pPositions[stepId].length > elemId + 1) {
          elemId++;
          cutId = 0;
        } else {
          stepId++;
          elemId = 0;
          cutId = 0;
        }
      }
    }

    if (isEqual) return null;
    else {
      return {
        drill: props.drill,
        de: undefined,
        animationWidth: props.width,
        animationHeight: props.height,
      };
    }
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
  },
  controlBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlIcn: {
    width: 20,
    height: 20,
  },
});

export default Animation;
