import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormGroup = (props) => {
  return <View style={styles.formGroup}>{props.children}</View>;
};

export default FormGroup;

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 10,
  },
});
