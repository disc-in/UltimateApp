import React, { useState } from 'react';
import { Alert, Share, Text } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';
import { upload } from '../../utils/firebase';
import { showSuccess } from '../../utils/flashMessage';
import HeaderButton from '../shared/HeaderButton';

const CurrentPlayManager = (props) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const contribute = () => {
    const result = upload(props.currentPlay);
    Share.share({
      title: I18n.t('editor.currentPlayManager.sharePlaceholder', { uuid: props.currentPlay.uuid }),
    }).catch((err) => console.log(err));
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
          contribute();
          closeMenu();
        }}
        icon="share-outline"
        title={I18n.t('editor.currentPlayManager.share')}
      />
    </Menu>
  );
};

export default CurrentPlayManager;
