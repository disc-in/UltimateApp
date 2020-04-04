import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Filters from './Filters';

import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

export const DrillListPage = props => {
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
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  counter: {
    ...list.counter,
  },
  drill: {
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
