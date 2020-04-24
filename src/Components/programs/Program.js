import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { connect } from 'react-redux';
import theme from '../../styles/theme.style';

const Program = props => {
  const { id, title, trainings } = props.program;
  return (
    <View style={styles.program}>
      <Text style={styles.programTitle}>{title}</Text>
      <Text style={styles.completion}>1/{trainings.length}</Text>
    </View>
  );
};

export default Program;

const styles = StyleSheet.create({
  program: {
    marginBottom: 10,
    padding: 20,
    backgroundColor: theme.COLOR_SECONDARY_LIGHT,
  },
  programTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
  completion: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
