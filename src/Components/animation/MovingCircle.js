import React from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';

const MovingCircle = (props) => {
  const currentPosition = new Animated.ValueXY({ x: 0, y: 0 });

  // Add a listener on each coordinate offset to get its value at the end of each move
  currentPosition.x.addListener(({ value }) => {
    this._value = value;
  });
  currentPosition.y.addListener(({ value }) => {
    this._value = value;
  });

  let _val = { x: 0, y: 0 };

  currentPosition.addListener((value) => (_val = value)); // Initialize PanResponder with move handling

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderGrant: () => {
      currentPosition.setOffset({
        x: _val.x,
        y: _val.y,
      });

      currentPosition.setValue({ x: 0, y: 0 });
    },

    onPanResponderMove: Animated.event([null, { dx: currentPosition.x, dy: currentPosition.y }], {
      useNativeDriver: false,
    }),

    onPanResponderRelease: (evt, gesturestate) => {
      props.onMoveEnd(props.elemId, currentPosition.x._value, currentPosition.y._value, props.isCounterCut);
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.circle,
        {
          transform: currentPosition.getTranslateTransform(),
          left: props.cx - props.radius,
          top: props.cy - props.radius,
        },
      ]}
      height={2 * props.radius}
      width={2 * props.radius}
    />
  );
};

export default MovingCircle;

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
  },
});
