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
      <View style={styles.presentationContainer}>
        <Text style={styles.programTitle}>{title}</Text>
        <Text style={styles.completion}>
          {completeTrainingsCount}/{trainings.length} trainings
          {completeTrainingsCount === trainings.length && ' 👍🎉'}
        </Text>
        <View style={styles.progressBar}>
          <View style={[StyleSheet.absoluteFill, styles.fillProgressBar, { width }]} />
        </View>
      </View>
      <View style={styles.ctaContainer}>
        <Text style={styles.cta}>></Text>
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
    padding: 10,
    paddingLeft: 50,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  presentationContainer: {
    flexBasis: '80%',
  },
  complete: {
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON_ACTIVE,
  },
  programTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  completion: {
    textAlign: 'right',
  },
  progressBar: {
    marginTop: 5,
    height: 3,
    width: '100%',
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: 2,
  },
  fillProgressBar: {
    width: '50%',
    borderRadius: 5,
    backgroundColor: theme.COLOR_PRIMARY,
  },
  ctaContainer: {
    flexBasis: '20%',
    textAlign: 'center',
  },
  cta: {
    fontSize: theme.FONT_SIZE_LARGE,
    textAlign: 'center',
  },
});
