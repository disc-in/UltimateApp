import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, InteractionManager, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import { renameDrill } from '../../Store/Actions/drillAction';
import Modal from '../shared/Modal';

const RenameDrillModal = (props) => {
  const inputRef = useRef();

  const [newTitle, setNewTitle] = useState('');
  const [alreadyExists, setAlreadyExists] = useState(false);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      inputRef.current.focus();
    });
  }, []);

  const checkNewTitle = (text) => {
    setNewTitle(text);
    setAlreadyExists(props.customDrills.some((drill) => drill.title === text));
  };

  return (
    <View>
      <Modal
        title={props.currentDrill.title}
        visible
        onClose={() => {
          props.close();
        }}
      >
        {/* keyboardShouldPersistTaps enables to keep the keyboard visible.*/
        /* Otherwise the first press on the validation button will only close the keyboard and not trigger onPress */}
        <ScrollView keyboardShouldPersistTaps="always" directionalLockEnabled style={{ flexGrow: 0 }}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={I18n.t('editor.renameDrillModal.placeholder')}
              onChangeText={checkNewTitle}
              ref={inputRef}
            />
            <MaterialCommunityIcons
              name="check"
              style={styles.ctaIcon}
              onPress={() => {
                if (!alreadyExists) {
                  props.renameDrill(props.currentDrill.title, newTitle);
                  props.currentDrill.title = newTitle;
                  props.onRename();
                  props.close();
                }
              }}
            />
          </View>
          {alreadyExists && <Text style={styles.alreadyExists}>{I18n.t('editor.renameDrillModal.alreadyExists')}</Text>}
        </ScrollView>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    customDrills: state.customDrills,
  };
};

const mapDispatchToProps = { renameDrill };

export default connect(mapStateToProps, mapDispatchToProps)(RenameDrillModal);

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
  alreadyExists: {
    fontStyle: 'italic',
    color: 'red',
  },
});
