import React, { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import { showSuccess } from '../../utils/flashMessage';

const SavePlay = ({ currentPlay, saveCurrentPlay }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        saveCurrentPlay();
        showSuccess(I18n.t('editor.saveSuccess', { title: currentPlay.title }));
      }}
      testID="saveButton"
    >
      <MaterialCommunityIcons name="content-save" color={theme.COLOR_PRIMARY_LIGHT} size={30} />
    </TouchableOpacity>
  );
};

export default SavePlay;
