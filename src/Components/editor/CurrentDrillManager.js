import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';

import I18n from '../../utils/i18n';
import HeaderButton from '../shared/HeaderButton';

MIME_TYPE = 'text/discin';

const CurrentDrillManager = (props) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const share = async () => {
    const fileUri = FileSystem.cacheDirectory + props.currentDrill.title + '.discin';
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(props.currentDrill));
    await Sharing.shareAsync(fileUri);
  };

  const importPlay = async () => {
    // TODO: Maybe filter by MIME type
    const result = await DocumentPicker.getDocumentAsync();
    if (result.type === 'success') {
      const drill = await FileSystem.readAsStringAsync(result.uri);
      props.openDrill(JSON.parse(drill));
      // TODO: Don't know if it should save the drill or just open it
      // TODO: What if the opened file is not from Disc In ?
    } else {
      // TODO: We should provide feedback
      console.log(result);
    }
  };

  const checkBeforeNewDrill = () => {
    if (props.isDrillSaved) {
      props.new();
    } else {
      Alert.alert(
        I18n.t('editor.saveModificationsTitle'),
        I18n.t('editor.saveModificationsText', { title: props.currentDrill.title }),
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
          closeMenu();
        }}
        icon="content-save-outline"
        title={I18n.t('editor.currentDrillManager.save')}
      />
      <Menu.Item
        onPress={() => {
          props.rename();
          closeMenu();
        }}
        icon="pencil"
        title={I18n.t('editor.currentDrillManager.rename')}
      />
      <Menu.Item
        onPress={() => {
          checkBeforeNewDrill();
          closeMenu();
        }}
        icon="plus"
        title={I18n.t('editor.currentDrillManager.new')}
      />
      <Divider />
      <Menu.Item
        onPress={() => {
          share();
          closeMenu();
        }}
        icon="share-outline"
        title={I18n.t('editor.currentDrillManager.share')}
      />
      <Menu.Item
        onPress={() => {
          importPlay();
          closeMenu();
        }}
        icon="import"
        title={I18n.t('editor.currentDrillManager.import')}
      />
    </Menu>
  );
};

export default CurrentDrillManager;
