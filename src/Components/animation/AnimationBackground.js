import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AnimationBackgrounds } from '../../Fixtures/config';

/**
 * If props.background does not match any of the above types, the background will be empty.
 *
 * The props must contain:
 * - animationWidth, animationHeight: the dimension of the animation area
 * - background: the background type
 */
const AnimationBackground = (props) => {
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
    case AnimationBackgrounds.ENDZONE:
      return (
        <View style={{ height: props.animationHeight, width: props.animationWidth }}>
          {/* Right vertical bar */}
          <View
            style={[
              styles.bar,
              {
                height: fieldHeight,
                width: linesWidth,
                top: topMargin,
                left: leftRightMargin + fieldWidth,
              },
            ]}
          />

          {/* Left vertical bar */}
          <View
            style={[
              styles.bar,
              {
                height: fieldHeight,
                width: linesWidth,
                top: topMargin,
                left: leftRightMargin,
              },
            ]}
          />

          {/* Top horizontal bar */}
          <View
            style={[
              styles.bar,
              {
                height: linesWidth,
                width: fieldWidth,
                top: topMargin,
                left: leftRightMargin,
              },
            ]}
          />

          {/* Zone horizontal bar */}
          <View
            style={[
              styles.bar,
              {
                height: linesWidth,
                width: fieldWidth,
                top: zoneLineTop,
                left: leftRightMargin,
              },
            ]}
          />

          {/* Brick */}
          <View
            style={[styles.brick, { left: brickLeft }, { top: brickZoneTop }, { borderRadius: brickRadius }]}
            height={2 * brickRadius}
            width={2 * brickRadius}
          />
        </View>
      );
    case AnimationBackgrounds.THREE_QUARTERS_FIELD:
      return (
        <View style={{ height: props.animationHeight, width: props.animationWidth }}>
          {/* Right vertical bar */}
          <View
            style={[
              styles.bar,
              {
                height: fieldHeight,
                width: linesWidth,
                top: topMargin,
                left: leftRightMargin + fieldWidth,
              },
            ]}
          />

          {/* Left vertical bar */}
          <View
            style={[
              styles.bar,
              {
                height: fieldHeight,
                width: linesWidth,
                top: topMargin,
                left: leftRightMargin,
              },
            ]}
          />

          {/* Top horizontal bar */}
          <View
            style={[
              styles.bar,
              {
                height: linesWidth,
                width: fieldWidth,
                top: topMargin,
                left: leftRightMargin,
              },
            ]}
          />

          {/* Zone horizontal bar */}
          <View
            style={[
              styles.bar,
              {
                height: linesWidth,
                width: fieldWidth,
                top: threeQuarterLineTop,
                left: leftRightMargin,
              },
            ]}
          />

          {/* Brick */}
          <View
            style={[styles.brick, { left: brickLeft }, { top: brick34Top }, { borderRadius: brickRadius }]}
            height={2 * brickRadius}
            width={2 * brickRadius}
          />
        </View>
      );
    case AnimationBackgrounds.RECTANGLE:
      return (
        <View style={{ height: props.animationHeight, width: props.animationWidth }}>
          {/* Right vertical bar */}
          <View
            style={[
              styles.bar,
              {
                height: fieldHeight,
                width: linesWidth,
                top: topMargin,
                left: leftRightMargin + fieldWidth,
              },
            ]}
          />

          {/* Left vertical bar */}
          <View
            style={[
              styles.bar,
              {
                height: fieldHeight,
                width: linesWidth,
                top: topMargin,
                left: leftRightMargin,
              },
            ]}
          />

          {/* Top horizontal bar */}
          <View
            style={[
              styles.bar,
              {
                height: linesWidth,
                width: fieldWidth,
                top: topMargin,
                left: leftRightMargin,
              },
            ]}
          />

          {/* Top horizontal bar */}
          <View
            style={[
              styles.bar,
              {
                height: linesWidth,
                width: fieldWidth,
                top: fieldHeight + topMargin,
                left: leftRightMargin,
              },
            ]}
          />
        </View>
      );
    case AnimationBackgrounds.EMPTY:
      return null;
    default:
      return null;
  }
};

export default AnimationBackground;

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
  },
  brick: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'black',
  },
});
