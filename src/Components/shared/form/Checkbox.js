import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { CheckBox as NativeCheckbox } from 'react-native-elements';
import { useField } from 'formik';

import I18n from '../../../utils/i18n';
import theme from '../../../styles/theme.style';

const Checkbox = ({ fieldName, label, values, labels, ...props }) => {
  const [field, meta, helpers] = useField(fieldName);

  const renderCheckbox = (possibleValue, index) => {
    const selected = field.value.includes(possibleValue);

    const onPress = () => {
      const existingValueIndex = field.value.findIndex((v) => v === possibleValue);
      if (existingValueIndex === -1) {
        helpers.setValue([...field.value, possibleValue]);
      } else {
        helpers.setValue(field.value.filter((value, index) => index !== existingValueIndex));
      }
    };

    return (
      <NativeCheckbox
        checked={field.value.includes(possibleValue)}
        onPress={onPress}
        key={index}
        title={labels[index]}
        containerStyle={styles.checkbox}
        textStyle={styles.checkboxText}
        checkedColor={theme.MAIN_COLOR}
      />
    );
  };

  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
      <View style={styles.wrapper}>{values.map(renderCheckbox)}</View>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  group: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkbox: {
    flexBasis: '40%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    fontWeight: 'normal',
  },
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
});
