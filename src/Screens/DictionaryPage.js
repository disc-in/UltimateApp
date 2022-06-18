import React, { useState } from 'react';
import { View, StyleSheet, Text, SectionList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import Modal from '../Components/shared/Modal';

const DictionaryPage = ({ dictionary }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    text: '',
    translation: '',
    definition: '',
  });

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      >
        <Text style={styles.row}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.dictionaryPage}>
      <SectionList
        sections={dictionary}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
        keyExtractor={({ text }) => text}
      />
      <Modal title={selectedItem.text} visible={modalVisible} onClose={() => setModalVisible(false)}>
        {selectedItem.translation && (
          <Text style={[styles.modalText, styles.italic]}>
            {I18n.t('dictionaryPage.translation')}
            {selectedItem.translation}
          </Text>
        )}
        <Text style={styles.modalText}>{selectedItem.definition}</Text>
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
    backgroundColor: theme.MAIN_COLOR,
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
  },
  modalText: {
    marginBottom: 20,
    fontSize: theme.FONT_SIZE_MEDIUM,
    alignSelf: 'flex-start',
  },
  italic: {
    fontStyle: 'italic',
  },
});
