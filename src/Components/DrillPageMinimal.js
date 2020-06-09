import React, { useLayoutEffect, useCallback } from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import MinimalDrill from './drills/MinimalDrill';
import Button from './shared/Button';
import Progress from './ProgressBar2';
import { completeTraining } from '../Store/Actions/programAction';

export const DrillPageMinimal = props => {
  const { route, navigation, completeTraining } = props;
  const { drill, training, program } = route.params;

  const currentDrillIndex = training.drills.findIndex(({ id }) => id === drill.id);
  if (currentDrillIndex === -1) navigation.navigate('TrainingPage', { training });
  const isLastTraining = currentDrillIndex === training.drills.length - 1;

  const goToFullDrill = useCallback(() => {
    navigation.navigate('DrillPage', { drill });
  }, [navigation, drill]);

  const goToNextDrill = useCallback(() => {
    const nextDrill = training.drills[currentDrillIndex + 1];
    navigation.navigate('DrillPageMinimal', { drill: nextDrill, training, program });
  }, [training, currentDrillIndex, navigation, program]);

  const finishTraining = useCallback(() => {
    if (program) {
      completeTraining({ training, program });
      navigation.navigate('ProgramListPage', { program });
    } else {
      navigation.navigate('TrainingListPage');
    }
  }, [training, navigation, program, completeTraining]);

  useLayoutEffect(() => {
    const onProgressDotPress = idx => {
      navigation.navigate('DrillPageMinimal', { training, drill: training.drills[idx] });
    };

    const headerTitle = () => (
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>
          {I18n.t('drillPageMinimal.headerTitle', { trainingTitle: training.title })}
        </Text>
        <Progress total={training.drills.length} current={currentDrillIndex + 1} onDotPress={onProgressDotPress} />
      </View>
    );
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: { height: 100 },
      headerTitle,
    });
  }, [navigation, currentDrillIndex, training]);

  return (
    <ScrollView style={styles.drillPage} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{drill.title}</Text>
        <View style={styles.btnMoreContainer}>
          <Button
            onPress={goToFullDrill}
            text={I18n.t('drillPageMinimal.details')}
            buttonLight="true"
            style={styles.smallerBtn}
          />
        </View>
      </View>

      <MinimalDrill style={styles.illustration} drill={drill} />
      <View style={styles.footer}>
        {isLastTraining ? (
          <Button onPress={finishTraining} text={I18n.t('drillPageMinimal.finish')} />
        ) : (
          <Button onPress={goToNextDrill} text={I18n.t('drillPageMinimal.next')} />
        )}
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = { completeTraining };

export default connect(null, mapDispatchToProps)(DrillPageMinimal);

const styles = StyleSheet.create({
  drillPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
  },
  headerTitle: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  smallerBtn: {
    fontSize: theme.FONT_SIZE_SMALL,
    width: 'auto',
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
    width: '100%',
  },
  illustration: {
    flexBasis: '50%',
    flexGrow: 1,
    flexShrink: 0,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  titleContainer: {
    flexBasis: 60,
    flexShrink: 1,
    flexGrow: 0,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMoreContainer: {
    flexBasis: 50,
    flexShrink: 1,
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
