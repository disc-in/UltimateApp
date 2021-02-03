import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { DrillTypes } from '../Fixtures/config';
import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import DrillList from './shared/DrillList';
import Button from './shared/Button';

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
  displayedDrills.sort((a, b) => a[sortingProperty] - b[sortingProperty]);

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
        <Button
          onPress={openFilters}
          icon="filter"
          text={I18n.t('drillListPage.filter')}
          testID="filterButton"
          small
          light={!filterIsOn}
        />
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
    paddingRight: 10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  filtersArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  counter: {
    color: theme.COLOR_SECONDARY,
  },
});
