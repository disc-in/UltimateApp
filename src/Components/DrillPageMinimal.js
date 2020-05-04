import React, { useLayoutEffect, useCallback } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { completeTraining } from '../Store/Actions/programAction';

import theme from '../styles/theme.style';
import HeaderButton from './shared/HeaderButton';
import MinimalDrill from './shared/MinimalDrill';
import Button from './shared/Button';
import Progress from './ProgressBar2';

export const DrillPageMinimal = props => {
  const { route, navigation } = props;
  const { drill, training, program } = route.params;

  const totalDrills = training.drills.length;
  const currentDrillIndex = training.drills.findIndex(trainingDrill => trainingDrill.id === drill.id);

  if (currentDrillIndex === -1) navigation.navigate('TrainingPage', { training });

  const onProgressDotPress = idx => {
    const drill = training.drills[idx];
    navigation.navigate('DrillPageMinimal', { drill, training });
  };

  const goToFullDrill = () => {
    navigation.navigate('DrillPage', { drill });
  };

  const onHeaderCheckPress = useCallback(() => {
    if (currentDrillIndex === totalDrills - 1) {
      props.completeTraining({ training, program });
      navigation.navigate('TrainingPage', { training });
    } else {
      const nextDrill = training.drills[currentDrillIndex + 1];
      navigation.navigate('DrillPageMinimal', { drill: nextDrill, training, program });
    }
  }, [training, currentDrillIndex, navigation, totalDrills, program]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton onPress={onHeaderCheckPress} />,
    });
  }, [navigation, onHeaderCheckPress]);

  return (
    <ScrollView style={styles.drillPage}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Drill {currentDrillIndex + 1} - {drill.title}
        </Text>
        <Progress total={totalDrills} current={currentDrillIndex + 1} onDotPress={onProgressDotPress} />
      </View>
      <MinimalDrill drill={drill} />
      <View style={styles.btnMoreContainer}>
        <Button onPress={goToFullDrill} text="More details on this drill" />
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
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  titleContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    padding: 5,
    paddingLeft: 20,
    maxHeight: '20%',
  },
  descriptionItem: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  descriptionTitle: {
    flexGrow: 0,
    flexShrink: 0,
    width: '25%',
    fontWeight: 'bold',
    color: theme.COLOR_PRIMARY,
  },
  descriptionText: {
    flexGrow: 1,
    color: theme.COLOR_SECONDARY,
  },

  btnMoreContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
