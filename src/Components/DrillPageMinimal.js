import React, { useLayoutEffect, useCallback } from 'react';
import { Platform, StyleSheet, View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';

import Description from './drills/Description';
import FitnessDrillIllustration from './drills/FitnessDrillIllustration';
import FrisbeeDrillIllustration from './drills/FrisbeeDrillIllustration';
import ButtonNext from './shared/Button';
import ProgressBar from './drills/ProgressBar';
import { completeTraining } from '../Store/Actions/programAction';
import { DrillTypes } from '../Fixtures/config';

export const DrillPageMinimal = (props) => {
  const { route, navigation, completeTraining } = props;
  const { drill, training, program } = route.params;

  const currentDrillIndex = training.drills.findIndex(({ id }) => id === drill.id);
  if (currentDrillIndex === -1) navigation.navigate('TrainingPage', { training });
  const isLastTraining = currentDrillIndex === training.drills.length - 1;

  const goToNextDrill = useCallback(() => {
    const nextDrill = training.drills[currentDrillIndex + 1];
    navigation.navigate('DrillPageMinimal', { drill: nextDrill, training, program });
  }, [training, currentDrillIndex, navigation, program]);

  const finishTraining = useCallback(() => {
    completeTraining({ training, program });
    navigation.navigate('ProgramListPage', { activeProgram: program.id });
  }, [training, navigation, program, completeTraining]);

  useLayoutEffect(() => {
    const onProgressDotPress = (index) => {
      navigation.navigate('DrillPageMinimal', { training, drill: training.drills[index] });
    };

    const headerTitle = () => (
      <View style={styles.headerTitle}>
        <Text numberOfLines={1} style={styles.headerTitleText}>
          {drill.title}
        </Text>
        <View>
          <ProgressBar total={training.drills.length} current={currentDrillIndex + 1} onDotPress={onProgressDotPress} />
        </View>
      </View>
    );

    navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: { height: 100 },
      headerTitle,
    });
  }, [navigation, currentDrillIndex, training]);

  return (
    <>
      <View style={styles.drillPage}>
        <ScrollView style={styles.illustration}>
          {drill.type === DrillTypes.FRISBEE && <FrisbeeDrillIllustration drill={drill} />}
          {drill.type === DrillTypes.FITNESS && <FitnessDrillIllustration drill={drill} />}
          <Description drill={drill} minimal />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        {isLastTraining ? (
          <ButtonNext onPress={finishTraining} text={I18n.t('drillPageMinimal.finish')} />
        ) : (
          <ButtonNext onPress={goToNextDrill} text={I18n.t('drillPageMinimal.next')} />
        )}
      </View>
    </>
  );
};

const mapDispatchToProps = { completeTraining };

export default connect(null, mapDispatchToProps)(DrillPageMinimal);

const styles = StyleSheet.create({
  drillPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
    marginBottom: 50,
  },
  headerTitle: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  headerTitleText: {
    ...Platform.select({
      ios: {
        fontSize: 17,
        fontWeight: '600',
      },
      android: {
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      default: {
        fontSize: 18,
        fontWeight: '500',
      },
    }),
    marginLeft: '10%',
    marginTop: 15,
    marginBottom: 5,
    width: '80%',
  },
  titleContainer: {
    flexShrink: 1,
    flexGrow: 0,
    marginVertical: 10,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 46, // Matches the details icon width
  },
  illustration: {
    flexGrow: 1,
    flexShrink: 0,
  },
  footer: {
    position: 'absolute',
    paddingBottom: 10,
    paddingTop: 5,
    bottom: 0,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    width: '100%',
    alignItems: 'center',
  },
});
