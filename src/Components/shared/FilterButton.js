import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../styles/theme.style';

const FilterButton = props => {
  const activeStyle = props.active ? styles.activeButton : {};
  return (
    <TouchableOpacity style={{ ...styles.button, ...activeStyle }} key={props.title} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: theme.BORDER_COLOR_BUTTON,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
    borderWidth: 1,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeButton: {
    borderColor: theme.BORDER_COLOR_BUTTON_ACTIVE,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON_ACTIVE,
  },
  buttonText: {
    textTransform: 'capitalize',
  },
});

export default FilterButton;
