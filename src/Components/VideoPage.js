import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import theme from '../styles/theme.style';
import VimeoVideo from './shared/VimeoVideo';

const VideoPage = (props) => {
  const video = props.route.params.video;

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.videoAlone}>
        <VimeoVideo vimeoId={video.video} sounds shouldPlay />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>{video.title}</Text>
        <View style={styles.authorWrapper}>
          <Text style={styles.textAuthor}>{video.text}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.description}>{video.description}</Text>
      </View>
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  contentWrapper: { flex: 1, backgroundColor: theme.COLOR_PRIMARY_LIGHT },
  videoAlone: { height: 250 },
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
  text: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  description: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    paddingHorizontal: 10,
  },
});
