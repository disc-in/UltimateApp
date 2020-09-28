import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import { AnimationBackgrounds } from '../../Fixtures/config';

const BackgroundPicker = (props) => {
  return (
    <Picker
      selectedValue={props.selectedBackground}
      style={styles.picker}
      itemStyle={styles.itemStyle}
      onValueChange={(itemValue, itemIndex) => {
        props.onBackgroundChange(itemValue);
      }}
    >
      {Object.values(AnimationBackgrounds).map((background) => (
        <Picker.Item label={I18n.t(`data.animationBackgrounds.${background}`)} value={background} key={background} />
      ))}
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
