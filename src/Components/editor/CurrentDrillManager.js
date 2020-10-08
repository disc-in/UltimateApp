import React, { useState } from 'react';
import { Share, Text } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import HeaderButton from '../shared/HeaderButton';

const CurrentDrillManager = (props) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
  };

  const contribute = () => {
    Share.share({
      title: I18n.t('editor.currentDrillManager.sharePlaceholder'),
      message: '----- ENCODED DRILL -------\n' + JSON.stringify(props.currentDrill) + '\n---------------------------',
    }).catch((err) => console.log(err));
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
          props.new();
          closeMenu();
        }}
        icon="plus"
        title={I18n.t('editor.currentDrillManager.new')}
      />
      <Divider />
      <Menu.Item
        onPress={() => {
          contribute();
          closeMenu();
        }}
        icon="share-outline"
        title={I18n.t('editor.currentDrillManager.share')}
      />
    </Menu>
  );
};

export default CurrentDrillManager;
