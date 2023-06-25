import React from 'react';
import { StyleSheet, Platform, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import * as Linking from 'expo-linking';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import TimeoutImage from '../../../assets/timeoutUltimate.png';

const TimeoutUltimate = ({ item }) => {
  const onPress = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL(item.appStoreUrl);
    } else {
      Linking.openURL(item.playStoreUrl);
    }
  };
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <ImageBackground source={TimeoutImage} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  title: {
    paddingVertical: 15,
    paddingLeft: 10,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  image: {
    height: 250,
  },
  text: {
    paddingVertical: 15,
    paddingLeft: 10,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default TimeoutUltimate;
