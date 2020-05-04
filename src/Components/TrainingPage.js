import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import DrillList from './shared/DrillList';
import theme from '../styles/theme.style';

export function getGoals(training) {
  return Array.from(new Set(training.drills.reduce((acc, { goals }) => acc.concat(goals), [])));
}

export function getTrainingDuration(training) {
  return training.drills.reduce((total, drill) => total + drill.durationInMinutes, 0);
}

export function getTrainingMinimalPlayersNumber(training) {
  const minimalPlayersNumberList = training.drills.map(({ minimalPlayersNumber }) => minimalPlayersNumber);
  return Math.max(...minimalPlayersNumberList);
}

export const TrainingPage = props => {
  const { navigation, route } = props;
  const { training, program } = route.params;

  const onDrillPress = drill => navigation.navigate('DrillPageMinimal', { drill, training, program });

  return (
    <ScrollView style={styles.trainingPage} contentContainerStyle={styles.trainingPageContent}>
      <View style={styles.infos}>
        <Text style={styles.descriptionText}>{training.description}</Text>
        <View style={styles.infoDisplay}>
          <Text style={styles.infoTitle}>Players</Text>
          <Text style={styles.info}>{getTrainingMinimalPlayersNumber(training)}+</Text>
        </View>
        <View style={styles.infoDisplay}>
          <Text style={styles.infoTitle}>Duration</Text>
          <Text style={styles.info}>{getTrainingDuration(training)}+</Text>
        </View>
        <View style={styles.infoDisplay}>
          <Text style={styles.infoTitle}>Goals</Text>
          <Text style={styles.info}>{getGoals(training).join(', ')}</Text>
        </View>
      </View>
      <DrillList navigation={navigation} drillsToDisplay={training.drills} onDrillPress={onDrillPress} />
    </ScrollView>
  );
};

export default TrainingPage;

const styles = StyleSheet.create({
  trainingPage: {
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  trainingPageContent: {
    paddingVertical: 20,
  },
  infos: {
    marginBottom: 20,
  },
  descriptionText: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  infoDisplay: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  infoTitle: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    flexBasis: 1,
    flexGrow: 1,
  },
  info: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    flexBasis: 4,
    flexGrow: 4,
  },
});
