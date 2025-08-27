import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Vimeo } from 'react-native-vimeo-iframe';
import I18n from '../../utils/i18n';
import theme from '../../styles/theme.style';

const VimeoVideo = ({ vimeoId, sounds, shouldPlay = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Vimeo player options
  const videoOptions = {
    autoplay: shouldPlay,
    loop: true,
    muted: !sounds, // Invert sounds to get muted
  };

  const onError = (errorMessage) => {
    console.error('Vimeo video error:', errorMessage);
    setError(true);
    setIsLoading(false);
  };

  const onReady = () => {
    setIsLoading(false);
  };

  const renderLoader = () => {
    if (!isLoading) return null;

    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator animating color={theme.COLOR_SECONDARY} size="large" />
        <Text>{I18n.t('vimeoVideo.loading')}</Text>
      </View>
    );
  };

  const renderError = () => {
    if (!error) return null;

    return (
      <View style={styles.spinnerStyle}>
        <Text>{I18n.t('vimeoVideo.error')}</Text>
      </View>
    );
  };

  return (
    <View style={styles.videoContainer}>
      {renderLoader()}
      {renderError()}
      <Vimeo videoId={vimeoId} onReady={onReady} onError={onError} style={styles.video} options={videoOptions} />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    height: 250,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: 250,
  },
  spinnerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});

export default VimeoVideo;
