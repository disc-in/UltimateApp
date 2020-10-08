import React from 'react';
import { StyleSheet, View, Text, TextInput, InteractionManager, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import Modal from '../shared/Modal';

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
          title={this.props.drillTitle}
          visible
          onClose={() => {
            this.props.close();

            // Reset the title if the user does not want to change it eventually
            this.props.textModified(this.props.drillTitle);
          }}
        >
          {/* keyboardShouldPersistTaps enables to keep the keyboard visible. Otherwise the first press on the validation button will only close the keyboard and not trigger onPress */}
          <ScrollView keyboardShouldPersistTaps="always" directionalLockEnabled style={{ flexGrow: 0 }}>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder={I18n.t('drillEditor.drillManager.clickHereToRename')}
                onChangeText={(text) => this.props.textModified(text.trim())}
                ref={this.inputRef}
              />
              <MaterialCommunityIcons
                name="check"
                style={styles.ctaIcon}
                onPress={() => {
                  this.props.close();
                  this.props.confirmNewName();
                }}
              />
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexBasis: '80%',
    margin: 5,
    marginBottom: 0,
    flex: 1,
  },
  ctaIcon: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default RenameDrillModal;
