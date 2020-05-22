import React, { useState, useLayoutEffect } from 'react';
import { Share, StyleSheet, View, Alert } from 'react-native';

import I18n from '../utils/i18n';
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
      I18n.t('animationEditor.comingSoon.title'),
      I18n.t('animationEditor.comingSoon.content'),
      [
        { text: I18n.t('animationEditor.comingSoon.cancel'), style: 'cancel' },
        { text: I18n.t('animationEditor.comingSoon.cta'), onPress: doShare },
      ],
      { cancelable: true },
    );
  };

  const doShare = () => {
    Share.share({
      title: I18n.t('animationEditor.comingSoon.sharePlaceholder'),
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
