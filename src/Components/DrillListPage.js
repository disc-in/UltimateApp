import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';
import Filters from './Filters';
import { DrillTypes } from '../Fixtures';

const mapStateToProps = state => {
  return {
    drills: state.drills,
    favoritesDrill: state.favoritesDrill,
  };
};

export const DrillListPage = props => {
  const { navigation } = props;
  const type = props.route.params.type;
  const drills = props.drills.filter(drill => drill.type === type);

  const [data, setData] = useState(drills);
  const [displayFilters, setDisplayFilters] = useState(false);

  const imageMainData = type === DrillTypes.TECHNICAL ? 'nbPlayers' : 'durationInMinutes';
  const imageMainDataLegend = type === DrillTypes.TECHNICAL ? 'players' : 'min.';

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
              <ImageBackground source={{ uri: item.image }} style={styles.image} imageStyle={styles.imageOpacity}>
                <Text style={{ ...styles.imageText, ...styles.imageTextMain }}>{item[imageMainData]}+</Text>
                <Text style={styles.imageText}>{imageMainDataLegend}</Text>
              </ImageBackground>
              <View style={styles.contentContainer}>
                <Text style={styles.source}>{item.source}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.numberOfPlayers}>{item.goals.join(', ')}</Text>
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
    color: theme.COLOR_SECONDARY,
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
    padding: 10,
    backgroundColor: 'rgb(0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOpacity: {
    borderRadius: 5,
    opacity: 0.5,
  },
  imageText: {
    textAlign: 'center',
    color: theme.COLOR_SECONDARY_LIGHT,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  imageTextMain: {
    fontSize: theme.FONT_SIZE_LARGE,
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
