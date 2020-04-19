import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Slider as NativeSlider } from 'react-native-elements';
import theme from '../../styles/theme.style';

const Slider = ({ minimumValue, maximumValue, step, value, onValueChange, testID }) => {
  return (
    <NativeSlider
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      step={step}
      value={value}
      onValueChange={onValueChange}
      style={styles.container}
      trackStyle={styles.trackStyle}
      minimumTrackTintColor={theme.FORM_ELEMENT_COLOR}
      thumbTintColor={theme.FORM_ELEMENT_COLOR}
      testID={testID}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  trackStyle: {
    height: 2,
  },
});

export default Slider;
