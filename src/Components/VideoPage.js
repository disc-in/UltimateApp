import React from 'react';
import { StyleSheet, View, Text, Share } from 'react-native';

import theme from '../styles/theme.style';
import VimeoVideo from './shared/VimeoVideo';
import I18n from '../utils/i18n';
import Button from './shared/Button';
import { showError } from '../utils/flashMessage';

const VideoPage = (props) => {
  const video = props.route.params.video;

  const share = () => {
    const url = video.youtube;

    Share.share({
      message: I18n.t('videoPage.shareContent', { url }),
      url,
    }).catch((e) => {
      showError(I18n.t('videoPage.error'));
    });
  };

  return (
    <View style={styles.videoPage}>
      <View style={styles.video}>
        <VimeoVideo vimeoId={video.video} sounds shouldPlay />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>{video.title}</Text>
        <Text style={styles.textAuthor}>{video.text}</Text>
      </View>
      {video.youtube && (
        <View style={styles.footer}>
          <Button
            onPress={share}
            icon={Platform.select({
              ios: 'ios-share-outline',
              default: 'share-social',
            })}
            text={I18n.t('videoPage.share')}
            testID="shareButton"
            small
            light
          />
        </View>
      )}
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  videoPage: {
    flex: 1,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  video: {
    height: 250,
  },
  title: {
    marginVertical: 20,
    marginLeft: 10,
  },
  text: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  textAuthor: {
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  footer: {
    position: 'absolute',
    paddingBottom: 20,
    paddingTop: 5,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});
