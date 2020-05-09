import React from 'react';
import { StyleSheet, Easing, Animated, View, PanResponder } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';

import debug from './debug';

class MovingCircle extends React.Component {
  constructor(props) {
    super(props);

    this.currentPosition = new Animated.ValueXY({ x: 0, y: 0 });

    // Add a listener on each coordinate offset to get its value at the end of each move
    this.currentPosition.x.addListener(({ value }) => {
      this._value = value;
    });
    this.currentPosition.y.addListener(({ value }) => {
      this._value = value;
    });

    this._val = { x: 0, y: 0 };

    this.currentPosition.addListener(value => (this._val = value)); // Initialize PanResponder with move handling

    // Initiate the panResponder
    this.panResponder = PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: () => true,

      // Called when the gesture starts
      onPanResponderGrant: () => {
        this.currentPosition.setOffset({
          x: this._val.x,
          y: this._val.y,
        });

        debug('grant, elemId: ' + this.props.elemId);
        debug('\tis counter cut?: ' + this.props.isCounterCut);
        this.currentPosition.setValue({ x: 0, y: 0 });
      },

      // Called when a move is made
      onPanResponderMove: Animated.event([null, { dx: this.currentPosition.x, dy: this.currentPosition.y }]),

      onPanResponderRelease: (evt, gesturestate) => {
        this.props.onMoveEnd(
          this.props.elemId,
          this.currentPosition.x._value,
          this.currentPosition.y._value,
          this.props.isCounterCut,
        );
      },
    });
  }

  render() {
    var panStyle = {
      transform: this.currentPosition.getTranslateTransform(),
    };

    debug('render Moving Circle: isCounterCut: ' + this.props.isCounterCut);
    debug('cx/cy: ' + this.props.cx + '/' + this.props.cy);
    debug('currentposition.x/y: ' + this.currentPosition.x._value + '/' + this.currentPosition.y._value);

    debug('toString(): ' + this.props.cx.toString());

    /* stroke="green" */
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          panStyle,
          { position: 'absolute' },
          { left: this.props.cx - this.props.radius },
          { top: this.props.cy - this.props.radius },
        ]}
        height={2 * this.props.radius}
        width={2 * this.props.radius}
      >
        <Svg style={[StyleSheet.absoluteFill]}>
          <Circle
            cx={this.props.radius}
            cy={this.props.radius}
            r={this.props.radius}
            strokeWidth={this.props.radius / 6}
            strokeDasharray="3, 3"
            fill="white"
          />
        </Svg>
      </Animated.View>
    );
  }
}

export default MovingCircle;
