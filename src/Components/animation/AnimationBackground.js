import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AnimationBackgrounds } from '../../Fixtures/config';
import theme from '../../styles/theme.style';

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
  const zoneLineTop = topMargin + fieldHeight * 0.4;
  const threeQuarterLineTop = topMargin + fieldHeight * 0.24;

  const brickRadius = linesWidth * 10;
  const brickLeft = leftRightMargin + fieldWidth / 2 - brickRadius / 2;
  const brickZoneTop = zoneLineTop + fieldHeight * 0.4 - 2 * brickRadius;
  const brick34Top = threeQuarterLineTop + fieldHeight * 0.33 - 2 * brickRadius;

  const Brick = ({ top }) => (
    <MaterialCommunityIcons name="close" style={[styles.brick, { left: brickLeft, top }]} size={brickRadius} />
  );

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

          <Brick top={brickZoneTop} />
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

          <Brick top={brick34Top} />
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

          {/* Bottom horizontal bar */}
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
    backgroundColor: theme.COLOR_PRIMARY,
    borderWidth: 1,
  },
  brick: {
    position: 'absolute',
    color: theme.COLOR_SECONDARY,
  },
});
