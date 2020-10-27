import React from 'react';
import { Animated, PanResponder } from 'react-native';

import theme from '../../styles/theme.style';
import Disc from '../animation/elements/Disc';
import Player from '../animation/elements/Player';
import Cone from '../animation/elements/Cone';

/* Props must contain:
    - type: which indicates how to display the element: "offense", "defense", "triangle" or "disc"
    - number: string defined if there is something written on the element
*/
const DraggableDisplayedElement = (props) => {
  const { playerRadius, type, number } = props;
  /* Current position of the element in pixels */
  const currentPosition = new Animated.ValueXY({ x: 0, y: 0 });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event([null, { dx: currentPosition.x, dy: currentPosition.y }], {
      useNativeDriver: false,
    }),

    onPanResponderRelease: (event, gestureState) => {
      props.onMoveEnd(type, gestureState.moveX, gestureState.moveY);
      currentPosition.setValue({ x: 0, y: 0 });
    },
  });

  const discRadius = playerRadius / 1.5;
  const coneSize = playerRadius / 2;

  const panStyle = {
    transform: currentPosition.getTranslateTransform(),
  };

  return (
    <Animated.View {...panResponder.panHandlers} style={panStyle} key={type}>
      {
        {
          defense: <Player width={playerRadius} number={number} type={type} />,
          offense: <Player width={playerRadius} number={number} type={type} />,
          triangle: <Cone width={coneSize} number={number} />,
          disc: <Disc width={discRadius} number={number} />,
        }[type]
      }
    </Animated.View>
  );
};

export default DraggableDisplayedElement;
