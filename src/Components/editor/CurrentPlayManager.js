import React, { useState } from 'react';
import { Alert, Share, Text } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import I18n from '../../utils/i18n';
import { upload } from '../../utils/firebase';
import { showSuccess, showError } from '../../utils/flashMessage';
import HeaderButton from '../shared/HeaderButton';

const CurrentPlayManager = (props) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const share = async () => {
    try {
      await upload(props.currentPlay);
      const url = Linking.makeUrl('customPlays/' + props.currentPlay.uuid);
      await Share.share({
        title: I18n.t('editor.currentPlayManager.shareTitle', { title: props.currentPlay.title }),
        message: I18n.t('editor.currentPlayManager.shareMessage', { url }),
        url,
      });
    } catch (error) {
      showError(I18n.t('editor.currentPlayManager.shareError'));
    }
  };

  const checkBeforeNewPlay = () => {
    if (props.isPlaySaved) {
      props.new();
    } else {
      Alert.alert(
        I18n.t('editor.saveModificationsTitle'),
        I18n.t('editor.saveModificationsText', { title: props.currentPlay.title }),
        [
          {
            text: I18n.t('shared.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('shared.yes'),
            onPress: () => {
              props.save();
              showSuccess(I18n.t('editor.currentPlayManager.saveSuccess', { title: props.currentPlay.title }));
              props.new();
            },
          },
          {
            text: I18n.t('shared.no'),
            onPress: () => {
              props.new();
            },
          },
        ],
      );
    }
  };

  return (
    <Menu visible={visible} onDismiss={closeMenu} anchor={<HeaderButton icon="dots-vertical" onPress={openMenu} />}>
      <Menu.Item
        onPress={() => {
          props.save();
          showSuccess(I18n.t('editor.currentPlayManager.saveSuccess', { title: props.currentPlay.title }));
          closeMenu();
        }}
        icon="content-save-outline"
        title={I18n.t('editor.currentPlayManager.save')}
      />
      <Menu.Item
        onPress={() => {
          props.rename();
          closeMenu();
        }}
        icon="pencil"
        title={I18n.t('editor.currentPlayManager.rename')}
      />
      <Menu.Item
        onPress={() => {
          checkBeforeNewPlay();
          closeMenu();
        }}
        icon="plus"
        title={I18n.t('editor.currentPlayManager.new')}
      />
      <Divider />
      <Menu.Item
        onPress={() => {
          share();
          closeMenu();
        }}
        icon="share-outline"
        title={I18n.t('editor.currentPlayManager.share')}
      />
    </Menu>
  );
};

export default CurrentPlayManager;
