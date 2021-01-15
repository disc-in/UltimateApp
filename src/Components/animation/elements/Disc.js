import React from 'react';
import { StyleSheet, View } from 'react-native';

import theme from '../../../styles/theme.style';

const Disc = ({ baseWidth, number }) => {
  const discWidth = baseWidth / 1.5;
  const itemStyle = [
    styles.disc,
    {
      height: discWidth,
      width: discWidth,
      borderRadius: discWidth,
      borderWidth: discWidth / 10,
    },
  ];

  // Number is not displayed
  return <View style={itemStyle} />;
};

export default Disc;

const styles = StyleSheet.create({
  disc: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.DISC_BORDER,
    backgroundColor: theme.DISC_COLOR,
  },
});
