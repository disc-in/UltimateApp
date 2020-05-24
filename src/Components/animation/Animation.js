import React from 'react';
import { StyleSheet, Easing, Animated, Dimensions, View, TouchableOpacity, Image } from 'react-native';

import DisplayedElement from './DisplayedElement';
import DrillCuts from './DrillCuts';
import DisplayedCuts from './DisplayedCuts';
import ProgressBar from './ProgressBar';
import Drill from './Drill';

import iconPlay from '../../../assets/play.png';
import iconPrev from '../../../assets/prev.png';
import iconNext from '../../../assets/next.png';
import iconReplay from '../../../assets/replay.png';

import debug from './debug';

class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propsWidth: props.width,
      propsHeight: props.height,
      screenHeight: 1, // Height of the animation space
      screenWidth: 1, // Width of the animation space
      stepLength: 1000, // Duration of a step in milliseconds
      animation: undefined,
      displayedElements: [], // The graphical elments displayed in the animation
      currentStep: 0, // Current step displayed on the phone
    };

    // Enables to update the current step inside an animation
    if (this.props.currentStepAV !== null && this.props.currentStepAV !== undefined)
      this.currentStepAV = this.props.currentStepAV;
    else this.currentStepAV = new Animated.Value(0);

    this.currentStepAV.addListener(progress => {
      this.setState({ currentStep: progress.value });
    });

    this.animationWidth = 100;
    this.animationHeight = 100;

    // Distance between the top of the window and the animation area
    this.dTop = this.props.dTop || 0;

    // Distance between the left of the window and the animation area
    this.dLeft = this.props.dLeft || 0;
  }

  /** Number of steps in the animation */
  _stepCount = () => {
    if (this.state.animation !== undefined && this.state.animation !== null)
      return this.state.animation.positions.length;
    else return 0;
  };

  /** Number of elements displayed in the animation */
  _elemCount = () => {
    if (this.state.animation !== undefined && this.state.animation !== null && this.state.animation.ids.length > 0)
      return this.state.animation.ids.length;
    else return 0;
  };

  /** Create the Componenets associated to the elements displayed in this animation */
  _createDisplayedElements() {
    var result = [];
    /* For each element displayed in the current animation */
    for (var elemId = 0; elemId < this._elemCount(); ++elemId) {
      //	    debug("animation createdE: element id: " + this.state.animation.ids[elemId]);

      /* Create the displayed element according to the animation */
      result.push(
        new DisplayedElement({
          id: this.state.animation.ids[elemId],
          number: this.state.animation.texts[elemId],
          key: elemId,
          eId: elemId,
          animationWidth: this.animationWidth,
          animationHeight: this.animationHeight,
          movable: this.props.editable,
          onMoveEnd: this.props.onElementMove,
          //		    left: this.state.animation.positions[0][elemId][0][0]*this.animationWidth + this.dLeft,
          //		    top: this.state.animation.positions[0][elemId][0][1]*this.animationHeight + this.dTop
        }),
      );
    }

    return result;
  }

  /** Create the cuts associated to each step of the animation */
  _initializeCuts() {
    debug('initialize cut');
    this.cuts = new DrillCuts(
      this.state.animation,
      this.animationHeight,
      this.animationWidth,
      this.state.currentStep,
      this._positionPercentToPixel,
      this.props.onCutMove,
    );
    this.cuts.log();
  }

  /** Create the progress bar */
  _createProgressBar() {
    //	debug("Create PB animation width " + this.animationWidth);
    if (
      this.animationWidth !== undefined &&
      this.animationWidth !== null &&
      this.animationHeight !== undefined &&
      this.animationHeight !== null
    )
      return new ProgressBar({
        readonly: !this.props.editable,
        animationWidth: this.animationWidth,
        animationHeight: this.animationHeight,
        stepCount: this._stepCount(),
        currentStepAV: this.currentStepAV,
        getStepAnimation: this._getStepAnimation,
        stepLength: this.state.stepLength,
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
    return [this.animationWidth * x + this.dLeft, this.animationHeight * y + this.dTop];
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
    debug('animation _setPositions(' + step + ') called');

    var intStep = Math.ceil(step);

    debug('intStep: ' + intStep);

    if (this.state.displayedElements !== undefined && this.state.displayedElements !== null) {
      /* For each element */
      for (var i = 0; i < this.state.displayedElements.length; i++) {
        debug('element: ' + i);

        var element = this.state.displayedElements[i];

        var iPositions = this.state.animation.getPositionsAtStep(i, intStep);
        /* Get its position in pixel (it is represented in percentage in the animation) */
        var pixelPosition = this._positionPercentToPixel(iPositions[0][0], iPositions[0][1]);

        //		debug("pixelPosition:" + pixelPosition);

        element.setPosition(pixelPosition[0], pixelPosition[1]);
      }
    }

    this.setState({ currentStep: intStep }, () => {
      if (this.props.onStepChange !== undefined && this.props.onStepChange !== null) this.props.onStepChange(intStep);
    });
  }

  /** Once we get the screen size, create the DisplayedElement used in the animation and set them to their initial position */
  componentDidMount() {
    var { height, width } = Dimensions.get('window');

    this.animationWidth = width * this.props.widthRatio;
    this.animationHeight = height * this.props.heightRatio;
    var inputDrill = new Drill(this.props.animation);
    var initialStep = 0;

    // If the current step is fixed by the parent (used in the editor)
    if (this.props.currentStep !== undefined && this.props.currentStep !== null) initialStep = this.props.currentStep;

    this.setState(
      {
        animation: inputDrill,
        screenHeight: height,
        screenWidth: width,
        currentStep: initialStep,
      },
      () => {
        this.setState(
          {
            displayedElements: this._createDisplayedElements(),
          },
          () => {
            /* Set all the elements to their initial positions */
            this._initPositions();

            this.progressBar = this._createProgressBar();
            if (this.props.editable) this._initializeCuts();

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

  /** Play the whole animation */
  _restart() {
    this._initPositions();

    /* Animation of the whole animation */
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
    debug('Animation: get animation: ' + stepId);

    stepId = Math.max(0, Math.round(stepId));

    /* Animation of all the elements at step stepId */
    var stepAnimation = [];

    /* The first animation in the sequence enables to update the current step */
    stepAnimation.push(
      Animated.timing(this.currentStepAV, {
        toValue: stepId,
        duration: this.state.stepLength,
        easing: Easing.linear,
        key: 0,
      }),
    );

    /** Change the opacity of the step dots */
    if (this.progressBar !== undefined && this.progressBar !== null)
      stepAnimation = stepAnimation.concat(this.progressBar.getOpacityAnimation(stepId));

    /* For each displayed element */
    for (let elemId = 0; elemId < this.state.animation.ids.length; elemId += 1) {
      /* Get the position of the element at step stepId */
      debug('elemId is ', elemId);
      debug('stepId is ', stepId);
      const nextPosition = this.state.animation.getPositionsAtStep(elemId, stepId, this.state.currentStep); //this.state.animation.positions[elemId][stepId];

      /* The substeps are played only if the element moves at step stepId.
	       Otherwise, we just move the element to its previous position without playing the substeps of this position */
      let playSubSteps = true;
      if (nextPosition === undefined || nextPosition === null || !isForward) playSubSteps = false;

      /* If this element must change its position */
      if (nextPosition !== undefined && nextPosition !== null) {
        /* Animation of the element at step stepId */
        var displayedElementStepAnimation = [];

        var substepCount = nextPosition.length;

        /* If the sub steps must be played */
        if (playSubSteps) {
          /* For each substep of element de in step stepId */
          for (var substep = 0; substep < substepCount; substep++) {
            var currentDisplayedElement = this.state.displayedElements[elemId];

            /* Get the position of the element at this substep */
            var pixelPosition = this._positionPercentToPixel(nextPosition[substep][0], nextPosition[substep][1]);

            /* Get the corresponding animation */
            var anim = currentDisplayedElement.getAnimation(
              pixelPosition[0],
              pixelPosition[1],
              this.state.stepLength / substepCount,
            );

            displayedElementStepAnimation.push(anim);
          }
        } else {
          /* If the sub steps must not be played, just move the element to its last position */
          currentDisplayedElement = this.state.displayedElements[elemId];

          /* Get the position of the element at this substep */
          pixelPosition = this._positionPercentToPixel(
            nextPosition[substepCount - 1][0],
            nextPosition[substepCount - 1][1],
          );

          /* Get the corresponding animation */
          anim = currentDisplayedElement.getAnimation(pixelPosition[0], pixelPosition[1], this.state.stepLength);

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
    this.cutsArray = [];

    return (
      <View style={[styles.mainContainer, { height: this.animationHeight }, { width: this.animationWidth }]}>
        {this.props.editable && this.cuts !== undefined && this.cuts !== null ? (
          <DisplayedCuts step={this.state.currentStep} drillCuts={this.cuts} />
        ) : (
          undefined
        )}
        {this.state.displayedElements === undefined || this.state.displayedElements === null ? (
          <View />
        ) : (
          this.state.displayedElements.map(this._display)
        )}
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
        {this._display(this.progressBar)}
      </View>
    );
  }

  /** Used to update the animation when a modification is made through the editor */
  componentDidUpdate() {
    if (
      (this.state.displayedElements === undefined || this.state.displayedElements === null) &&
      this.state.animation !== undefined &&
      this.state.animation !== null
    ) {
      this.currentStepAV.addListener(progress => {
        this.setState({ currentStep: progress.value });
      });
      this.setState(
        {
          displayedElements: this._createDisplayedElements(),
        },
        () => {
          /* Set all the elements to their initial positions */
          this._setCurrentPositions();

          if (this.props.editable) this._initializeCuts();
          this.progressBar = this._createProgressBar();
        },
      );
    }
  }

  /** Used to update the animation when a modification is made through the editor */
  static getDerivedStateFromProps(props, state) {
    // Test if the animation has changed
    var isEqual = true;

    if (props.width !== state.propsWidth || props.height !== state.propsHeight) isEqual = false;

    if (isEqual && props.animation !== undefined && state.animation !== undefined) {
      var stepId = 0;
      var elemId = 0;
      var cutId = 0;

      // Get all the positions in props and stats
      var pPositions = props.animation.positions;
      var sPositions = state.animation.positions;

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
        animation: props.animation,
        displayedElements: undefined,
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
    marginLeft: 30,
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
