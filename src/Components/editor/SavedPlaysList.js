import React, { useState, useRef } from 'react';
import { StyleSheet, View, Alert, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import FlashMessage, { showSuccess } from '../../utils/flashMessage';
import HeaderButton from '../shared/HeaderButton';
import Modal from '../shared/Modal';

const SavedPlaysList = (props) => {
  const [modalOpened, setModalOpened] = useState(false);
  const modalFlash = useRef(null);

  const beforeOpening = (play) => {
    if (props.isPlaySaved) {
      props.onOpen(play);
    } else {
      Alert.alert(
        I18n.t('editor.saveModificationsTitle'),
        I18n.t('editor.saveModificationsText', { title: props.playTitle }),
        [
          {
            text: I18n.t('shared.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('shared.yes'),
            onPress: () => {
              props.saveCurrentPlay();
              showSuccess(I18n.t('editor.currentPlayManager.saveSuccess', { title: props.playTitle }));
              props.onOpen(play);
            },
          },
          {
            text: I18n.t('shared.no'),
            onPress: () => {
              props.onOpen(play);
            },
          },
        ],
      );
    }
  };

  const deletionConfirmation = (play) => {
    Alert.alert(play.title, I18n.t('editor.savedPlaysList.deleteConfirmation'), [
      {
        text: I18n.t('shared.cancel'),
        style: 'cancel',
      },
      {
        text: I18n.t('editor.savedPlaysList.delete'),
        style: 'destructive',
        onPress: () => {
          props.onDelete(play);
          showSuccess(I18n.t('editor.savedPlaysList.deleteSuccess', { title: props.playTitle }), modalFlash.current);
        },
      },
    ]);
  };

  return (
    <View>
      <HeaderButton icon="clipboard-text-outline" onPress={() => setModalOpened(true)} />
      <Modal title={I18n.t('editor.savedPlaysList.title')} visible={modalOpened} onClose={() => setModalOpened(false)}>
        <FlatList
          data={props.savedPlays}
          keyExtractor={(item) => item.title}
          style={{ flexGrow: 0 }}
          ListEmptyComponent={() => (
            <View>
              <Text>{I18n.t('editor.savedPlaysList.empty')}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setModalOpened(false);
                beforeOpening(item);
              }}
            >
              <View style={styles.item}>
                <View style={styles.itemTitle}>
                  <Text style={styles.itemTitleText}>{item.title}</Text>
                </View>
                <MaterialCommunityIcons
                  style={styles.deleteIcon}
                  name="trash-can"
                  onPress={() => {
                    deletionConfirmation(item);
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        <FlashMessage ref={modalFlash} position="bottom" />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  itemTitle: {
    flexBasis: '90%',
  },
  deleteIcon: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default SavedPlaysList;
