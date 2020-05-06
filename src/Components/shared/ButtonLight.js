import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import theme from '../../styles/theme.style';

const ButtonLight = props => {
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
    width: '90%',
    height: 40,
    borderRadius: 5,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    borderColor: theme.COLOR_SECONDARY,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
});

export default ButtonLight;
