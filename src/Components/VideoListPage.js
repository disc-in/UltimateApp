import React from 'react';
import { StyleSheet, View } from 'react-native';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';

export const VideoListPage = props => {
  return <View style={styles.drillListPage}></View>;
};

export default VideoListPage;

const styles = StyleSheet.create({
  drillListPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
});
