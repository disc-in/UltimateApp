import React from 'react';
import { View } from 'react-native';

/**
 * Background of an animation.
 * The possible backgrounds are:
 * - "zone": used for end-zone plays. Display a zone and part of the central area (1/3 zone, 2/3 field)
 * - "3/4 field": used for non end-zone plays. Display a zone and part of the central area (1/4 zone, 3/4 field)
 *
 * The background type is specified as a String in the props type.
 *
 * If this.props.type does not match any of the above types, the background will be empty.
 *
 */
class AnimationBackground extends React.Component {
  /**
   * @param {} props The props must contain:
   * - animationWidth, animationHeight: the dimension of the animation area
   * - type: the background type
   */
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.background,
    };

    var topMargin = props.animationHeight * 0.05;
    var bottomMargin = props.animationHeight * 0.1;
    var leftRightMargin = props.animationWidth * 0.05;
    var fieldHeight = props.animationHeight - topMargin - bottomMargin;
    var fieldWidth = props.animationWidth - 2 * leftRightMargin;
    var linesWidth = Math.min(fieldHeight, fieldWidth) * 0.005;
    var brickRadius = linesWidth * 5;
    var zoneLineTop = topMargin + fieldHeight * 0.33;
    var threeQuarterLineTop = topMargin + fieldHeight * 0.24;

    this.state = {
      type: this.props.type,
      animationWidth: this.props.animationWidth,
      animationHeight: this.props.animationHeight,
      leftRightMargin,
      topMargin,
      bottomMargin,
      fieldHeight,
      fieldWidth,
      linesWidth,
      zoneLineTop,
      threeQuarterLineTop,
      brickRadius,
      brickLeft: leftRightMargin + fieldWidth / 2 - brickRadius,
      brickZoneTop: zoneLineTop + fieldHeight * 0.33 - 2 * brickRadius,
      brick34Top: threeQuarterLineTop + fieldHeight * 0.24 - 2 * brickRadius,
    };
  }

  /** Used to update the background when a modification is made through the editor */
  static getDerivedStateFromProps(props, state) {
    if (
      props.animationWidth !== state.animationWidth ||
      props.animationHeight !== state.animationHeight ||
      props.background !== state.type
    ) {
      var topMargin = props.animationHeight * 0.05;
      var bottomMargin = props.animationHeight * 0.1;
      var leftRightMargin = props.animationWidth * 0.05;
      var fieldHeight = props.animationHeight - topMargin - bottomMargin;
      var fieldWidth = props.animationWidth - 2 * leftRightMargin;
      var linesWidth = Math.min(fieldHeight, fieldWidth) * 0.005;
      var brickRadius = linesWidth * 5;
      var zoneLineTop = topMargin + fieldHeight * 0.33;
      var threeQuarterLineTop = topMargin + fieldHeight * 0.24;

      return {
        type: props.background,
        animationWidth: props.animationWidth,
        animationHeight: props.animationHeight,
        leftRightMargin,
        topMargin,
        bottomMargin,
        fieldHeight,
        fieldWidth,
        linesWidth,
        zoneLineTop,
        brickRadius,
        threeQuarterLineTop,
        brickLeft: leftRightMargin + fieldWidth / 2 - brickRadius,
        brickTop: zoneLineTop * 2 - brickRadius,
        brickZoneTop: zoneLineTop + fieldHeight * 0.33 - 2 * brickRadius,
        brick34Top: threeQuarterLineTop + fieldHeight * 0.24 - 2 * brickRadius,
      };
    } else if (props.type !== state.type) {
      return {
        type: props.type,
      };
    }
    return null;
  }

  render() {
    console.log('ab: zoneLineTop: ' + this.state.zoneLineTop);
    console.log('ab: brickZoneTop: ' + this.state.brickZoneTop);
    switch (this.state.type) {
      case 'zone':
        return (
          <View
            style={[
              { position: 'absolute' },
              { top: 0 },
              { bottom: 0 },
              { height: this.state.animationHeight },
              { width: this.state.animationWidth },
            ]}
          >
            {/* Right vertical bar */}
            <View
              style={[
                { height: this.state.fieldHeight },
                { width: this.state.linesWidth },
                { borderRadius: 1 },
                { borderWidth: 1 },
                { backgroundColor: 'black' },
                { position: 'absolute' },
                { top: this.state.topMargin },
                { left: this.state.leftRightMargin + this.state.fieldWidth },
              ]}
            />

            {/* Left vertical bar */}
            <View
              style={[
                { height: this.state.fieldHeight },
                { width: this.state.linesWidth },
                { borderRadius: 1 },
                { borderWidth: 1 },
                { backgroundColor: 'gray' },
                { position: 'absolute' },
                { top: this.state.topMargin },
                { left: this.state.leftRightMargin },
              ]}
            />

            {/* Top horizontal bar */}
            <View
              style={[
                { height: this.state.linesWidth },
                { width: this.state.fieldWidth },
                { borderRadius: 1 },
                { borderWidth: 1 },
                { backgroundColor: 'gray' },
                { position: 'absolute' },
                { top: this.state.topMargin },
                { left: this.state.leftRightMargin },
              ]}
            />

            {/* Zone horizontal bar */}
            <View
              style={[
                { height: this.state.linesWidth },
                { width: this.state.fieldWidth },
                { borderRadius: 1 },
                { borderWidth: 1 },
                { backgroundColor: 'gray' },
                { position: 'absolute' },
                { top: this.state.zoneLineTop },
                { left: this.state.leftRightMargin },
              ]}
            />

            {/* Brick */}
            <View
              style={[
                { position: 'absolute' },
                { left: this.state.brickLeft },
                { top: this.state.brickZoneTop },
                { borderRadius: this.state.brickRadius },
                { borderWidth: 1 },
                { borderColor: 'gray' },
                { backgroundColor: 'white' },
              ]}
              height={2 * this.state.brickRadius}
              width={2 * this.state.brickRadius}
            />
          </View>
        );
      case '3/4 field':
        return (
          <View
            style={[
              { position: 'absolute' },
              { top: 0 },
              { bottom: 0 },
              { height: this.state.animationHeight },
              { width: this.state.animationWidth },
            ]}
          >
            {/* Right vertical bar */}
            <View
              style={[
                { height: this.state.fieldHeight },
                { width: this.state.linesWidth },
                { borderRadius: 1 },
                { borderWidth: 1 },
                { backgroundColor: 'black' },
                { position: 'absolute' },
                { top: this.state.topMargin },
                { left: this.state.leftRightMargin + this.state.fieldWidth },
              ]}
            />

            {/* Left vertical bar */}
            <View
              style={[
                { height: this.state.fieldHeight },
                { width: this.state.linesWidth },
                { borderRadius: 1 },
                { borderWidth: 1 },
                { backgroundColor: 'gray' },
                { position: 'absolute' },
                { top: this.state.topMargin },
                { left: this.state.leftRightMargin },
              ]}
            />

            {/* Top horizontal bar */}
            <View
              style={[
                { height: this.state.linesWidth },
                { width: this.state.fieldWidth },
                { borderRadius: 1 },
                { borderWidth: 1 },
                { backgroundColor: 'gray' },
                { position: 'absolute' },
                { top: this.state.topMargin },
                { left: this.state.leftRightMargin },
              ]}
            />

            {/* Zone horizontal bar */}
            <View
              style={[
                { height: this.state.linesWidth },
                { width: this.state.fieldWidth },
                { borderRadius: 1 },
                { borderWidth: 1 },
                { backgroundColor: 'gray' },
                { position: 'absolute' },
                { top: this.state.threeQuarterLineTop },
                { left: this.state.leftRightMargin },
              ]}
            />

            {/* Brick */}
            <View
              style={[
                { position: 'absolute' },
                { left: this.state.brickLeft },
                { top: this.state.brick34Top },
                { borderRadius: this.state.brickRadius },
                { borderWidth: 1 },
                { borderColor: 'gray' },
                { backgroundColor: 'white' },
              ]}
              height={2 * this.state.brickRadius}
              width={2 * this.state.brickRadius}
            />
          </View>
        );
      default:
        return null;
    }
  }
}

export default AnimationBackground;
