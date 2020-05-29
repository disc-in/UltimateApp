import React from 'react';
import { View, StyleSheet, Text, Modal, TouchableHighlight } from 'react-native';

import theme from '../styles/theme.style';

export const ModalElement = (props, {value}) => {
    const [modalVisible, setModalVisible] = useState(false);
  
    
  const _setModalVisible = () => {
    setModalVisible(true);
  }

    return (
      <View>
        <Modal animationType="slide" visible={modalVisible} transparent>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{item.text}</Text>
              <Text style={styles.modalText}>{item.definition}</Text>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: theme.COLOR_PRIMARY }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Return</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  openButton: {
    backgroundColor: theme.COLOR_PRIMARY,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  modalTitle: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
  },
  pink: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
