import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import DrillList from './shared/DrillList';
import theme from '../styles/theme.style';

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

  const currentTrainingIndex = program.trainings.findIndex(programTraining => programTraining.id === training.id);

  const onNextPress = () =>
    navigation.navigate('TrainingPage', { training: program.trainings[currentTrainingIndex + 1], program });
  const onPrevPress = () =>
    navigation.navigate('TrainingPage', { training: program.trainings[currentTrainingIndex - 1], program });

  const onDrillPress = drill => navigation.navigate('DrillPageMinimal', { drill, training });
  const goToFirstDrill = () => navigation.navigate('DrillPageMinimal', { drill: training.drills[0], training });

  const isFirstTraining = currentTrainingIndex !== 0;
  const isLastTraining = currentTrainingIndex !== program.trainings.length - 1;

  return (
    <ScrollView style={styles.trainingPage} contentContainerStyle={styles.trainingPageContent}>
      <View style={styles.overview}>
        <View style={styles.titleArea}>
          {isFirstTraining && (
            <TouchableOpacity style={styles.btnPrevNext} onPress={onPrevPress}>
              <Text style={styles.btnPrevNextContent}>{'<'}</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.title}>Training session {currentTrainingIndex + 1}</Text>
          {isLastTraining && (
            <TouchableOpacity style={styles.btnPrevNext} onPress={onNextPress}>
              <Text style={styles.btnPrevNextContent}>{'>'}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.infos}>
          <View>
            <Text style={styles.infoTitle}>Players</Text>
            <Text style={styles.infoContent}>{getTrainingMinimalPlayersNumber(training)}+</Text>
          </View>
          <View>
            <Text style={styles.infoTitle}>Duration</Text>
            <Text style={styles.infoContent}>{getTrainingDuration(training)}+</Text>
          </View>
        </View>
        <Text style={styles.descriptionText}>{training.description}</Text>
      </View>
      <View style={styles.list}>
        <DrillList navigation={navigation} drillsToDisplay={training.drills} onDrillPress={onDrillPress} />
      </View>
      <TouchableOpacity style={styles.btnStartTraining} onPress={goToFirstDrill}>
        <Text style={styles.btnStartTrainingContent}>Start training</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TrainingPage;

const styles = StyleSheet.create({
  trainingPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  trainingPageContent: {
    paddingBottom: 20,
  },
  overview: {
    paddingLeft: 20,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
  },
  titleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrevNext: {
    color: theme.COLOR_PRIMARY,
    textAlign: 'center',
    padding: 10,
  },
  btnPrevNextContent: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  descriptionText: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  infoTitle: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  infoContent: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  list: {
    paddingLeft: 20,
  },
  btnStartTraining: {
    width: '80%',
    backgroundColor: theme.COLOR_PRIMARY,
    textAlign: 'center',
    padding: 20,
  },
  btnStartTrainingContent: {
    color: 'rgb(255, 255, 255)',
  },
});
