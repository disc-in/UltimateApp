import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import DrillList from './shared/DrillList';
import theme from '../styles/theme.style';

export function getGoals(trainingDrills) {
  return Array.from(new Set(trainingDrills.reduce((acc, { goals }) => acc.concat(goals), [])));
}

export function getTrainingDuration(trainingDrills) {
  return trainingDrills.reduce((total, drill) => total + drill.durationInMinutes, 0);
}

export function getTrainingMinimalPlayersNumber(trainingDrills) {
  const minimalPlayersNumberList = trainingDrills.map(({ minimalPlayersNumber }) => minimalPlayersNumber);
  return Math.max(...minimalPlayersNumberList);
}

export const TrainingPage = props => {
  const { navigation, route, drills } = props;
  const training = route.params.training;
  const trainingDrills = training.drills.map(drillId => drills.find(drill => drill.id === drillId));

  return (
    <ScrollView style={styles.trainingPage} contentContainerStyle={styles.trainingPageContent}>
      <View style={styles.infos}>
        <Text style={styles.descriptionText}>{training.description}</Text>
        <View style={styles.infoDisplay}>
          <Text style={styles.infoTitle}>Players</Text>
          <Text style={styles.info}>{getTrainingMinimalPlayersNumber(trainingDrills)}+</Text>
        </View>
        <View style={styles.infoDisplay}>
          <Text style={styles.infoTitle}>Duration</Text>
          <Text style={styles.info}>{getTrainingDuration(trainingDrills)}+</Text>
        </View>
        <View style={styles.infoDisplay}>
          <Text style={styles.infoTitle}>Goals</Text>
          <Text style={styles.info}>{getGoals(trainingDrills).join(', ')}</Text>
        </View>
      </View>
      <DrillList navigation={navigation} drillsToDisplay={trainingDrills} />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

export default connect(mapStateToProps)(TrainingPage);

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
