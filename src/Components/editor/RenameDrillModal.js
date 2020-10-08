import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, InteractionManager, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import Modal from '../shared/Modal';

const RenameDrillModal = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      inputRef.current.focus();
    });
  }, []);

  return (
    <View>
      <Modal
        title={props.drillTitle}
        visible
        onClose={() => {
          props.close();

          // Reset the title if the user does not want to change it eventually
          props.textModified(props.drillTitle);
        }}
      >
        {/* keyboardShouldPersistTaps enables to keep the keyboard visible. Otherwise the first press on the validation button will only close the keyboard and not trigger onPress */}
        <ScrollView keyboardShouldPersistTaps="always" directionalLockEnabled style={{ flexGrow: 0 }}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={I18n.t('drillEditor.drillManager.clickHereToRename')}
              onChangeText={(text) => props.textModified(text.trim())}
              ref={inputRef}
            />
            <MaterialCommunityIcons
              name="check"
              style={styles.ctaIcon}
              onPress={() => {
                props.close();
                props.confirmNewName();
              }}
            />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexBasis: '80%',
    marginHorizontal: 5,
  },
  ctaIcon: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default RenameDrillModal;
