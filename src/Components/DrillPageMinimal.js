import React, { useLayoutEffect, useCallback } from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';

import theme from '../styles/theme.style';
import HeaderButton from './shared/HeaderButton';
import MinimalDrill from './shared/MinimalDrill';
import Button from './shared/Button';
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
      navigation.navigate('TrainingBravoPage', { training, program });
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
    <ScrollView style={styles.drillPage}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{drill.title}</Text>
      </View>

      <MinimalDrill style={styles.illustration} drill={drill} />
      <View style={styles.btnMoreContainer}>
        <Button onPress={goToFullDrill} text="DETAILS" buttonLight="true" />
      </View>
    </ScrollView>
  );
};

export default DrillPageMinimal;

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
    paddingVertical: 20,
  },
});
