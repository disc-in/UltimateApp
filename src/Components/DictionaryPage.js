import React, { useState } from 'react';
import { View, StyleSheet, Text, SectionList, Modal, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';

const DictionaryPage = ({ dictionary }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    text: '',
    translation: '',
    definition: '',
  });

  const _onPressItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          _onPressItem(item);
        }}
      >
        <Text style={styles.row}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return <Text style={styles.header}>{section.title}</Text>;
  };

  return (
    <View style={styles.dictionaryPage}>
      <SectionList
        sections={dictionary}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={({ text }) => text}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{selectedItem.text}</Text>
            {selectedItem.translation && (
              <Text style={[styles.modalText, styles.italic]}>
                {I18n.t('dictionaryPage.translation')}
                {selectedItem.translation}
              </Text>
            )}
            <Text style={styles.modalText}>{selectedItem.definition}</Text>
            <TouchableOpacity
              style={styles.returnButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.returnButtonText}>{I18n.t('shared.back')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    dictionary: state.theory.dictionary,
  };
};

export default connect(mapStateToProps)(DictionaryPage);

const styles = StyleSheet.create({
  dictionaryPage: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: theme.COLOR_SECONDARY,
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  modalTitle: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
  },
  modalText: {
    marginBottom: 20,
    fontSize: theme.FONT_SIZE_MEDIUM,
    alignSelf: 'flex-start',
  },
  italic: {
    fontStyle: 'italic',
  },
  returnButton: {
    backgroundColor: theme.MAIN_COLOR,
    borderRadius: 10,
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
