import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

const getTrainingDuration = trainingDrills => {
  const durationList = trainingDrills.map(({ durationInMinutes }) => durationInMinutes);
  return durationList.reduce((a, b) => a + b, 0);
};

const getTrainingNbPlayers = trainingDrills => {
  const nbPlayersList = trainingDrills.map(({ nbPlayers }) => nbPlayers);
  return Math.max(...nbPlayersList);
};

const mapStateToProps = state => {
  return {
    trainings: state.trainings,
    allDrills: state.drills,
  };
};

export const TrainingListPage = props => {
  const { allDrills, trainings, navigation } = props;

  const [data] = useState(trainings);

  return (
    <View style={styles.trainingListPage}>
      <Text style={styles.counter}>{data.length} training sessions available</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.training}
            onPress={() => navigation.navigate('TrainingPage', { training: item })}
          >
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.contentContainer}>
              <Text style={styles.source}>{item.source}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.numberOfPlayers}>
                Duration: {getTrainingDuration(allDrills.filter(drill => item.drills.includes(drill.id)))} min -
                players: {getTrainingNbPlayers(allDrills.filter(drill => item.drills.includes(drill.id)))}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default connect(mapStateToProps)(TrainingListPage);

const styles = StyleSheet.create({
  trainingListPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  counter: {
    ...list.counter,
  },
  training: {
    ...list.item,
  },
  image: {
    ...list.image,
  },
  contentContainer: {
    ...list.contentContainer,
  },
  title: {
    ...list.title,
  },
  source: {
    ...list.source,
  },
  numberOfPlayers: {
    ...list.numberOfPlayers,
  },
});
