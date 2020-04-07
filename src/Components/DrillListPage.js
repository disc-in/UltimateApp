import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import filterButtonImage from '../../assets/filter.png';
import Filters from './Filters';
import { DrillTypes } from '../Fixtures';

import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

export const DrillListPage = props => {
  const { navigation } = props;
  const type = props.route.params.type;
  const drills = props.drills.filter(drill => drill.type === type);

  const [displayedDrills, setDisplayedDrills] = useState(drills);

  const imageMainData = type === DrillTypes.TECHNICAL ? 'minimalPlayersNumber' : 'durationInMinutes';
  const imageMainDataLegend = type === DrillTypes.TECHNICAL ? 'players' : 'min.';

  return (
    <View style={styles.drillListPage}>
      <Text style={list.counter}>{displayedDrills.length} drills available</Text>
      <FlatList
        data={displayedDrills}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={list.item} onPress={() => navigation.navigate('DrillPage', { drill: item })}>
            <ImageBackground source={{ uri: item.image }} style={list.image} imageStyle={list.imageOpacity}>
              <Text style={{ ...list.imageText, ...list.imageTextMain }}>{item[imageMainData]}+</Text>
              <Text style={list.imageText}>{imageMainDataLegend}</Text>
            </ImageBackground>
            <View style={list.contentContainer}>
              <Text style={list.source}>{item.source}</Text>
              <Text style={list.title}>{item.title}</Text>
              <Text style={list.numberOfPlayers}>{item.goals.join(', ')}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() =>
          navigation.navigate('Filters', {
            onFiltered: newDisplayedDrills => setDisplayedDrills(newDisplayedDrills),
            initialData: drills,
          })
        }
        testID="filterButton"
      >
        <Image source={filterButtonImage} style={styles.filterButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

export default connect(mapStateToProps)(DrillListPage);

const styles = StyleSheet.create({
  drillListPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
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
  filterButtonImage: {
    width: '100%',
    height: '100%',
  },
});
