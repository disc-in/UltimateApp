import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import theme from '../../styles/theme.style';

const StartButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} testID="startButton" style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.MAIN_COLOR,
  },
  text: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: theme.COLOR_PRIMARY_LIGHT,
  },
});

export default StartButton;
