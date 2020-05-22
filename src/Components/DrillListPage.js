import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DrillList from './shared/DrillList';
import filterButtonImage from '../../assets/filter.png';
import { DrillTypes } from '../Fixtures/config';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

export const DrillListPage = props => {
  const { navigation, route, storeDrills } = props;
  const { type, filteredDrills } = route.params;

  const storeDrillsForType = storeDrills.filter(drill => drill.type === type);
  const displayedDrills = filteredDrills ? filteredDrills : storeDrillsForType;

  const sortingProperty = type === DrillTypes.FRISBEE ? 'minimalPlayersNumber' : 'durationInMinutes';
  const sortedDisplayedDrills = displayedDrills.sort((a, b) => a[sortingProperty] - b[sortingProperty]);
  return (
    <View style={styles.drillListPage}>
      <Text style={list.counter}>{I18n.t('drillListPage.availableDrills', { count: displayedDrills.length })}</Text>
      <DrillList navigation={navigation} drillsToDisplay={displayedDrills} />
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => {
          const filtersPage = props.route.params.type === DrillTypes.FRISBEE ? 'FrisbeeFilters' : 'FitnessFilters';
          navigation.navigate(filtersPage, {
            initialData: storeDrillsForType,
            previousScreen: route.name,
            previousType: type,
            filters: route.params.currentFilters,
          });
        }}
        testID="filterButton"
      >
        <Image source={filterButtonImage} style={styles.filterButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    storeDrills: state.drills,
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
    width: 60,
    height: 60,
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
