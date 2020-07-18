import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableHighlight } from 'react-native';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import frisbeeGlove from '../../assets/HomePage/frisbeeglove.jpg';

export const VideoListPage = props => {
  return (
    <View style={styles.drillListPage}>
      <View>
        <TouchableHighlight onPress={() => props.navigation.navigate('VideoPage')}>
          <ImageBackground source={frisbeeGlove} style={styles.image}>
            <View style={styles.timer}>
              <Text style={styles.textTimer}>1:42</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <View style={styles.title}>
          <Text style={styles.text}>La defense de zone de Buzz Bullet</Text>
          <View style={styles.authorWrapper}>
            <Text style={styles.textAuthor}>Ultiworld</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoListPage;

const styles = StyleSheet.create({
  drillListPage: {
    paddingTop: 10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  image: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'rgb(0,0,0)',
  },
  text: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  timer: {
    backgroundColor: theme.COLOR_PRIMARY,
    paddingHorizontal: 5,
    position: 'absolute',
    right: 5,
    bottom: 10,
  },
  textTimer: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlign: 'center',
  },
  author: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    position: 'absolute',
    left: 5,
    bottom: 10,
    paddingHorizontal: 5,
  },
  textAuthor: {
    flex: 1,
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 10,
  },
});
