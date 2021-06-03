import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { useField } from 'formik';

import theme from '../../../styles/theme.style';

const Input = ({ fieldName, label, required, multiline, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [field, meta] = useField(fieldName);

  const borderColor = isFocused ? styles.focusedInput : meta.error && meta.touched ? styles.errorInput : undefined;
  const multilineProps = multiline ? { multiline: true, numberOfLines: 3, textAlignVertical: 'top' } : undefined;

  return (
    <View style={styles.group}>
      <View style={styles.label}>
        {required && <Text style={styles.error}>* </Text>}
        <Text>{label}</Text>
      </View>
      <View style={[styles.input, borderColor]}>
        {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
        <TextInput
          testID={`input-${fieldName}`}
          onChangeText={field.onChange(fieldName)}
          value={field.value?.toString()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...multilineProps}
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
    flexDirection: 'row',
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
