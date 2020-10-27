import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import theme from '../../../styles/theme.style';

const Disc = ({ width, number }) => {
  const itemStyle = [
    styles.cone,
    {
      borderLeftWidth: width / 2,
      borderRightWidth: width / 2,
      borderBottomWidth: width,
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
    marginRight: 10,
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
