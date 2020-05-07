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
    navigation.navigate('ProgramsPage');
  };

  React.useEffect(() => {
    props.completeTraining({ training, program });
  }, []);

  const currentTrainingIndex = program.trainings.findIndex(item => item.id === training.id);
  return (
    <View style={styles.trainingBravoPage}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {program.title} - session {currentTrainingIndex + 1}/{program.trainings.length}
        </Text>
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
    flex: 1,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: '500',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    paddingHorizontal: 20,
  },
  goal: {
    fontSize: theme.FONT_SIZE_SMALL,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    bottom: 20,
    alignItems: 'center',
  },
  incentive: {
    marginBottom: 20,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
