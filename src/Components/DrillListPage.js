import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { DrillTypes } from '../Fixtures/config';
import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import DrillList from './shared/DrillList';

export const DrillListPage = (props) => {
  const { navigation, route, storeDrills } = props;
  const { type, currentFilters } = route.params;

  const storeDrillsForType = storeDrills.filter((drill) => drill.type === type);
  const displayedDrills = currentFilters?.displayedDrills || storeDrillsForType;

  const filterIsOn =
    currentFilters?.selectedGoals.length > 0 ||
    currentFilters?.selectedLevels.length > 0 ||
    currentFilters?.selectedFavorites ||
    currentFilters?.numberOfPlayers;

  const sortingProperty = type === DrillTypes.FRISBEE ? 'minimalPlayersNumber' : 'durationInMinutes';
  const sortedDisplayedDrills = displayedDrills.sort((a, b) => a[sortingProperty] - b[sortingProperty]);

  const openFilters = () => {
    const filtersPage = route.params.type === DrillTypes.FRISBEE ? 'FrisbeeFilters' : 'FitnessFilters';
    navigation.navigate(filtersPage, {
      initialData: storeDrillsForType,
      previousScreen: route.name,
      previousType: type,
      filters: currentFilters,
    });
  };

  return (
    <View style={styles.drillListPage}>
      <View style={styles.filtersArea}>
        <Text style={styles.counter}>{I18n.t('drillListPage.availableDrills', { count: displayedDrills.length })}</Text>
        {type === DrillTypes.FRISBEE && (
          <TouchableOpacity
            style={[styles.filterButton, filterIsOn ? styles.filterButtonActivated : '']}
            onPress={openFilters}
            testID="filterButton"
          >
            <Ionicons name="md-funnel" color={filterIsOn ? theme.COLOR_PRIMARY_LIGHT : theme.MAIN_COLOR} size={16} />
            <Text style={[styles.filterText, filterIsOn ? styles.filterTextActivated : '']}>
              {I18n.t('drillListPage.filter')}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <DrillList navigation={navigation} drillsToDisplay={displayedDrills} />
    </View>
  );
};

const mapStateToProps = (state) => {
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
  filtersArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 25,
    height: 30,
    marginBottom: 5,
  },
  counter: {
    color: theme.COLOR_SECONDARY,
  },
  filterButton: {
    width: 85,
    height: 30,
    borderRadius: 5,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    borderColor: theme.MAIN_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterButtonActivated: {
    backgroundColor: theme.MAIN_COLOR,
  },
  filterText: {
    textAlign: 'center',
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  filterTextActivated: {
    color: theme.COLOR_PRIMARY_LIGHT,
  },
});
