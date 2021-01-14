import React from 'react';
import { StyleSheet, View, Text, Share } from 'react-native';

import theme from '../styles/theme.style';
import VimeoVideo from './shared/VimeoVideo';
import I18n from '../utils/i18n';
import Button from './shared/Button';

const VideoPage = (props) => {
  const video = props.route.params.video;

  const share = async (video) => {
    let url = '';
    if (video.youtube) {
      url = video.youtube;
    }

    Share.share({
      message: I18n.t('videoPage.shareContent', { url }),
      url,
    }).catch((e) => console.log(e));
  };

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.videoAlone}>
        <VimeoVideo vimeoId={video.video} sounds shouldPlay />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>{video.title}</Text>
        <Text style={styles.textAuthor}>{video.text}</Text>
      </View>
      <View>
        <Text style={styles.description}>{video.description}</Text>
      </View>
      {video.youtube && (
        <View style={styles.footer}>
          <Button onPress={() => share(video)} testID="shareButton" text={I18n.t('videoPage.share')} dark />
        </View>
      )}
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  contentWrapper: { flex: 1, backgroundColor: theme.COLOR_PRIMARY_LIGHT },
  videoAlone: { height: 250 },
  textAuthor: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  title: {
    paddingVertical: 10,
    paddingLeft: 5,
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
  shareButton: {
    position: 'absolute',
    right: '15%',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
  },
  footer: {
    position: 'absolute',
    paddingBottom: 20,
    paddingTop: 5,
    bottom: 0,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    width: '100%',
    alignItems: 'center',
  },
});
