import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useField } from 'formik';

import theme from '../../../styles/theme.style';

const Input = ({ fieldName, label, ...props }) => {
  const [field, meta] = useField(fieldName);

  return (
    <View>
      {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
      <TextInput
        label={label}
        onChangeText={field.onChange(fieldName)}
        value={field.value}
        {...props}
        theme={{ colors: { primary: theme.MAIN_COLOR } }}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
});
