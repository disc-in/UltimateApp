import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';

const Button = ({ onPress, icon, text, light, small, style, testID }) => {
  const buttonLight = light ? styles.buttonLight : undefined;
  const smallButton = small ? styles.smallButton : undefined;
  const smallIcon = small ? styles.smallIcon : undefined;
  const textLight = light ? styles.textLight : styles.text;

  return (
    <TouchableOpacity
      style={[styles.button, buttonLight, smallButton, style]}
      onPress={onPress}
      testID={testID || 'button'}
    >
      {icon && <MaterialCommunityIcons name={icon} style={[styles.icon, textLight, smallIcon]} />}
      {text && <Text style={textLight}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    backgroundColor: theme.MAIN_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonLight: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    borderColor: theme.MAIN_COLOR,
    borderWidth: 1,
  },
  smallButton: {
    width: 'auto',
    alignSelf: 'center',
    height: 30,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 20,
  },
  smallIcon: {
    marginRight: 5,
  },
  text: {
    textAlign: 'center',
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  textLight: {
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
});

export default Button;
