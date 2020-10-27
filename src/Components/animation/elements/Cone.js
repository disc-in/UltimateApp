import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import theme from '../../../styles/theme.style';

const Disc = ({ baseWidth, number }) => {
  const coneWidth = baseWidth / 2;
  const itemStyle = [
    styles.cone,
    {
      borderLeftWidth: coneWidth / 2,
      borderRightWidth: coneWidth / 2,
      borderBottomWidth: coneWidth,
    },
  ];

  return (
    <View style={itemStyle}>
      <Text style={styles.coneText}>{number}</Text>
    </View>
  );
};

export default Disc;

const styles = StyleSheet.create({
  cone: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderBottomColor: theme.CONE_COLOR,
  },
  coneText: {
    width: 0,
    height: 0,
  },
});
