import React from 'react';
import { Animated, PanResponder } from 'react-native';

import Disc from '../animation/elements/Disc';
import Player from '../animation/elements/Player';
import Cone from '../animation/elements/Cone';

/* Props must contain:
    - type: which indicates how to display the element: "offense", "defense", "triangle" or "disc"
    - number: string defined if there is something written on the element
*/
const DraggableDisplayedElement = (props) => {
  const { draggableBaseWidth, type, number } = props;

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

  const panStyle = {
    transform: currentPosition.getTranslateTransform(),
    padding: 5,
    height: '100%',
    flexBasis: '25%',
    minWidth: draggableBaseWidth,
    minHeight: draggableBaseWidth,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Animated.View {...panResponder.panHandlers} style={panStyle} key={type}>
      {
        {
          defense: <Player baseWidth={draggableBaseWidth} number={number} type={type} />,
          offense: <Player baseWidth={draggableBaseWidth} number={number} type={type} />,
          triangle: <Cone baseWidth={draggableBaseWidth} number={number} />,
          disc: <Disc baseWidth={draggableBaseWidth} number={number} />,
        }[type]
      }
    </Animated.View>
  );
};

export default DraggableDisplayedElement;
