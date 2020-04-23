import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import theme from '../../styles/theme.style';

const GradientButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress} testID="gradientButton">
      <LinearGradient
        style={styles.gradient}
        colors={[theme.GRADIENT_FIRST_COLOR, theme.GRADIENT_SECOND_COLOR]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={styles.text}>{props.text}</Text>
      </LinearGradient>
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
  },
  gradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
});

export default GradientButton;
