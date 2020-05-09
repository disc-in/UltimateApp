import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import AnimationEditor from './animation/AnimationEditor';
import drillSquare from './animation/DrillSquare';

import theme from '../styles/theme.style';

export const AnimationEditorPage = props => {
  return (
    <View style={styles.animationEditorPage}>
      <AnimationEditor animation={drillSquare} heightRatio={1} widthRatio={1} />
    </View>
  );
};

export default AnimationEditorPage;

const styles = StyleSheet.create({
  animationEditorPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
    width: '100%',
  },
});
