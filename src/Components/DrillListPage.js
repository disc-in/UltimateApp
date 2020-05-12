import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DrillList from './shared/DrillList';
import filterButtonImage from '../../assets/filter.png';
import { DrillTypes } from '../Fixtures';
import addButton from '../../assets/button_add.png';

import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

export const DrillListPage = props => {
  const { navigation, route, storeDrills } = props;
  const { type, filteredDrills } = route.params;

  const storeDrillsForType = storeDrills.filter(drill => drill.type === type);
  const displayedDrills = filteredDrills ? filteredDrills : storeDrillsForType;

  const displayAddButton = () => {
    const sourceImage = addButton;
    if (type === DrillTypes.FRISBEE) {
      return (
        <TouchableOpacity
          style={styles.addContainer}
          onPress={() => navigation.navigate('AnimationEditorPage')}
          testID="addButton"
        >
          <Image style={styles.addImage} source={sourceImage} />
        </TouchableOpacity>
      );
    } else {
      return <View />;
    }
  };

  useLayoutEffect(() =>
    navigation.setOptions({
      headerRight: () => displayAddButton(),
    }),
  );

  return (
    <View style={styles.drillListPage}>
      <Text style={list.counter}>{displayedDrills.length} drills available</Text>
      <DrillList navigation={navigation} drillsToDisplay={displayedDrills} />
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => {
          const filtersPage = props.route.params.type === DrillTypes.FRISBEE ? 'FrisbeeFilters' : 'FitnessFilters';
          navigation.navigate(filtersPage, {
            initialData: storeDrillsForType,
            previousScreen: route.name,
            previousType: type,
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
  addContainer: {
    marginRight: 20,
  },
  addImage: {
    width: 20,
    height: 20,
  },
});
