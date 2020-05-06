import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import buttonValidation from '../../../assets/check_dark.png';

const HeaderButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} testID="headerButton">
      <Image style={styles.headerButtonText} source={buttonValidation} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerButtonText: {
    marginRight: 20,
    width: 20,
    height: 20,
  },
});

export default HeaderButton;
