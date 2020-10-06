import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} testID={props.testID || 'headerButton'}>
      <MaterialCommunityIcons name={props.icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    marginRight: 20,
  },
});

export default HeaderButton;
