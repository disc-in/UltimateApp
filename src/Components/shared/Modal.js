import React from 'react';
import { StyleSheet, Modal as NativeModal, View, Text, TouchableOpacity } from 'react-native';

import I18n from '../../utils/i18n';
import Button from './Button';

const Modal = ({ title, visible, onClose, children }) => {
  return (
    <NativeModal animationType="fade" transparent useNativeDriver visible={visible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.titleText}>{title}</Text>
          {children}
          <Button light onPress={onClose} text={I18n.t('shared.back')} style={styles.backButton} />
        </View>
      </View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    maxHeight: '80%',
    maxWidth: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 20,
    width: 120,
  },
});

export default Modal;
