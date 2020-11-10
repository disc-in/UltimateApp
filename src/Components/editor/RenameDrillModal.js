import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, InteractionManager, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import I18n from '../../utils/i18n';
import { showSuccess } from '../../utils/flashMessage';
import { renameDrill } from '../../Store/Actions/drillAction';
import Modal from '../shared/Modal';
import Button from '../shared/Button';

export const RenameDrillModal = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      inputRef.current.focus();
    });
  }, []);

  return (
    <View>
      <Modal
        title={props.currentDrill.title || I18n.t('playEditorPage.untitledPlay')}
        visible
        onClose={() => {
          props.close();
        }}
      >
        {/* keyboardShouldPersistTaps enables to keep the keyboard visible.*/
        /* Otherwise the first press on the validation button will only close the keyboard and not trigger onPress */}
        <ScrollView keyboardShouldPersistTaps="always" directionalLockEnabled style={{ flexGrow: 0 }}>
          <Formik
            initialValues={{ name: props.currentDrill.title }}
            validationSchema={Yup.object({
              name: Yup.string()
                .trim()
                .required(I18n.t('editor.renameDrillModal.empty'))
                .notOneOf(
                  props.customDrills.map((drill) => drill.title),
                  I18n.t('editor.renameDrillModal.alreadyExists'),
                ),
            })}
            onSubmit={(values) => {
              props.renameDrill(props.currentDrill.title, values.name);
              props.currentDrill.title = values.name;
              props.onRename();
              showSuccess(I18n.t('editor.renameDrillModal.renameSuccess'));
              props.close();
            }}
          >
            {({ handleSubmit, handleChange, errors, values, touched, isValid }) => (
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder={I18n.t('editor.renameDrillModal.placeholder')}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  ref={inputRef}
                />
                {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
                <Button
                  onPress={handleSubmit}
                  text={I18n.t('editor.renameDrillModal.cta')}
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
    customDrills: state.customDrills,
  };
};

const mapDispatchToProps = { renameDrill };

export default connect(mapStateToProps, mapDispatchToProps)(RenameDrillModal);

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
