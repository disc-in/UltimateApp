import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, InteractionManager, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import I18n from '../../utils/i18n';
import { showSuccess } from '../../utils/flashMessage';
import { renamePlay } from '../../Store/Actions/playAction';
import Modal from '../shared/Modal';
import Button from '../shared/Button';

export const RenamePlayModal = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      inputRef.current.focus();
    });
  }, []);

  return (
    <View>
      <Modal
        title={props.currentPlay.title || I18n.t('playEditorPage.untitledPlay')}
        visible
        onClose={() => {
          props.close();
        }}
      >
        {/* keyboardShouldPersistTaps enables to keep the keyboard visible.*/
        /* Otherwise the first press on the validation button will only close the keyboard and not trigger onPress */}
        <ScrollView keyboardShouldPersistTaps="always" directionalLockEnabled style={{ flexGrow: 0 }}>
          <Formik
            initialValues={{ name: props.currentPlay.title }}
            validationSchema={Yup.object({
              name: Yup.string()
                .trim()
                .required(I18n.t('editor.renamePlayModal.empty'))
                .notOneOf(
                  props.customPlays.map((play) => play.title),
                  I18n.t('editor.renamePlayModal.alreadyExists'),
                ),
            })}
            onSubmit={(values) => {
              props.renamePlay(props.currentPlay.uuid, values.name);
              props.currentPlay.title = values.name;
              props.onRename();
              showSuccess(I18n.t('editor.renamePlayModal.renameSuccess'));
              props.close();
            }}
          >
            {({ handleSubmit, handleChange, errors, values, touched, isValid }) => (
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder={I18n.t('editor.renamePlayModal.placeholder')}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  ref={inputRef}
                />
                {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
                <Button
                  onPress={handleSubmit}
                  text={I18n.t('editor.renamePlayModal.cta')}
                  style={styles.cta}
                  disabled={!isValid}
                />
              </View>
            )}
          </Formik>
        </ScrollView>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    customPlays: state.customPlays,
  };
};

const mapDispatchToProps = { renamePlay };

export default connect(mapStateToProps, mapDispatchToProps)(RenamePlayModal);

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
  },
  input: {
    flexBasis: '80%',
    marginHorizontal: 5,
  },
  cta: {
    marginTop: 10,
    width: 120,
  },
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
});
