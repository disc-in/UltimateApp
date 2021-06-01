import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useField } from 'formik';

import theme from '../../../styles/theme.style';

const RadioButton = ({ fieldName, label, values, labels, ...props }) => {
  const [field, meta] = useField(fieldName);

  const renderButton = (possibleValue, index) => {
    const selectedStyle = field.value === possibleValue ? styles.selectedButton : undefined;
    const onPress = () => {
      field.onChange(fieldName)(possibleValue);
    };
    return (
      <TouchableOpacity
        style={[styles.button, selectedStyle]}
        key={index}
        onPress={onPress}
        testID={`input-${fieldName}-${possibleValue}`}
      >
        <Text style={styles.buttonText}>{labels[index]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
      <View style={styles.buttons}>{values.map(renderButton)}</View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  group: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 10,
    marginRight: 5,
    borderColor: theme.BORDER_COLOR_BUTTON,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    flexGrow: 1,
    flexBasis: '30%',
  },
  selectedButton: {
    borderColor: theme.MAIN_COLOR,
  },
  buttonText: {
    textAlign: 'center',
  },
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
});
