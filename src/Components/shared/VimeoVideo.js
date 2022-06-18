import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Video, Audio } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useFocusEffect } from '@react-navigation/native';

import I18n from '../../utils/i18n';
import theme from '../../styles/theme.style';

const VimeoVideo = ({ vimeoId, sounds, shouldPlay }) => {
  const videoElem = useRef(null);
  const [isBuffering, setBuffer] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const vimeoUrlSource = `https://player.vimeo.com/video/${vimeoId}/config`;
    let aborted = false;
    setBuffer(true);
    setError(null);

    fetch(vimeoUrlSource)
      .then((res) => res.json())
      .then((res) => {
        const videoArray = res.request.files.progressive;
        const videoVimeoQuality = videoArray.find((videoObject) => videoObject.quality === '540p');
        if (videoVimeoQuality) {
          return videoVimeoQuality.url;
        }
      })
      .then((url) => {
        if (aborted) return;
        return videoElem.current.loadAsync({
          uri: url,
        });
      })
      .catch((e) => {
        if (aborted) return;
        setError(e);
        setBuffer(false);
      });

    return () => (aborted = true);
  }, [vimeoId]);

  // Stop playing the video on screen change
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        videoElem.current?.pauseAsync();
      };
    }, []),
  );

  const playVideoLoaded = () => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
    videoElem.current.setStatusAsync({
      rate: 1.0,
      isMuted: !sounds,
      resizeMode: Video.RESIZE_MODE_CONTAIN,
      shouldPlay: shouldPlay || false,
      isLooping: true,
    });

    setBuffer(false);
  };

  const renderBufferIcon = () => {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator animating color={theme.COLOR_SECONDARY} size="large" />
        <Text>{I18n.t('vimeoVideo.loading')}</Text>
      </View>
    );
  };

  const renderError = () => {
    return (
      <View style={styles.spinnerStyle}>
        <Text>{I18n.t('vimeoVideo.error')}</Text>
      </View>
    );
  };

  return (
    <View style={styles.videoContainer}>
      {error && renderError()}
      {isBuffering && renderBufferIcon()}
      <Video
        ref={videoElem}
        resizeMode={Video.RESIZE_MODE_CONTAIN}
        useNativeControls
        style={{ width: '100%', height: 250 }}
        onLoadStart={() => setBuffer(true)}
        onLoad={playVideoLoaded}
        onFullscreenUpdate={async ({ fullscreenUpdate }) => {
          if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
          }
          if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerStyle: {
    position: 'absolute',
  },
});

export default VimeoVideo;
