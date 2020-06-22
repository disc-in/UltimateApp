import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Background of an animation.
 * The possible backgrounds are:
 * - "zone": used for end-zone plays. Display a zone and part of the central area (1/3 zone, 2/3 field)
 * - "3/4 field": used for non end-zone plays. Display a zone and part of the central area (1/4 zone, 3/4 field)
 * - "rectangle": rectangle around the animation zone
 *
 * If props.background does not match any of the above types, the background will be empty.
 *
 * The props must contain:
 * - animationWidth, animationHeight: the dimension of the animation area
 * - background: the background type
 *
 */
const AnimationBackground = props => {
  const topMargin = props.animationHeight * 0.05;
  const bottomMargin = props.animationHeight * 0.1;
  const leftRightMargin = props.animationWidth * 0.05;
  const fieldHeight = props.animationHeight - topMargin - bottomMargin;
  const fieldWidth = props.animationWidth - 2 * leftRightMargin;
  const linesWidth = Math.min(fieldHeight, fieldWidth) * 0.005;
  const brickRadius = linesWidth * 5;
  const zoneLineTop = topMargin + fieldHeight * 0.4;
  const threeQuarterLineTop = topMargin + fieldHeight * 0.24;
  const brickLeft = leftRightMargin + fieldWidth / 2 - brickRadius;
  const brickZoneTop = zoneLineTop + fieldHeight * 0.33 - 2 * brickRadius;
  const brick34Top = threeQuarterLineTop + fieldHeight * 0.24 - 2 * brickRadius;

  switch (props.background) {
    case 'zone':
      return (
        <View
          style={[
            styles.background,
            {
              height: props.animationHeight,
              width: props.animationWidth,
            },
          ]}
        >
          {/* Right vertical bar */}
          <View
            style={[
              { height: fieldHeight },
              { width: linesWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'black' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin + fieldWidth },
            ]}
          />

          {/* Left vertical bar */}
          <View
            style={[
              { height: fieldHeight },
              { width: linesWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin },
            ]}
          />

          {/* Top horizontal bar */}
          <View
            style={[
              { height: linesWidth },
              { width: fieldWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin },
            ]}
          />

          {/* Zone horizontal bar */}
          <View
            style={[
              { height: linesWidth },
              { width: fieldWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: zoneLineTop },
              { left: leftRightMargin },
            ]}
          />

          {/* Brick */}
          <View
            style={[
              { position: 'absolute' },
              { left: brickLeft },
              { top: brickZoneTop },
              { borderRadius: brickRadius },
              { borderWidth: 1 },
              { borderColor: 'gray' },
              { backgroundColor: 'white' },
            ]}
            height={2 * brickRadius}
            width={2 * brickRadius}
          />
        </View>
      );
    case '3/4 field':
      return (
        <View
          style={[
            styles.background,
            {
              height: props.animationHeight,
              width: props.animationWidth,
            },
          ]}
        >
          {/* Right vertical bar */}
          <View
            style={[
              { height: fieldHeight },
              { width: linesWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'black' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin + fieldWidth },
            ]}
          />

          {/* Left vertical bar */}
          <View
            style={[
              { height: fieldHeight },
              { width: linesWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin },
            ]}
          />

          {/* Top horizontal bar */}
          <View
            style={[
              { height: linesWidth },
              { width: fieldWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin },
            ]}
          />

          {/* Zone horizontal bar */}
          <View
            style={[
              { height: linesWidth },
              { width: fieldWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: threeQuarterLineTop },
              { left: leftRightMargin },
            ]}
          />

          {/* Brick */}
          <View
            style={[
              { position: 'absolute' },
              { left: brickLeft },
              { top: brick34Top },
              { borderRadius: brickRadius },
              { borderWidth: 1 },
              { borderColor: 'gray' },
              { backgroundColor: 'white' },
            ]}
            height={2 * brickRadius}
            width={2 * brickRadius}
          />
        </View>
      );
    case 'rectangle':
      return (
        <View
          style={[
            styles.background,
            {
              height: props.animationHeight,
              width: props.animationWidth,
            },
          ]}
        >
          {/* Right vertical bar */}
          <View
            style={[
              { height: fieldHeight },
              { width: linesWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'black' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin + fieldWidth },
            ]}
          />

          {/* Left vertical bar */}
          <View
            style={[
              { height: fieldHeight },
              { width: linesWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin },
            ]}
          />

          {/* Top horizontal bar */}
          <View
            style={[
              { height: linesWidth },
              { width: fieldWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: topMargin },
              { left: leftRightMargin },
            ]}
          />

          {/* Top horizontal bar */}
          <View
            style={[
              { height: linesWidth },
              { width: fieldWidth },
              { borderRadius: 1 },
              { borderWidth: 1 },
              { backgroundColor: 'gray' },
              { position: 'absolute' },
              { top: fieldHeight + topMargin },
              { left: leftRightMargin },
            ]}
          />
        </View>
      );
    default:
      return null;
  }
};

export default AnimationBackground;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
});
