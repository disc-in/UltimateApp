import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import VimeoVideo from '../Components/VimeoVideo';

const screenDimension = Dimensions.get('window');

export const VideoPage = props => {
  return (
    <View style={styles.contentWrapper}>
      <View style={[{ height: 250 }, styles.videoAlone]}>
        <VimeoVideo vimeoId="436151076" screenWidth={screenDimension.width} />
      </View>
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  contentWrapper: { minHeight: 375 },
  videoAlone: {
    flex: 1,
  },
});
