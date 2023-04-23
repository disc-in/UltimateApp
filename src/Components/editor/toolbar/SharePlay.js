import React, { useState, useRef } from 'react';
import { Platform, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import theme from '../../../styles/theme.style';
import I18n from '../../../utils/i18n';
import { showError } from '../../../utils/flashMessage';
import { upload } from '../../../utils/firebase';

const SharePlay = ({ currentPlay }) => {
  const share = async () => {
    try {
      const uuid = await upload('customPlays', currentPlay);
      await Share.share({
        title: I18n.t('editor.sharePlay.shareTitle', { title: currentPlay.title }),
        message: I18n.t('editor.sharePlay.shareMessage', { uuid }),
      });
    } catch (error) {
      showError(I18n.t('editor.sharePlay.shareError'));
    }
  };

  return (
    <TouchableOpacity onPress={share} testID="shareButton">
      <Ionicons
        name={Platform.select({
          ios: 'ios-share-outline',
          default: 'share-social-outline',
        })}
        color={theme.COLOR_PRIMARY_LIGHT}
        size={30}
      />
    </TouchableOpacity>
  );
};

export default SharePlay;
