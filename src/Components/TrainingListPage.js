import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';

const getTrainingDuration = trainingDrills => {
  const durationList = trainingDrills.map(({ durationInMinutes }) => durationInMinutes);
  const totalDurationInMinutes = durationList.reduce((a, b) => a + b, 0);
  return totalDurationInMinutes;
};

const getTrainingNbPlayers = trainingDrills => {
  const nbPlayersList = trainingDrills.map(({ nbPlayers }) => nbPlayers);
  const totalNbPlayers = Math.max(...nbPlayersList);
  return totalNbPlayers;
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
    color: theme.COLOR_SECONDARY,
    marginBottom: 20,
  },
  training: {
    height: 80,
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  contentContainer: {
    padding: 5,
    paddingBottom: 10,
  },
  title: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
    flexWrap: 'wrap',
  },
  source: {
    flex: 2,
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  numberOfPlayers: {
    flex: 2,
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
});
