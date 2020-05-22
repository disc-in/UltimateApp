import React, { useState, useLayoutEffect } from 'react';
import { Share, StyleSheet, View, Alert } from 'react-native';

import AnimationEditor from './animation/AnimationEditor';
import HeaderButton from './shared/HeaderButton';
import drillSquare from './animation/DrillSquare';
import buttonValidation from '../../assets/check_dark.png';

import theme from '../styles/theme.style';

export const AnimationEditorPage = props => {
  const [currentAnimationState, saveAnimationState] = useState(null);
  const navigation = props.navigation;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton image={buttonValidation} onPress={askShare} />,
    });
  });

  const askShare = () => {
    Alert.alert(
      'Coming soon',
      'Soon you will be able to create drills, training sessions and programs. \n' +
        'For now you can only send your new drill to an ultimate app dev.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Send the drill to a dev', onPress: doShare },
      ],
      { cancelable: true },
    );
  };

  const doShare = () => {
    Share.share({
      title: 'Please add this drill to UltimateApp',
      message:
        '----- ENCODED DRILL -------\n' + JSON.stringify(currentAnimationState) + '\n---------------------------',
    }).catch(err => console.log(err));
  };

  return (
    <View style={styles.animationEditorPage}>
      <AnimationEditor animation={drillSquare} onAnimationChange={saveAnimationState} />
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
