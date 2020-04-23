import React, { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Progress from './ProgressBar2';
import DrillAnimation from './DrillAnimation';

import iconCheckMark from '../Images/ic_check.png';

import theme from '../styles/theme.style';

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

export const DrillPageMinimal = props => {
  const { route, navigation, drills } = props;
  const { drill, training } = route.params;

  const totalDrills = training.drills.length;
  const currentDrill = training.drills.findIndex(id => id === drill.id);

  if (currentDrill === -1) navigation.navigate('TrainingPage', { training });

  const onProgressDotPress = idx => {
    const drill = drills.find(drill => drill.id === training.drills[idx]);
    navigation.navigate('DrillPageMinimal', { drill, training });
  };

  const goToFullDrill = () => {
    navigation.navigate('DrillPage', { drill });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              if (currentDrill === totalDrills - 1) {
                navigation.navigate('TrainingPage', { training });
              } else {
                const nextDrill = drills.find(drill => drill.id === training.drills[currentDrill + 1]);
                navigation.navigate('DrillPageMinimal', { drill: nextDrill, training });
              }
            }}
          >
            <Image style={styles.nextButtonImg} source={iconCheckMark} />
          </TouchableOpacity>
        );
      },
    });
  }, [drills, training, currentDrill, totalDrills, navigation]);

  return (
    <ScrollView style={styles.drillPage}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Drill {currentDrill + 1} - {drill.title}
        </Text>
        <Progress total={totalDrills} current={currentDrill + 1} onDotPress={onProgressDotPress} />
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>Goals</Text>
          <Text style={styles.descriptionText}>{drill.goals.join(', ')}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>Equipment</Text>
          <Text style={styles.descriptionText}>{drill.equipment}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{drill.description}</Text>
        </View>
      </View>
      <View style={styles.animation}>
        <DrillAnimation animation={drill.animation} video={drill.video} />
      </View>
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
  animation: {
    flex: 3,
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
  nextButton: {
    marginRight: 15,
  },
  nextButtonImg: {
    width: 30,
    height: 30,
  },
});
