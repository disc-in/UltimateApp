import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import * as list from '../styles/list.style';

const DrillList = props => {
  const drillsToDisplay = props.drillsToDisplay;
  const navigation = props.navigation;

  const imageMainData = type === DrillTypes.TECHNICAL ? 'nbPlayers' : 'durationInMinutes';
  const imageMainDataLegend = type === DrillTypes.TECHNICAL ? 'players' : 'min.';

  return (
    <View>
      <FlatList
        data={drillsToDisplay}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={list.item} onPress={() => navigation.navigate('DrillPage', { drill: item })}>
            <ImageBackground source={{ uri: item.image }} style={list.image} imageStyle={list.imageOpacity}>
              <Text style={{ ...list.imageText, ...list.imageTextMain }}>{item[imageMainData]}+</Text>
            </ImageBackground>
            <View style={list.contentContainer}>
              <Text style={list.source}>{item.source}</Text>
              <Text style={list.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DrillList;
