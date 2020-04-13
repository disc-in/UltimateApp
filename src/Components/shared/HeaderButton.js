import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../styles/theme.style';

const HeaderButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} testID="headerButton">
      <Text style={styles.headerButtonText}>✓</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerButtonText: {
    paddingRight: 20,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default HeaderButton;
