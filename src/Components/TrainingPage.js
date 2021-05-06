import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PagerView from '@react-native-community/viewpager';

import I18n from '../utils/i18n';
import { DrillTypes } from '../Fixtures/config';
import DrillList from './shared/DrillList';
import Button from './shared/Button';
import theme from '../styles/theme.style';
import { convertMinsToTime } from '../utils/time';

export function getTrainingDuration(training) {
  return training.drills.reduce((total, drill) => total + drill.durationInMinutes, 0);
}

export function getTrainingMinimalPlayersNumber(training) {
  const minimalPlayersNumberList = training.drills.map(({ minimalPlayersNumber }) => minimalPlayersNumber);
  return Math.max(...minimalPlayersNumberList);
}

const TrainingPage = (props) => {
  const { navigation, route } = props;
  const { training, program } = route.params;
  const isProgramFrisbee = program.type === DrillTypes.FRISBEE;

  const pagerRef = useRef(null);
  const initialIndex = program.trainings.findIndex((item) => item.id === training.id);

  const programNavigation = (training, index) => {
    const isFirstTraining = program ? index === 0 : true;
    const isLastTraining = program ? index === program.trainings.length - 1 : true;

    const onNextPress = () => {
      if (!isLastTraining) {
        pagerRef.current.setPage(index + 1);
      }
    };
    const onPrevPress = () => {
      if (!isFirstTraining) {
        pagerRef.current.setPage(index - 1);
      }
    };

    return (
      <View style={styles.programNavigation}>
        {!isFirstTraining && (
          <TouchableOpacity style={styles.btnPrevNext} onPress={onPrevPress} testID={`goToPrev${index}`}>
            <MaterialCommunityIcons name="chevron-left" style={styles.navChevron} />
          </TouchableOpacity>
        )}
        <View style={styles.programInfo}>
          <Text numberOfLines={1} style={styles.title}>
            {training.title}
          </Text>
          {program.trainings.length > 1 && (
            <Text style={styles.subtitle}>
              {' '}
              ({index + 1}/{program.trainings.length}){' '}
            </Text>
          )}
        </View>
        {!isLastTraining && (
          <TouchableOpacity
            style={[styles.btnPrevNext, styles.btnNext]}
            onPress={onNextPress}
            testID={`goToNext${index}`}
          >
            <MaterialCommunityIcons name="chevron-right" style={styles.navChevron} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderHeader = (training, index) => (
    <View style={styles.header}>
      {programNavigation(training, index)}
      {isProgramFrisbee && (
        <View style={styles.infos}>
          <View style={styles.info}>
            <MaterialCommunityIcons name="account-multiple" color={theme.COLOR_PRIMARY} size={22} />
            <Text style={styles.infoValue}>{getTrainingMinimalPlayersNumber(training)}+</Text>
          </View>
          <View style={styles.info}>
            <MaterialCommunityIcons name="clock-outline" color={theme.COLOR_PRIMARY} size={22} />
            <Text style={styles.infoValue}>{convertMinsToTime(getTrainingDuration(training))}</Text>
          </View>
        </View>
      )}
      <Text style={styles.descriptionText}>{training.description}</Text>
    </View>
  );

  const renderTraining = (training, index) => {
    const onDrillPress = (drill) => {
      if (isProgramFrisbee) {
        navigation.navigate('DrillPageMinimal', { drill, training, program });
      } else {
        navigation.navigate('DrillPage', { id: drill.id });
      }
    };

    const goToFirstDrill = () =>
      navigation.navigate('DrillPageMinimal', { drill: training.drills[0], training, program });

    return (
      <View key={index}>
        <DrillList
          ListHeaderComponent={renderHeader(training, index)}
          ListFooterComponent={<View style={{ paddingBottom: 30 }} />}
          ItemComponentStyle={styles.list}
          navigation={navigation}
          drillsToDisplay={training.drills}
          onDrillPress={onDrillPress}
        />
        <View style={styles.footer}>
          {isProgramFrisbee && (
            <Button onPress={goToFirstDrill} text={I18n.t('trainingPage.start')} testID={`start${index}`} />
          )}
        </View>
      </View>
    );
  };

  return (
    <PagerView style={styles.trainingPage} ref={pagerRef} initialPage={initialIndex}>
      {program.trainings.map(renderTraining)}
    </PagerView>
  );
};

export default TrainingPage;

const styles = StyleSheet.create({
  trainingPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
    flex: 1,
  },
  header: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
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
  programInfo: {
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrevNext: {
    position: 'absolute',
    left: 0,
  },
  btnNext: {
    left: 'auto',
    right: 0,
  },
  navChevron: {
    fontSize: 42,
    color: theme.COLOR_PRIMARY,
  },
  descriptionText: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  info: {
    alignItems: 'center',
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
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    width: '100%',
    alignItems: 'center',
  },
});
