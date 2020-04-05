import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import * as list from '../styles/list.style';

export const DrillList = props => {
  const { navigation } = props;

  return (
    <View>
      <FlatList
        data={props.data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.drill} onPress={() => navigation.navigate('DrillPage', { drill: item })}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.contentContainer}>
              <Text style={styles.source}>{item.source}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.numberOfPlayers}>
                Duration: {item.durationInMinutes} min - players: {item.nbPlayers}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    ...list.counter,
  },
  drill: {
    ...list.item,
  },
  image: {
    ...list.image,
  },
  contentContainer: {
    ...list.contentContainer,
  },
  title: {
    ...list.title,
  },
  source: {
    ...list.source,
  },
  numberOfPlayers: {
    ...list.numberOfPlayers,
  },
});
