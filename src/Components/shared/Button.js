import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import theme from '../../styles/theme.style';

const Button = (props) => {
  const buttonLight = props.buttonLight ? styles.buttonLight : styles.button;
  const textLight = props.buttonLight ? styles.textLight : styles.text;

  return (
    <TouchableOpacity style={[buttonLight, props.style]} onPress={props.onPress} testID={props.testID || 'button'}>
      <Text style={textLight}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    backgroundColor: theme.MAIN_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  buttonLight: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    borderColor: theme.MAIN_COLOR,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLight: {
    textAlign: 'center',
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
});

export default Button;
