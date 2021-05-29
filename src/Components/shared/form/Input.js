import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { useField } from 'formik';

import theme from '../../../styles/theme.style';

const Input = ({ fieldName, label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [field, meta] = useField(fieldName);

  const borderColor = isFocused ? styles.focusedInput : meta.error ? styles.errorInput : undefined;
  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.input, borderColor]}>
        {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
        <TextInput
          onChangeText={field.onChange(fieldName)}
          value={field.value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  group: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.BORDER_COLOR_BUTTON,
    padding: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  focusedInput: {
    borderColor: theme.MAIN_COLOR,
  },
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
});
