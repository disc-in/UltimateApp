import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useField } from 'formik';

import theme from '../../../styles/theme.style';

const Input = ({ fieldName, label, ...props }) => {
  const [field, meta] = useField(fieldName);

  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.buttons}>{props.children}</View>
      {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
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
  buttons: {
    flexDirection: 'row',
    borderRadius: 5,
    padding: 5,
  },
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
});
