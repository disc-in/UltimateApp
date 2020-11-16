import React from 'react';
import { StyleSheet } from 'react-native';
import { ToggleButton as PaperToggleButton } from 'react-native-paper';

import theme from '../../styles/theme.style';

const ToggleButton = ({ value, onValueChange, possibleValues, icons }) => {
  const renderButton = (possibleValue, index) => {
    const pressed = possibleValue === value;
    return (
      <PaperToggleButton
        key={index}
        color={pressed ? theme.MAIN_COLOR : undefined}
        style={pressed ? styles.pressedToggleButton : undefined}
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
    justifyContent: 'center',
  },
  pressedToggleButton: {
    backgroundColor: theme.BACKGROUND_COLOR,
    opacity: 0.8,
  },
});

export default ToggleButton;
