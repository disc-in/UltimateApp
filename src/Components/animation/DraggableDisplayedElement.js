import React from 'react';
import { StyleSheet, Animated, PanResponder } from 'react-native';

import theme from '../../styles/theme.style';

/** An element displayed in a drill animation */
class DraggableDisplayedElement extends React.Component {
  /* Props must contain:
      - type: which indicates how to display the element: "offense", "defense", "triangle" or "disc"
      - number: string defined if there is something written on the element
    */
  constructor(props) {
    super(props);

    /* Current position of the element in pixels */
    this.currentPosition = new Animated.ValueXY({ x: 0, y: 0 });

    // Initiate the panResponder
    this.panResponder = PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: () => true,

      // Called when a move is made
      onPanResponderMove: Animated.event([null, { dx: this.currentPosition.x, dy: this.currentPosition.y }]),

      onPanResponderRelease: (event, gestureState) => {
        // this.props.onMoveEnd(this.props.type, gestureState.dx, gestureState.dy);
        this.props.onMoveEnd(this.props.type, gestureState.moveX, gestureState.moveY);
        this.currentPosition.setValue({ x: 0, y: 0 });
      },
    });
  }

  render() {
    const discRadius = this.props.playerRadius / 1.5;
    const coneSize = this.props.playerRadius / 2;

    const panStyle = {
      transform: this.currentPosition.getTranslateTransform(),
    };

    let itemStyle, textStyle;
    switch (this.props.type) {
      case 'defense':
      case 'offense':
        itemStyle = [
          panStyle,
          styles.draggableDisplayedElement,
          this.props.type === 'defense' ? styles.defense : styles.offense,
          {
            height: this.props.playerRadius,
            width: this.props.playerRadius,
            borderRadius: this.props.playerRadius,
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
      <Animated.View {...this.panResponder.panHandlers} style={itemStyle} key={this.props.type}>
        <Animated.Text style={textStyle}>{this.props.number}</Animated.Text>
      </Animated.View>
    );
  }
}

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
