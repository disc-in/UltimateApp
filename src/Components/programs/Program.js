import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';

import theme from '../../styles/theme.style';

export const Program = props => {
  const { title, trainings } = props.program;

  const programCompleteTrainings = props.completeTrainings
    .filter(({ training, program }) => program.id === props.program.id)
    .map(({ training, program }) => training);
  const completeTrainingsCount = programCompleteTrainings.length;

  const onPress = () => {
    const firstTodoTraining = trainings.find(training => !programCompleteTrainings.includes(training));
    if (firstTodoTraining !== undefined) {
      props.navigation.navigate('ProgramPage', { program: props.program });
    }
  };

  const width = `${(completeTrainingsCount * 100) / trainings.length}%`;
  const completeStyle = completeTrainingsCount === trainings.length ? styles.complete : null;
  return (
    <TouchableOpacity style={[styles.program, completeStyle]} onPress={onPress}>
      <Text style={styles.programTitle}>{title}</Text>
      <Text style={styles.completion}>
        {completeTrainingsCount}/{trainings.length} trainings
        {completeTrainingsCount === trainings.length && ' 👍🎉'}
      </Text>
      <View style={styles.progressBar}>
        <View style={[StyleSheet.absoluteFill, styles.fillProgressBar, { width }]} />
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    completeTrainings: state.completeTrainings,
  };
};

export default connect(mapStateToProps)(Program);

const styles = StyleSheet.create({
  program: {
    marginBottom: 10,
    padding: 20,
    backgroundColor: theme.COLOR_SECONDARY_LIGHT,
  },
  complete: {
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON_ACTIVE,
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
