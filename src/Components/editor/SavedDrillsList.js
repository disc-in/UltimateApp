import React, { useState, useRef } from 'react';
import { StyleSheet, View, Alert, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import FlashMessage, { showSuccess } from '../../utils/flashMessage';
import HeaderButton from '../shared/HeaderButton';
import Modal from '../shared/Modal';

const SavedDrillsList = (props) => {
  const [modalOpened, setModalOpened] = useState(false);
  const modalFlash = useRef(null);

  const beforeOpening = (drill) => {
    if (props.isDrillSaved) {
      props.onOpen(drill);
    } else {
      Alert.alert(
        I18n.t('editor.saveModificationsTitle'),
        I18n.t('editor.saveModificationsText', { title: props.drillTitle }),
        [
          {
            text: I18n.t('shared.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('shared.yes'),
            onPress: () => {
              props.saveCurrentDrill();
              showSuccess(I18n.t('editor.currentDrillManager.saveSuccess', { title: props.drillTitle }));
              props.onOpen(drill);
            },
          },
          {
            text: I18n.t('shared.no'),
            onPress: () => {
              props.onOpen(drill);
            },
          },
        ],
      );
    }
  };

  const deletionConfirmation = (drill) => {
    Alert.alert(drill.title, I18n.t('editor.savedDrillsList.deleteConfirmation'), [
      {
        text: I18n.t('shared.cancel'),
        style: 'cancel',
      },
      {
        text: I18n.t('editor.savedDrillsList.delete'),
        style: 'destructive',
        onPress: () => {
          props.onDelete(drill);
          showSuccess(I18n.t('editor.savedDrillsList.deleteSuccess', { title: props.drillTitle }), modalFlash.current);
        },
      },
    ]);
  };

  return (
    <View>
      <HeaderButton icon="clipboard-text-outline" onPress={() => setModalOpened(true)} />
      <Modal title={I18n.t('editor.savedDrillsList.title')} visible={modalOpened} onClose={() => setModalOpened(false)}>
        <FlatList
          data={props.savedDrills}
          keyExtractor={(item) => item.title}
          style={{ flexGrow: 0 }}
          ListEmptyComponent={() => (
            <View>
              <Text>{I18n.t('editor.savedDrillsList.empty')}</Text>
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

export default SavedDrillsList;
