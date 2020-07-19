import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableHighlight, FlatList } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';

const DATA = [
  {
    id: '1',
    title: 'Video 1',
    text: 'That Drone Guy Ty',
    video: '436149607',
    author: 'Moby',
    time: '1:42',
    illustration: 'https://zupimages.net/up/20/28/fo2i.jpg',
  },
  {
    id: '2',
    title: 'Video 2',
    text: 'That Drone Guy Ty',
    video: '436152686',
    author: 'Ultiworld',
    time: '1:45',
    illustration: 'https://zupimages.net/up/20/25/742g.jpeg',
  },
  {
    id: '3',
    title: 'Video 3',
    text: 'That Drone Guy Ty',
    video: '424514096',
    author: 'Rise up',
    time: '1:46',
    illustration: 'https://zupimages.net/up/20/25/k6hi.jpg',
  },
];

const Item = ({ item, onPress }) => (
  <View style={styles.drillListPage}>
    <View>
      <TouchableHighlight onPress={onPress}>
        <ImageBackground source={{ uri: item.illustration }} style={styles.image}>
          <View style={styles.timer}>
            <Text style={styles.textTimer}>{item.time}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <View style={styles.title}>
        <Text style={styles.text}>{item.title}</Text>
        <View style={styles.authorWrapper}>
          <Text style={styles.textAuthor}>{item.author}</Text>
        </View>
      </View>
    </View>
  </View>
);

export const VideoListPage = props => {
  const { navigation } = props;

  //   const onVideoPress = ({ item }) => {
  //     setSelectedItem(item);
  //   };

  const onVideoPress = props.onDrillPress || (item => navigation.navigate('VideoPage', { video: item.video }));

  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => <Item item={item} onPress={() => onVideoPress(item)} />;

  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    dictionary: state.theory.videos,
  };
};

export default connect(mapStateToProps)(VideoListPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
