import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

import { Video } from 'expo-av';
import theme from '../styles/theme.style';

const VimeoVideo = ({ vimeoId, screenWidth }) => {
  const videoElem = useRef(null);
  const [isBuffering, setBuffer] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const vimeoUrlSource = `https://player.vimeo.com/video/${vimeoId}/config`;
    let aborted = false;

    fetch(vimeoUrlSource)
      .then(res => res.json())
      .then(res => {
        const videoArray = res.request.files.progressive;
        const videoVimeoQuality = videoArray.find(videoObject => videoObject.quality === '540p');
        if (videoVimeoQuality) {
          return videoVimeoQuality.url;
        }
      })
      .then(url => {
        if (aborted) return;
        try {
          videoElem.current.loadAsync({
            uri: url,
          });
        } catch (e) {
          setError(e);
          setBuffer(false);
        }
      })
      .catch(e => {
        setError(e);
        setBuffer(false);
      });

    return () => (aborted = true);
  }, [vimeoId]);

  const playVideoLoaded = () => {
    videoElem.current.setStatusAsync({
      rate: 1.0,
      isMuted: true,
      resizeMode: Video.RESIZE_MODE_CONTAIN,
      shouldPlay: true,
      isLooping: true,
    });
    setBuffer(false);
  };

  const renderBufferIcon = () => {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator animating color={theme.COLOR_SECONDARY} size="large" />
        <Text>Loading...</Text>
      </View>
    );
  };

  const renderError = () => {
    return (
      <View style={styles.spinnerStyle}>
        <Text>Oopsie! There was an error loading the video...</Text>
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
        style={{ width: screenWidth, height: 250 }}
        onLoadStart={() => setBuffer(true)}
        onLoad={playVideoLoaded}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerStyle: {
    position: 'absolute',
  },
});

export default VimeoVideo;
