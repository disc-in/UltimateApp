import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';

import theme from '../../styles/theme.style';

const BackgroundPicker = props => {
  return (
    <Picker
      selectedValue={props.selectedBackground}
      style={styles.picker}
      itemStyle={styles.itemStyle}
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
    height: 80,
    width: 150,
  },
  itemStyle: {
    fontSize: theme.FONT_SIZE_SMALL,
    height: 80,
  },
});
