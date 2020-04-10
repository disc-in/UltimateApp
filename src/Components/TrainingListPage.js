import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

const getTrainingDuration = trainingDrills => {
  const durationList = trainingDrills.map(({ durationInMinutes }) => durationInMinutes);
  return durationList.reduce((a, b) => a + b, 0);
};

const getTrainingMinimalPlayersNumber = trainingDrills => {
  const minimalPlayersNumberList = trainingDrills.map(({ minimalPlayersNumber }) => minimalPlayersNumber);
  return Math.max(...minimalPlayersNumberList);
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
      <Text style={list.counter}>{data.length} training sessions available</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={list.item} onPress={() => navigation.navigate('TrainingPage', { training: item })}>
            <ImageBackground source={{ uri: item.image }} style={list.image} imageStyle={list.imageOpacity}>
              <Text style={list.imageText}>
                {getTrainingDuration(allDrills.filter(drill => item.drills.includes(drill.id)))} min
              </Text>
              <Text style={list.imageText}>
                {getTrainingMinimalPlayersNumber(allDrills.filter(drill => item.drills.includes(drill.id)))}+ players
              </Text>
            </ImageBackground>
            <View style={list.contentContainer}>
              <Text style={list.source}>{item.source}</Text>
              <Text style={list.title}>{item.title}</Text>
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
});
