import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Drill from './animation/Drill';
import { DrillTypes } from '../Fixtures/config';
import theme from '../styles/theme.style';
import AnimationEditor from './editor/AnimationEditor';
import AnimationHistory from './editor/toolbar/AnimationHistory';
import HeaderButton from './shared/HeaderButton';

export const PlayEditorPage = ({ navigation, route }) => {
  const [currentAnimation, setCurrentAnimation] = useState(new Drill(route.params.animation));

  const onAnimationChange = (animation) => {
    setCurrentAnimation(animation);
    route.params.onAnimationChange(animation);
  };

  const handleSubmit = () => {
    navigation.navigate('DrillEditorPage');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton icon="check" onPress={handleSubmit} testID="resetButton" />,
    });
  });

  return (
    <View style={styles.drillEditorPage}>
      <View style={styles.centeredView}>
        <AnimationEditor onAnimationChange={onAnimationChange} animation={currentAnimation} uuid="unused_uuid" />
      </View>
      <View style={styles.toolBar}>
        <View style={styles.toolBarItem}>
          <AnimationHistory animation={currentAnimation} onAnimationHistoryChange={onAnimationChange} />
        </View>
      </View>
    </View>
  );
};

export default PlayEditorPage;

const styles = StyleSheet.create({
  drillEditorPage: {
    flex: 1,
  },
  centeredView: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
  },
  toolBar: {
    height: '8%',
    minHeight: 40,
    width: '100%',
    backgroundColor: theme.COLOR_PRIMARY,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  toolBarItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  separator: {
    height: '70%',
    borderRightWidth: 0.5,
    borderRightColor: theme.COLOR_SECONDARY,
  },
});
