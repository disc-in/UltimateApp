import React, { useState, useRef } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../../styles/theme.style';
import I18n from '../../../utils/i18n';
import { showSuccess } from '../../../utils/flashMessage';

const NewPlay = ({ currentPlay, isPlaySaved, createNewPlay, saveCurrentPlay }) => {
  const checkBeforeNewPlay = () => {
    if (isPlaySaved) {
      createNewPlay();
    } else {
      Alert.alert(
        I18n.t('editor.saveModificationsTitle'),
        I18n.t('editor.saveModificationsText', { title: currentPlay.title }),
        [
          {
            text: I18n.t('shared.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('shared.yes'),
            onPress: () => {
              saveCurrentPlay();
              showSuccess(I18n.t('editor.saveSuccess', { title: currentPlay.title }));
              createNewPlay();
            },
          },
          {
            text: I18n.t('shared.no'),
            onPress: () => {
              createNewPlay();
            },
          },
        ],
      );
    }
  };
  return (
    <TouchableOpacity onPress={() => checkBeforeNewPlay()} testID="newButton">
      <MaterialCommunityIcons name="plus" color={theme.COLOR_PRIMARY_LIGHT} size={30} />
    </TouchableOpacity>
  );
};

export default NewPlay;
