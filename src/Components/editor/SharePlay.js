import React, { useState, useRef } from 'react';
import { TouchableOpacity, Share } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import { showError } from '../../utils/flashMessage';
import { upload } from '../../utils/firebase';

const SharePlay = ({ currentPlay }) => {
  const share = async () => {
    try {
      await upload(currentPlay);
      const url = Linking.makeUrl('customPlays/' + currentPlay.uuid);
      await Share.share({
        title: I18n.t('editor.sharePlay.shareTitle', { title: currentPlay.title }),
        message: I18n.t('editor.sharePlay.shareMessage', { url }),
        url,
      });
    } catch (error) {
      console.log(error);
      showError(I18n.t('editor.sharePlay.shareError'));
    }
  };

  return (
    <TouchableOpacity onPress={share} testID="shareButton">
      <MaterialCommunityIcons name="share" color={theme.COLOR_PRIMARY_LIGHT} size={30} />
    </TouchableOpacity>
  );
};

export default SharePlay;
