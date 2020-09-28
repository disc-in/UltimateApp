import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const HeaderButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} testID={props.testID || 'headerButton'}>
      <Image style={styles.image} source={props.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginRight: 20,
    width: 20,
    height: 20,
  },
});

export default HeaderButton;
