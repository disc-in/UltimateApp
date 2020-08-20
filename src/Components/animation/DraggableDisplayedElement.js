import React from 'react';
import { StyleSheet, Easing, Animated, View, PanResponder } from 'react-native';

import theme from '../../styles/theme.style';

/* Props must contain:
    - type: which indicates how to display the element: "offense", "defense", "triangle" or "disc"
    - number: string defined if there is something written on the element
*/
const DraggableDisplayedElement = props => {
  const { playerRadius, type, number } = props;
  /* Current position of the element in pixels */
  const currentPosition = new Animated.ValueXY({ x: 0, y: 0 });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event([null, { dx: currentPosition.x, dy: currentPosition.y }]),

    onPanResponderRelease: (event, gestureState) => {
      props.onMoveEnd(type, gestureState.moveX, gestureState.moveY);
      currentPosition.setValue({ x: 0, y: 0 });
    },
  });

  const discRadius = playerRadius / 1.5;
  const coneSize = playerRadius / 2;

  const panStyle = { transform: currentPosition.getTranslateTransform() };
  let itemStyle, textStyle;

  switch (type) {
    case 'defense':
    case 'offense':
      itemStyle = [
        panStyle,
        styles.draggableDisplayedElement,
        type == 'defense' ? styles.defense : styles.offense,
        {
          height: playerRadius,
          width: playerRadius,
          borderRadius: playerRadius,
        },
      ];
      textStyle = styles.playerText;
      break;
    case 'disc':
      itemStyle = [
        panStyle,
        styles.draggableDisplayedElement,
        styles.disc,
        {
          height: discRadius,
          width: discRadius,
          borderRadius: discRadius,
          borderWidth: discRadius / 10,
        },
      ];
      textStyle = styles.discText;
      break;
    case 'triangle':
      itemStyle = [
        panStyle,
        styles.draggableDisplayedElement,
        styles.triangle,
        {
          borderLeftWidth: coneSize / 2,
          borderRightWidth: coneSize / 2,
          borderBottomWidth: coneSize,
        },
      ];
      textStyle = styles.triangleText;
  }

  return (
    <Animated.View {...panResponder.panHandlers} style={itemStyle} key={type}>
      <Animated.Text style={textStyle}>{number}</Animated.Text>
    </Animated.View>
  );
};

export default DraggableDisplayedElement;

const styles = StyleSheet.create({
  draggableDisplayedElement: {
    marginRight: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defense: {
    backgroundColor: theme.DEFENSE_COLOR,
  },
  offense: {
    backgroundColor: theme.MAIN_COLOR,
  },
  playerText: {
    color: theme.PLAYER_TEXT_COLOR,
    fontWeight: 'bold',
  },
  disc: {
    borderColor: theme.DISC_BORDER,
    backgroundColor: theme.DISC_COLOR,
  },
  discText: {
    fontWeight: 'bold',
    color: theme.DISC_TEXT_COLOR,
  },
  triangle: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderBottomColor: theme.CONE_COLOR,
  },
  triangleText: {
    width: 0,
    height: 0,
  },
});
