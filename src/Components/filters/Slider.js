import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Slider as NativeSlider } from 'react-native-elements';
import theme from '../../styles/theme.style';

const Slider = ({ minimumValue, maximumValue, step, value, onValueChange, testID }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.boundaries}>{minimumValue}</Text>
      <NativeSlider
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        value={value}
        onValueChange={onValueChange}
        style={styles.slider}
        trackStyle={styles.trackStyle}
        minimumTrackTintColor={theme.FORM_ELEMENT_COLOR}
        thumbTintColor={theme.FORM_ELEMENT_COLOR}
        testID={testID}
      />
      <Text style={styles.boundaries}>{maximumValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boundaries: {
    textAlign: 'center',
    flexGrow: 1,
  },
  slider: {
    flexGrow: 10,
    marginHorizontal: 10,
  },
  trackStyle: {
    height: 2,
  },
});

export default Slider;
