import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import theme from '../../../styles/theme.style';

const Player = ({ baseWidth, type, number }) => {
  const playerRadius = baseWidth;

  const itemStyle = [
    styles.player,
    type === 'defense' ? styles.defense : styles.offense,
    {
      height: playerRadius,
      width: playerRadius,
      borderRadius: playerRadius,
    },
  ];

  return (
    <View style={itemStyle}>
      <Text style={styles.playerText}>{number}</Text>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  player: {
    marginRight: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defense: {
    backgroundColor: theme.DEFENSE_COLOR,
  },
  offense: {
    backgroundColor: theme.MAIN_COLOR,
  },
  playerText: {
    color: theme.PLAYER_TEXT_COLOR,
    fontWeight: 'bold',
  },
});
