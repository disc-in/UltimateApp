import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput,
  InteractionManager,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import theme from '../../styles/theme.style';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';

class RenameDrillModal extends React.Component {
  // Enables to open the keyboard when the component is rendered
  inputRef = React.createRef();

  componentDidMount() {
    this.focusInputWithKeyboard();
  }

  focusInputWithKeyboard() {
    InteractionManager.runAfterInteractions(() => {
      this.inputRef.current.focus();
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent
          visible
          onRequestClose={() => {
            this.props.close();

            // Reset the title if the user does not want to change it eventually
            this.props.textModified(this.props.drillTitle);
          }}
        >
          {/* The sole purpose of the three following tags (TouchableOpacity, ScrollView, TouchableWithoutFeedback) is to close the modal when clicking outside of it */}
          <TouchableOpacity
            activeOpacity={1}
            style={styles.touchable}
            onPressOut={() => {
              this.props.close();

              // Reset the title if the user does not want to change it eventually
              this.props.textModified(this.props.drillTitle);
            }}
          >
            {/* keyboardShouldPersistTaps enables to keep the keyboard visible. Otherwise the first press on the validation button will only close the keyboard and not trigger onPress */}
            <ScrollView keyboardShouldPersistTaps="always" directionalLockEnabled style={{ flexGrow: 0 }}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalRenameView}>
                  <Text style={styles.modalRenameText}>{`${this.props.drillTitle}`}</Text>

                  <View style={{ minWidth: '50%', flexDirection: 'row' }}>
                    <TextInput
                      style={styles.input}
                      placeholder={I18n.t('drillEditor.drillManager.clickHereToRename')}
                      onChangeText={(text) => this.props.textModified(text.trim())}
                      ref={this.inputRef}
                    />

                    <MaterialCommunityIcons
                      name="check"
                      color={theme.COLOR_PRIMARY}
                      size={26}
                      onPress={() => {
                        this.props.close();
                        this.props.confirmNewName();
                      }}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalRenameView: {
    margin: 20,
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
  modalRenameText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    minWidth: '90%',
    margin: 5,
    marginBottom: 0,
    flex: 1,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RenameDrillModal;
