import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import VimeoVideo from '../Components/VimeoVideo';

import theme from '../styles/theme.style';

const screenDimension = Dimensions.get('window');

const VideoPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={[{ height: 250 }, styles.videoAlone]}>
          <VimeoVideo vimeoId={429982987} screenWidth={screenDimension.width} sounds />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  videoAlone: {
    flex: 1,
  },
  pagination: {
    paddingVertical: 10,
  },
  line: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
    textAlign: 'center',
  },
  contentWrapper: { minHeight: 375 },
});

export default VideoPage;
