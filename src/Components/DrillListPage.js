import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Filters from './Filters';

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

const DrillListPage = props => {
  const { navigation } = props;
  const type = props.route.params.type;
  const drills = props.drills.filter(drill => drill.type === type);

  const [data, setData] = useState(drills);
  const [displayFilters, setDisplayFilters] = useState(false);

  return (
    <View style={styles.drillListPage}>
      <Text style={styles.counter}>{data.length} drills available</Text>
      {displayFilters ? (
        <Filters
          onConfirm={() => setDisplayFilters(false)}
          onFiltered={drills => setData(drills)}
          initialData={drills}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.drill} onPress={() => navigation.navigate('DrillPage', { drill: item })}>
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
      )}
      {!displayFilters && (
        <TouchableOpacity style={styles.filterButton} onPress={() => setDisplayFilters(true)}>
          <Text style={styles.filterButtonText}>Filter</Text>
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
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
