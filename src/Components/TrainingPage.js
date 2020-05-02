import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import DrillList from './shared/DrillList';
import Button from './shared/Button';
import theme from '../styles/theme.style';
import iconPlayers from '../../assets/ic_players.png';
import iconClock from '../../assets/ic_clock.png';

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
          <View style={styles.info}>
            <Image style={styles.infoIcon} source={iconPlayers} />
            <Text style={styles.infoValue}>{getTrainingMinimalPlayersNumber(training)}+</Text>
            <Text style={styles.infoUnit}>players</Text>
          </View>
          <View style={styles.info}>
            <Image style={styles.infoIcon} source={iconClock} />
            <Text style={styles.infoValue}>{getTrainingDuration(training)}+</Text>
            <Text style={styles.infoUnit}>minutes</Text>
          </View>
        </View>
        <Text style={styles.descriptionText}>{training.description}</Text>
      </View>
      <View style={styles.list}>
        <DrillList navigation={navigation} drillsToDisplay={training.drills} onDrillPress={onDrillPress} />
      </View>
      <Button onPress={goToFirstDrill} text="Start training" />
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
    paddingBottom: 50,
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
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
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
  info: {
    alignItems: 'center',
  },
  infoIcon: {
    width: 20,
    height: 20,
  },
  infoValue: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  infoUnit: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  list: {
    paddingLeft: 20,
  },
});
