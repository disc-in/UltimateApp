import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import theme from '../../../styles/theme.style';

const Disc = ({ width, number }) => {
  const itemStyle = [
    styles.disc,
    {
      height: width,
      width,
      borderRadius: width,
      borderWidth: width / 10,
    },
  ];

  return (
    <View style={itemStyle}>
      <Text style={styles.discText}>{number}</Text>
    </View>
  );
};

export default Disc;

const styles = StyleSheet.create({
  disc: {
    marginRight: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.DISC_BORDER,
    backgroundColor: theme.DISC_COLOR,
  },
  discText: {
    fontWeight: 'bold',
    color: theme.DISC_COLOR, //Make the number in the disc invisible,
  },
});
