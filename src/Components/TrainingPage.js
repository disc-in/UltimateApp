import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import DrillList from './shared/DrillList';
import Button from './shared/Button';
import theme from '../styles/theme.style';
import { swipeConfig } from '../styles/config';
import iconPlayers from '../../assets/ic_players.png';
import iconClock from '../../assets/ic_clock.png';
import { convertMinsToTime } from '../utils/time';

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
  const goToFirstDrill = () =>
    navigation.navigate('DrillPageMinimal', { drill: training.drills[0], training, program });

  const currentTrainingIndex = program
    ? program.trainings.findIndex(programTraining => programTraining.id === training.id)
    : null;
  const isFirstTraining = program ? currentTrainingIndex === 0 : true;
  const isLastTraining = program ? currentTrainingIndex === program.trainings.length - 1 : true;

  const onNextPress = () => {
    if (!isLastTraining) {
      navigation.navigate('TrainingPage', { training: program.trainings[currentTrainingIndex + 1], program });
    }
  };
  const onPrevPress = () => {
    if (!isFirstTraining) {
      navigation.navigate('TrainingPage', { training: program.trainings[currentTrainingIndex - 1], program });
    }
  };
  const programNavigation = () => {
    return (
      <View style={styles.programNavigation}>
        {!isFirstTraining && (
          <TouchableOpacity style={styles.btnPrevNext} onPress={onPrevPress}>
            <Text style={styles.btnPrevNextContent}>{'<'}</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{training.title}</Text>
        {program.trainings.length > 1 && (
          <Text style={styles.subtitle}>
            {' '}
            ({currentTrainingIndex + 1}/{program.trainings.length}){' '}
          </Text>
        )}
        {!isLastTraining && (
          <TouchableOpacity style={styles.btnPrevNext} onPress={onNextPress}>
            <Text style={styles.btnPrevNextContent}>{'>'}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const header = () => (
    <View style={styles.overview}>
      {program && programNavigation()}
      <View style={styles.infos}>
        <View style={styles.info}>
          <Image style={styles.infoIcon} source={iconPlayers} />
          <Text style={styles.infoValue}>{getTrainingMinimalPlayersNumber(training)}+</Text>
        </View>
        <View style={styles.info}>
          <Image style={styles.infoIcon} source={iconClock} />
          <Text style={styles.infoValue}>{convertMinsToTime(getTrainingDuration(training))}</Text>
        </View>
      </View>
      <Text style={styles.descriptionText}>{training.description}</Text>
    </View>
  );

  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipeLeft={onNextPress} onSwipeRight={onPrevPress} config={swipeConfig}>
      <DrillList
        style={styles.trainingPage}
        ListHeaderComponent={header}
        ListFooterComponent={<View style={{ paddingBottom: 30 }} />}
        ItemComponentStyle={styles.list}
        navigation={navigation}
        drillsToDisplay={training.drills}
        onDrillPress={onDrillPress}
      />
      <View style={styles.footer}>
        <Button onPress={goToFirstDrill} text="Start training" />
      </View>
    </GestureRecognizer>
  );
};

export default TrainingPage;

const styles = StyleSheet.create({
  trainingPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
    flex: 1,
  },
  trainingPageContent: {
    paddingBottom: 50,
  },
  overview: {
    paddingLeft: 20,
    paddingBottom: 20,
    marginVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
  },
  programNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  btnPrevNext: {
    padding: 10,
  },
  btnPrevNextContent: {
    textAlign: 'center',
    color: theme.COLOR_PRIMARY,
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
  list: {
    paddingLeft: 20,
  },
  footer: {
    position: 'absolute',
    paddingBottom: 20,
    paddingTop: 5,
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
});
