import React, { useRef, useEffect } from 'react';
import { StyleSheet, Animated, View, TouchableOpacity } from 'react-native';

/** Progress bar displayed with an animation which:
    - shows the number of step;
    - shows the current step;
    - enable to move to a given step by clicking on the associated button
 */

const range = (min, max) => new Array(max - min + 1).fill(0).map((_, i) => min + i);

const Dot = props => {
  const { idx, full, onPress } = props;
  const dotStyles = [styles.dot, full ? styles.dotActivated : styles.dotGrey];

  return <TouchableOpacity style={dotStyles} onPress={onPress} key={idx} />;
};

const useAnimation = targetValue => {
  const animatedValue = useRef(new Animated.Value(targetValue)).current;
  const startAnimation = () => {
    Animated.timing(animatedValue, { toValue: targetValue }).start();
  };
  useEffect(startAnimation, [targetValue]);
  return animatedValue;
};

export const ProgressBar = props => {
  const { total, current, onDotPress } = props;

  const width = useAnimation((current - 1) / (total - 1)).interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressInner}>
        <Animated.View style={styles.lineBackground} />
        <Animated.View style={[styles.lineFiller, { width }]} />

        {range(1, total).map(k => (
          <Dot key={k} idx={k} onPress={() => onDotPress(k - 1)} full={k <= current} />
        ))}
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressInner: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 0,
  },
  dotGrey: {
    backgroundColor: 'rgb(150, 150, 150)',
  },
  dotActivated: {
    backgroundColor: 'rgb(0, 0, 0)',
  },
  lineBackground: {
    position: 'absolute',
    left: 0,
    top: 5,
    height: 5,
    width: '100%',
    backgroundColor: 'rgb(150, 150, 150)',
  },
  lineFiller: {
    position: 'absolute',
    top: 5,
    left: 0,
    height: 5,
    backgroundColor: 'rgb(0, 0, 0)',
  },
});
