import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';

import { DrillTypes } from '../Fixtures/config';
import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import DrillList from '../Components/shared/DrillList';
import Button from '../Components/shared/Button';
import HeaderButton from '../Components/shared/HeaderButton';

export const DrillListPage = (props) => {
  const { navigation, route, storeDrills } = props;
  const { type, currentFilters } = route.params;

  const storeDrillsForType = storeDrills.filter((drill) => drill.type === type && drill.visibleInList);
  let displayedDrills = currentFilters?.displayedDrills || storeDrillsForType;

  const filterIsOn =
    currentFilters?.selectedGoals.length > 0 ||
    currentFilters?.selectedLevels.length > 0 ||
    currentFilters?.selectedFavorites ||
    currentFilters?.selectedIntensities ||
    currentFilters?.selectedEquipmentLabels ||
    currentFilters?.selectedSeasonTimings ||
    currentFilters?.durationInMinutes ||
    currentFilters?.numberOfPlayers;

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  if (searchText.length > 0) {
    displayedDrills = displayedDrills.filter((drill) => drill.title.search(new RegExp(searchText, 'gi')) !== -1);
  }

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

  useLayoutEffect(() => {
    if (route.params.type === DrillTypes.FRISBEE) {
      navigation.setOptions({
        headerRight: () => (
          <HeaderButton icon="plus" onPress={() => props.navigation.navigate('DrillEditorPage')} testID="plusButton" />
        ),
      });
    }
  });

  return (
    <View style={styles.drillListPage}>
      <View style={styles.filtersArea}>
        <Text style={styles.counter}>{I18n.t('drillListPage.availableDrills', { count: displayedDrills.length })}</Text>
        <View style={styles.filtersAreaActions}>
          <Button
            onPress={() => setIsSearchVisible(!isSearchVisible)}
            icon="search"
            testID="searchButton"
            small
            light
          />
          <Button onPress={openFilters} icon="filter" testID="filterButton" small light={!filterIsOn} />
        </View>
      </View>
      {isSearchVisible && (
        <Input
          autoFocus
          value={searchText}
          onChangeText={setSearchText}
          placeholder={I18n.t('drillListPage.searchPlaceholder')}
          rightIcon={{
            type: 'ionicon',
            name: 'close-circle',
            onPress: () => {
              setSearchText('');
              setIsSearchVisible(false);
            },
          }}
        />
      )}
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
  filtersAreaActions: {
    flexDirection: 'row',
    gap: 10,
  },
  counter: {
    color: theme.COLOR_SECONDARY,
  },
});
