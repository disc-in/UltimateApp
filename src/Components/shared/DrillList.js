import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import I18n from '../../utils/i18n';
import * as list from '../../styles/list.style';
import { DrillTypes } from '../../Fixtures/config';

const DrillList = props => {
  const { navigation, drillsToDisplay } = props;
  const onDrillPress = props.onDrillPress || (item => navigation.navigate('DrillPage', { drill: item }));

  const renderDrill = ({ item }) => {
    const { title, type, image, goals, author } = item;

    const imageMainData = type === DrillTypes.FRISBEE ? 'minimalPlayersNumber' : 'durationInMinutes';
    const imageMainDataLegend = type === DrillTypes.FRISBEE ? 'players' : 'min';
    return (
      <TouchableOpacity style={[list.item, props.ItemComponentStyle]} onPress={() => onDrillPress(item)}>
        <ImageBackground source={{ uri: image }} style={list.image} imageStyle={list.imageOpacity}>
          <Text style={{ ...list.imageText, ...list.imageTextMain }}>{item[imageMainData]}</Text>
          <Text style={list.imageText}>{imageMainDataLegend}</Text>
        </ImageBackground>
        <View style={list.itemContentContainer}>
          <Text style={list.source}>{author}</Text>
          <Text style={list.title}>{title}</Text>
          <Text style={list.numberOfPlayers}>
            {goals
              .map(goal => I18n.t(`data.fitnessGoals.${goal}`, { defaults: [{ scope: `data.frisbeeGoals.${goal}` }] }))
              .join(', ')}
          </Text>
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
