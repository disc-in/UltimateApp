import React, { useLayoutEffect, useCallback } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { completeTraining } from '../Store/Actions/programAction';

import theme from '../styles/theme.style';
import HeaderButton from './shared/HeaderButton';
import MinimalDrill from './shared/MinimalDrill';
import ButtonLight from './shared/ButtonLight';
import Progress from './ProgressBar2';

export const DrillPageMinimal = props => {
  const { route, navigation } = props;
  const { drill, training, program } = route.params;

  const currentDrillIndex = training.drills.findIndex(({ id }) => id === drill.id);
  if (currentDrillIndex === -1) navigation.navigate('TrainingPage', { training });

  const goToFullDrill = useCallback(() => {
    navigation.navigate('DrillPage', { drill });
  }, [navigation, drill]);

  const goToNextDrill = useCallback(() => {
    if (currentDrillIndex === training.drills.length - 1) {
      props.completeTraining({ training, program });
      navigation.navigate('TrainingPage', { training });
    } else {
      const nextDrill = training.drills[currentDrillIndex + 1];
      navigation.navigate('DrillPageMinimal', { drill: nextDrill, training, program });
    }
  }, [training, currentDrillIndex, navigation, program, props]);

  useLayoutEffect(() => {
    const onProgressDotPress = idx => {
      navigation.navigate('DrillPageMinimal', { training, drill: training.drills[idx] });
    };
    const headerRight = () => <HeaderButton onPress={goToNextDrill} />;

    const headerTitle = () => (
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>{training.title + ' Drills'}</Text>
        <Progress total={training.drills.length} current={currentDrillIndex + 1} onDotPress={onProgressDotPress} />
      </View>
    );
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: { height: 100 },
      headerTitle,
      headerRight,
    });
  }, [navigation, goToNextDrill, currentDrillIndex, training]);

  return (
    <View style={styles.drillPage}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{drill.title}</Text>
      </View>
      <MinimalDrill style={styles.illustration} drill={drill} />
      <View style={styles.btnMoreContainer}>
        <ButtonLight onPress={goToFullDrill} text="DETAILS" />
      </View>
    </View>
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
    margin: 10,
  },
  titleContainer: {
    flexBasis: 60,
    flexShrink: 1,
    flexGrow: 0,
    margin: 10,
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
    paddingVertical: 50,
  },
});
