import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';

import theme from '../../styles/theme.style';

const Program = props => {
  const { id, title, trainings } = props.program;
  const firstTodoTrainingIndex = 0; // Faking it for now

  const onPress = item =>
    props.navigation.navigate('TrainingPage', { training: trainings[firstTodoTrainingIndex], program: props.program });
  const width = `${(firstTodoTrainingIndex * 100) / trainings.length}%`;

  return (
    <TouchableOpacity style={styles.program} onPress={() => onPress()}>
      <Text style={styles.programTitle}>{title}</Text>
      <Text style={styles.completion}>0/{trainings.length}</Text>
      <View style={styles.progressBar}>
        <View style={[StyleSheet.absoluteFill, styles.fillProgressBar, { width }]} />
      </View>
    </TouchableOpacity>
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
