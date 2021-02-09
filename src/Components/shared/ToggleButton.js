import React from 'react';
import { StyleSheet } from 'react-native';
import { ToggleButton as PaperToggleButton } from 'react-native-paper';

import theme from '../../styles/theme.style';

const ToggleButton = ({ value, onValueChange, possibleValues, icons }) => {
  const renderButton = (possibleValue, index) => {
    const pressed = possibleValue === value;
    const positionalStyle =
      index === 0 ? styles.first : index === possibleValues.length - 1 ? styles.last : styles.middle;
    return (
      <PaperToggleButton
        key={index}
        color={pressed ? theme.MAIN_COLOR : undefined}
        style={[styles.button, positionalStyle, pressed ? styles.pressedToggleButton : undefined]}
        icon={icons[index]}
        value={possibleValue}
        disabled={pressed}
        testID={`toggle-${possibleValue}`}
      />
    );
  };

  return (
    <PaperToggleButton.Row style={styles.row} value={value} onValueChange={onValueChange}>
      {possibleValues.map(renderButton)}
    </PaperToggleButton.Row>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 5,
    justifyContent: 'center',
  },
  button: {
    borderColor: theme.COLOR_SECONDARY,
    borderWidth: StyleSheet.hairlineWidth,
  },
  pressedToggleButton: {
    backgroundColor: theme.COLOR_SECONDARY_LIGHT,
    opacity: 0.8,
  },
  first: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  middle: {
    borderRadius: 0,
    borderLeftWidth: 0,
  },
  last: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default ToggleButton;
