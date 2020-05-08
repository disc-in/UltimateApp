import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import * as list from '../../styles/list.style';
import { DrillTypes } from '../../Fixtures';

const DrillList = props => {
  const { navigation, drillsToDisplay } = props;
  const onDrillPress = props.onDrillPress || (item => navigation.navigate('DrillPage', { drill: item }));

  const renderDrill = ({ item }) => {
    const { title, type, source, image, goals } = item;

    const imageMainData = type === DrillTypes.FRISBEE ? 'minimalPlayersNumber' : 'durationInMinutes';
    const imageMainDataLegend = type === DrillTypes.FRISBEE ? 'players' : 'min';
    return (
      <TouchableOpacity style={[list.item, props.ItemComponentStyle]} onPress={() => onDrillPress(item)}>
        <ImageBackground source={{ uri: image }} style={list.image} imageStyle={list.imageOpacity}>
          <Text style={{ ...list.imageText, ...list.imageTextMain }}>{item[imageMainData]}</Text>
          <Text style={list.imageText}>{imageMainDataLegend}</Text>
        </ImageBackground>
        <View style={list.itemContentContainer}>
          <Text style={list.source}>{source}</Text>
          <Text style={list.title}>{title}</Text>
          <Text style={list.numberOfPlayers}>{goals.join(', ')}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      {...props}
      data={drillsToDisplay}
      keyExtractor={item => item.id.toString()}
      renderItem={renderDrill}
      contentContainerStyle={list.contentContainer}
    />
  );
};

export default DrillList;
