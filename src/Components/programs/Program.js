import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { connect } from 'react-redux';
import theme from '../../styles/theme.style';

const Program = props => {
  const { id, title, trainings } = props.program;
  const fakeFirstTodoTraining = 1;
  const width = `${(fakeFirstTodoTraining * 100) / trainings.length}%`;
  return (
    <View style={styles.program}>
      <Text style={styles.programTitle}>{title}</Text>
      <Text style={styles.completion}>1/{trainings.length}</Text>
      <View style={styles.progressBar}>
        <View style={[StyleSheet.absoluteFill, styles.fillProgressBar, { width }]} />
      </View>
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
  progressBar: {
    marginTop: 5,
    height: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  fillProgressBar: {
    width: '50%',
    borderRadius: 5,
    backgroundColor: theme.COLOR_PRIMARY,
  },
});
