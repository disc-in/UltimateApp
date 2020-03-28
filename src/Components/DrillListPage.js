import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Filters from './Filters';
import filterButtonImage from '../../assets/filter.png';

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

const DrillListPage = props => {
  const { navigation } = props;
  const type = props.route.params.type;
  const drills = props.drills.filter(drill => drill.type === type);

  const [displayedDrills, setDisplayedDrills] = useState(drills);
  const [isDisplayingFilters, setIsDisplayingFilters] = useState(false);

  return (
    <View style={styles.drillListPage}>
      <Text style={styles.counter}>{displayedDrills.length} drills available</Text>
      {isDisplayingFilters ? (
        <Filters
          onConfirm={() => setIsDisplayingFilters(false)}
          onFiltered={newDisplayedDrills => setDisplayedDrills(newDisplayedDrills)}
          initialData={drills}
        />
      ) : (
        <FlatList
          data={displayedDrills}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.drill} onPress={() => navigation.navigate('DrillPage', { drill: item })}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.contentContainer}>
                <Text style={styles.source}>{item.source}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.numberOfPlayers}>
                  Duration: {item.durationInMinutes} min - players: {item.minimalPlayersNumber}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      {!isDisplayingFilters && (
        <TouchableOpacity style={styles.filterButton} onPress={() => setIsDisplayingFilters(true)}>
          <Image source={filterButtonImage} style={styles.filterButtonImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default connect(mapStateToProps)(DrillListPage);

const styles = StyleSheet.create({
  drillListPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
    height: '100%',
  },
  counter: {
    color: '#767676',
    marginBottom: 20,
  },
  drill: {
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
    fontSize: 20,
    flexWrap: 'wrap',
  },
  source: {
    flex: 2,
    color: '#A6A6A6',
  },
  numberOfPlayers: {
    flex: 2,
    color: '#AFAFAF',
    fontSize: 14,
  },
  filterButton: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: 100,
    height: 100,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  filterButtonImage: {
    width: '100%',
    height: '100%',
  },
});
