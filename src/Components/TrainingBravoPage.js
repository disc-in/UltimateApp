import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import theme from '../styles/theme.style';
import { completeTraining } from '../Store/Actions/programAction';
import Button from './shared/Button';

function getGoals(training) {
  return Array.from(new Set(training.drills.reduce((acc, { goals }) => acc.concat(goals), [])));
}

export const TrainingBravoPage = props => {
  const { navigation, route } = props;
  const { training, program } = route.params;

  const finishTraining = () => {
    if (program) {
      navigation.navigate('ProgramPage', { program });
    } else {
      navigation.navigate('TrainingListPage');
    }
  };

  React.useEffect(() => {
    if (program) {
      props.completeTraining({ training, program });
    }
  }, []);

  const renderProgramTitle = () => {
    const currentTrainingIndex = program.trainings.findIndex(item => item.id === training.id);
    return (
      <Text style={styles.title}>
        {program.title} - session {currentTrainingIndex + 1}/{program.trainings.length}
      </Text>
    );
  };
  return (
    <View style={styles.trainingBravoPage}>
      <View style={styles.header}>
        {program && renderProgramTitle()}
        <Text>Well done! You've just finished the training!</Text>
      </View>
      <Text style={styles.title}>Recap</Text>
      <Text style={styles.subtitle}>You worked on:</Text>
      {getGoals(training).map(goal => (
        <Text style={styles.goal} key={goal}>
          - {goal}
        </Text>
      ))}
      <View style={styles.footer}>
        <Text style={styles.incentive}>Get ready for the next training</Text>
        <Button onPress={finishTraining} text="Finish Training!" />
      </View>
    </View>
  );
};

const mapDispatchToProps = { completeTraining };

export default connect(null, mapDispatchToProps)(TrainingBravoPage);

const styles = StyleSheet.create({
  trainingBravoPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '500',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  goal: {
    fontSize: theme.FONT_SIZE_SMALL,
  },
  footer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: '3%',
    left: '3%',
    right: '3%',
    alignItems: 'center',
  },
  incentive: {
    marginBottom: 20,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
