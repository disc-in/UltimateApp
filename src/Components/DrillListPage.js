import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DrillList from './shared/DrillList';
import { DrillTypes } from '../Fixtures/config';
import { Ionicons } from '@expo/vector-icons';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

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

  if (type === DrillTypes.FRISBEE) {
    return (
      <View style={styles.drillListPage}>
        <View style={styles.marginBottom}>
          <View style={styles.flexContainer}>
            <View style={styles.centerVertical}>
              <Text style={list.counter}>
                {I18n.t('drillListPage.availableDrills', { count: displayedDrills.length })}
              </Text>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={openFilters} testID="filterButton">
                <View style={styles.filterButton}>
                  <View style={styles.filterIcon}>
                    <Ionicons name="md-funnel" color={theme.COLOR_PRIMARY_LIGHT} size={20} />
                  </View>
                  <Text style={styles.text}>{I18n.t('drillListPage.filter')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <DrillList navigation={navigation} drillsToDisplay={displayedDrills} />
      </View>
    );
  } else {
    return (
      <View style={styles.drillListPage}>
        <View style={styles.marginBottom}>
          <View style={styles.flexContainer}>
            <View style={styles.centerVertical}>
              <Text style={list.counter}>
                {I18n.t('drillListPage.availableDrills', { count: displayedDrills.length })}
              </Text>
            </View>
          </View>
        </View>
        <DrillList navigation={navigation} drillsToDisplay={displayedDrills} />
      </View>
    );
  }
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
    width: 100,
    height: 30,
    borderRadius: 3,
    backgroundColor: theme.MAIN_COLOR,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  text: {
    textAlign: 'center',
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  marginBottom: {
    marginBottom: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    paddingRight: 25,
    height: 30,
  },
  container: {
    flex: 1,
  },
  centerVertical: {
    justifyContent: 'center',
  },
  filterButton: {
    textAlign: 'center',
    paddingLeft: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
