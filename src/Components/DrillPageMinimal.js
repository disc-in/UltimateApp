import React, { useLayoutEffect, useCallback } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Progress from './ProgressBar2';

import HeaderButton from './shared/HeaderButton';

import theme from '../styles/theme.style';
import { MinimalDrill } from './shared/MinimalDrill';

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

export const DrillPageMinimal = props => {
  const { route, navigation, drills } = props;
  const { drill, training } = route.params;

  const totalDrills = training.drills.length;
  const currentDrillIndex = training.drills.findIndex(id => id === drill.id);

  if (currentDrillIndex === -1) navigation.navigate('TrainingPage', { training });

  const onProgressDotPress = idx => {
    const drill = drills.find(drill => drill.id === training.drills[idx]);
    navigation.navigate('DrillPageMinimal', { drill, training });
  };

  const goToFullDrill = () => {
    navigation.navigate('DrillPage', { drill });
  };

  const onHeaderCheckPress = useCallback(() => {
    if (currentDrillIndex === totalDrills - 1) {
      navigation.navigate('TrainingPage', { training });
    } else {
      const nextDrill = drills.find(drill => drill.id === training.drills[currentDrillIndex + 1]);
      navigation.navigate('DrillPageMinimal', { drill: nextDrill, training });
    }
  }, [training, currentDrillIndex, drills, navigation, totalDrills]);

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
        <TouchableOpacity style={styles.btnMore} onPress={goToFullDrill}>
          <Text style={styles.btnMoreContent}>More details on this drill</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default connect(mapStateToProps)(DrillPageMinimal);

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
  },
  btnMore: {
    width: '80%',
    backgroundColor: theme.COLOR_PRIMARY,
    textAlign: 'center',
    padding: 20,
  },
  btnMoreContent: {
    color: 'rgb(255, 255, 255)',
  },
});