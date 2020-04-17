import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import * as list from '../styles/list.style';
import { DrillTypes } from '../Fixtures';

const DrillList = props => {
  const drillsToDisplay = props.drillsToDisplay;
  const navigation = props.navigation;

  const renderDrill = ({ item }) => {
    const { title, type, source, image, goals } = item;

    const imageMainData = type === DrillTypes.TECHNICAL ? 'minimalPlayersNumber' : 'durationInMinutes';
    const imageMainDataLegend = type === DrillTypes.TECHNICAL ? 'players' : 'min.';
    return (
      <TouchableOpacity style={list.item} onPress={() => navigation.navigate('DrillPage', { drill: item })}>
        <ImageBackground source={{ uri: image }} style={list.image} imageStyle={list.imageOpacity}>
          <Text style={{ ...list.imageText, ...list.imageTextMain }}>{item[imageMainData]}+</Text>
          <Text style={list.imageText}>{imageMainDataLegend}</Text>
        </ImageBackground>
        <View style={list.contentContainer}>
          <Text style={list.source}>{source}</Text>
          <Text style={list.title}>{title}</Text>
          <Text style={list.numberOfPlayers}>{goals.join(', ')}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList data={drillsToDisplay} keyExtractor={item => item.id.toString()} renderItem={renderDrill} />
    </View>
  );
};

export default DrillList;
