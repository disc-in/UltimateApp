import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import theme from '../../styles/theme.style';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress} testID="button">
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    left: '10%',
    right: '10%',
    width: '80%',
    height: 40,
    borderRadius: 30,
    backgroundColor: theme.COLOR_PRIMARY,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});

export default Button;
