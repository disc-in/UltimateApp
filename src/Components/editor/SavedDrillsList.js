import React, { useState } from 'react';
import { StyleSheet, View, Modal, Alert, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import HeaderButton from '../shared/HeaderButton';

const SavedDrillsList = (props) => {
  const [modalOpened, setModalOpened] = useState(false);

  const beforeOpening = (drill) => {
    if (props.isDrillSaved) props.onOpen(drill);
    else {
      Alert.alert(
        I18n.t('drillEditor.drillManager.saveModificationsTitle'),
        I18n.t('drillEditor.drillManager.saveModificationsText', { title: props.drillTitle }),
        [
          {
            text: I18n.t('drillEditor.drillManager.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('drillEditor.drillManager.yes'),
            onPress: () => {
              props.saveCurrentDrill();
              props.onOpen(drill);
            },
          },
          {
            text: I18n.t('drillEditor.drillManager.no'),
            onPress: () => {
              props.onOpen(drill);
            },
          },
        ],
      );
    }
  };

  const deletionConfirmation = (drill) => {
    Alert.alert(drill.title, I18n.t('drillEditor.drillManager.deleteConfirmation'), [
      {
        text: I18n.t('drillEditor.drillManager.cancel'),
        style: 'cancel',
      },
      {
        text: I18n.t('drillEditor.drillManager.delete'),
        style: 'destructive',
        onPress: () => props.onDelete(drill),
      },
    ]);
  };

  return (
    <View>
      <HeaderButton icon="clipboard-text-outline" onPress={() => setModalOpened(true)} />
      {modalOpened && (
        <Modal
          animationType="fade"
          transparent
          visible
          onRequestClose={() => {
            setModalOpened(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.titleText}>{`${I18n.t('drillEditor.drillManager.savedDrills')}`}</Text>
              <FlatList
                data={props.savedDrills}
                keyExtractor={(item) => item.title.toString()}
                style={{ flexGrow: 0 }}
                ListEmptyComponent={() => (
                  <View>
                    <Text>{I18n.t('drillEditor.drillManager.empty')}</Text>
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
                      <Text>{item.title}</Text>
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
              <TouchableOpacity
                style={styles.returnButton}
                onPress={() => {
                  setModalOpened(false);
                }}
              >
                <Text style={styles.returnButtonText}>{I18n.t('shared.back')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteIcon: {
    marginLeft: 10,
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  returnButton: {
    backgroundColor: theme.MAIN_COLOR,
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
  },
  returnButtonText: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SavedDrillsList;
