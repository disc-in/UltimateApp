import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';

const mapStateToProps = state => {
  return {
    trainingss: state.trainingss,
  };
};

export const TrainingListPage = props => {
  const { trainings, navigation } = props;

  const [data] = useState(trainings);

  return (
    <View style={styles.trainingListPage}>
      <Text style={styles.counter}>{data.length} trainings available</Text>
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
                Duration: {item.durationInMinutes} min - players: {item.nbPlayers}
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
  filterButton: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  filterButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
