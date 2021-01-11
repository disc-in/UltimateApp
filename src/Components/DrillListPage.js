import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DrillList from './shared/DrillList';
import { DrillTypes } from '../Fixtures/config';
import { Ionicons } from '@expo/vector-icons';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';

export const DrillListPage = (props) => {
  const { navigation, route, storeDrills } = props;
  const { type, currentFilters } = route.params;

  const storeDrillsForType = storeDrills.filter((drill) => drill.type === type);
  const displayedDrills = currentFilters?.displayedDrills || storeDrillsForType;

  let filterIsOn = false;
  if (
    currentFilters?.selectedGoals.length > 0 ||
    currentFilters?.selectedLevels.length > 0 ||
    currentFilters?.selectedFavorites ||
    currentFilters?.numberOfPlayers
  ) {
    filterIsOn = true;
  } else {
    filterIsOn = false;
  }

  const filterIsActivate = filterIsOn ? styles.colorLight : undefined;
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
      <View style={styles.flexContainer}>
        <View style={styles.centerVertical}>
          <Text style={styles.counter}>
            {I18n.t('drillListPage.availableDrills', { count: displayedDrills.length })}
          </Text>
        </View>
        {type === DrillTypes.FRISBEE && (
          <View style={styles.container}>
            <TouchableOpacity
              style={filterIsOn ? styles.buttonActivate : styles.button}
              onPress={openFilters}
              testID="filterButton"
            >
              <View style={styles.filterButton}>
                <Ionicons
                  name="md-funnel"
                  color={filterIsOn ? theme.COLOR_PRIMARY_LIGHT : theme.MAIN_COLOR}
                  size={16}
                />
                <Text style={[styles.text, filterIsActivate]}>{I18n.t('drillListPage.filter')}</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  button: {
    width: 85,
    height: 30,
    borderRadius: 2,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    borderColor: theme.MAIN_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  buttonActivate: {
    width: 85,
    height: 30,
    borderRadius: 2,
    backgroundColor: theme.MAIN_COLOR,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  text: {
    textAlign: 'center',
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  textActivate: {
    textAlign: 'center',
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  flexContainer: {
    flexDirection: 'row',
    paddingRight: 25,
    height: 30,
    marginBottom: 5,
  },
  container: {
    flex: 1,
  },
  centerVertical: {
    justifyContent: 'center',
  },
  filterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  counter: {
    color: theme.COLOR_SECONDARY,
    justifyContent: 'center',
  },
  colorLight: {
    color: theme.COLOR_PRIMARY_LIGHT,
  },
});
