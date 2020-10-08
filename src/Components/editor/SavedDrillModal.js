import React from 'react';
import { StyleSheet, View, Modal, Text, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import theme from '../../styles/theme.style';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';

class SavedDrillModal extends React.Component {
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent
          visible
          onRequestClose={() => {
            this.props.close();
          }}
        >
          {/* The sole purpose of the two following tags (TouchableOpacity, TouchableWithoutFeedback) is to close the modal when clicking outside of it */}
          <TouchableOpacity
            activeOpacity={1}
            style={styles.touchable}
            onPressOut={() => {
              this.props.close();
            }}
          >
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={[styles.modalTitleView]}>
                <Text style={styles.modalTitleText}>{`${I18n.t('drillEditor.drillManager.savedDrills')}`}</Text>
                <FlatList
                  data={this.props.savedDrills}
                  keyExtractor={(item) => item.title.toString()}
                  style={{ flexGrow: 0, backgroundColor: theme.BACKGROUND_COLOR }}
                  renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                      style={{ backgroundColor: theme.BACKGROUND_COLOR }}
                      onPress={() => {
                        this.props.close();
                        this.props.openDrill(item);
                      }}
                    >
                      <View style={styles.item}>
                        <Text>{item.title}</Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            borderRadius: 10,
                            paddingLeft: 10,
                          }}
                        >
                          <MaterialCommunityIcons
                            style={{ borderRadius: 10 }}
                            name="trash-can"
                            color={theme.COLOR_PRIMARY}
                            size={22}
                            onPress={() => {
                              // If the last saved drill is removed, close the modal
                              if (this.props.savedDrills.length === 1) this.props.close();
                              this.props.deleteDrill(item);
                            }}
                          />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalTitleView: {
    margin: 20,
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
    backgroundColor: theme.BACKGROUND_COLOR,
  },
  modalTitleText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  item: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    padding: 8,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedDrillModal;
