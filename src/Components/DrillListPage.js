import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DrillList from './shared/DrillList';
import { DrillTypes } from '../Fixtures/config';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import * as list from '../styles/list.style';
import HeaderButton from './shared/HeaderButton';

export const DrillListPage = (props) => {
  const { navigation, route, storeDrills } = props;
  const { type, currentFilters } = route.params;

  const storeDrillsForType = storeDrills.filter((drill) => drill.type === type);
  const displayedDrills = currentFilters?.displayedDrills || storeDrillsForType;

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

  useLayoutEffect(() =>
    navigation.setOptions({
      headerRight: () => <HeaderButton icon="filter-outline" onPress={openFilters} testID="filterButton" />,
    }),
  ),
    [navigation, route.params.type];

  return (
    <View style={styles.drillListPage}>
      <Text style={list.counter}>{I18n.t('drillListPage.availableDrills', { count: displayedDrills.length })}</Text>
      <DrillList navigation={navigation} drillsToDisplay={displayedDrills} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    storeDrills: [...state.drills, ...state.customDrills],
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
});
