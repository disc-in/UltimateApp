import React, { useEffect, useRef, useState } from 'react';
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
  const { draggableBaseWidth, type, number, animation } = props;

  const [number, setNumber] = useState(1);

  /* Current position of the element in pixels */
  const currentPosition = new Animated.ValueXY({ x: 0, y: 0 });

  useEffect(() => {
    let counter = 1;

    for (const eType of animation.ids) {
      if (eType === type) {
        counter += 1;
      }
    }

    setNumber(counter);
  }, [animation]);

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
    marginRight: 10,
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
