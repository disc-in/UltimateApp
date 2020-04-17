import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import DrillList from './DrillList';
import theme from '../styles/theme.style';

export function getGoals(trainingDrills) {
  return Array.from(new Set(trainingDrills.map(({ goals }) => goals).flat()));
}

export function getTrainingDuration(trainingDrills) {
  const durationList = trainingDrills.map(({ durationInMinutes }) => durationInMinutes);
  return durationList.reduce((a, b) => a + b, 0);
}

export function getTrainingMinimalPlayersNumber(trainingDrills) {
  const minimalPlayersNumberList = trainingDrills.map(({ minimalPlayersNumber }) => minimalPlayersNumber);
  return Math.max(...minimalPlayersNumberList);
}

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

export class TrainingPage extends Component {
  render() {
    const { navigation } = this.props;
    const training = this.props.route.params.training;
    const drills = training.drills.map(drillId => this.props.drills.find(drill => drill.id === drillId));

    return (
      <View style={styles.trainingPage}>
        <Text style={styles.descriptionText}>{training.description}</Text>
        <View style={styles.infoDisplay}>
          <Text style={styles.info}>{getTrainingMinimalPlayersNumber(drills)}+ players</Text>
        </View>
        <View style={styles.infoDisplay}>
          <Text style={styles.infoTitle}>Goals:</Text>
          <Text style={styles.info}>{getGoals(drills).join(', ')}</Text>
        </View>
        <DrillList navigation={navigation} drillsToDisplay={drills} />
      </View>
    );
  }
}

export default connect(mapStateToProps)(TrainingPage);

const styles = StyleSheet.create({
  trainingPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  descriptionText: {
    padding: 20,
    color: theme.COLOR_SECONDARY,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  infoDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  infoTitle: {
    color: theme.COLOR_PRIMARY,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  info: {
    color: theme.COLOR_SECONDARY,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
