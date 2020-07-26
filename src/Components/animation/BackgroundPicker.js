import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

const BackgroundPicker = props => {
  return (
    <Picker
      selectedValue={props.selectedBackground}
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) => {
        props.onBackgroundChange(itemValue);
      }}
    >
      <Picker.Item label="Endzone" value="zone" />
      <Picker.Item label="3/4 field" value="3/4 field" />
      <Picker.Item label="Rectangle" value="rectangle" />
      <Picker.Item label="Empty" value="empty" />
    </Picker>
  );
};

export default BackgroundPicker;

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 150,
  },
});
