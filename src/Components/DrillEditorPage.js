import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import { saveDrill } from '../Store/Actions/drillAction';
import { DrillTypes, IllustrationType } from '../Fixtures/config';
import AnimationEditor from './editor/AnimationEditor';
import FormGroup from './shared/form/FormGroup';
import Input from './shared/form/Input';
import Button from './shared/Button';

const newDrill = {
  type: DrillTypes.FRISBEE,
  author: '',
  title: I18n.t('drillEditorPage.untitledDrill'),
  image: undefined,
  description: '',
  minimalPlayersNumber: undefined,
  equipmentLabel: undefined,
  equipment: undefined,
  durationInMinutes: undefined,
  intensity: undefined,
  goals: [],
  seasonTiming: undefined,
  level: undefined,
  custom: true,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: {
        positions: [[], []],
        ids: [],
        texts: [],
        background: 'endzone',
      },
      instruction: '',
    },
  ],
};

export const DrillEditorPage = (props) => {
  const [currentDrill, setCurrentDrill] = useState(newDrill);

  const onAnimationChange = (animation) => {
    const newCurrentDrill = { ...currentDrill };
    newCurrentDrill.steps[0].illustrationSource = animation;
    setCurrentDrill(newCurrentDrill);
    props.saveDrill(newCurrentDrill);
  };

  return (
    <ScrollView>
      <AnimationEditor onAnimationChange={onAnimationChange} animation={currentDrill.steps[0].illustrationSource} />
      <Formik
        initialValues={currentDrill}
        validationSchema={Yup.object({
          title: Yup.string()
            .trim()
            .required(I18n.t('editor.renamePlayModal.empty'))
            .notOneOf(
              props.customDrills.map((drill) => drill.title),
              I18n.t('editor.renamePlayModal.alreadyExists'),
            ),
          description: Yup.string().trim(),
          author: Yup.string().trim(),
          minimalPlayersNumber: Yup.number().positive(),
          equipment: Yup.string().trim(),
        })}
        onSubmit={(values) => {
          const newCurrentDrill = { ...currentDrill, ...values };
          props.saveDrill(newCurrentDrill);
        }}
      >
        {({ handleSubmit, handleChange, errors, values, touched, isValid }) => (
          <View style={styles.form}>
            <FormGroup>
              <Input fieldName="title" label="Title" />
            </FormGroup>
            <FormGroup>
              <Input fieldName="description" label="Description" />
            </FormGroup>
            <FormGroup>
              <Input fieldName="author" label="Author" />
            </FormGroup>
            <FormGroup>
              <Input fieldName="minimalPlayersNumber" keyboardType="number-pad" label="Minimal number of players" />
            </FormGroup>
            <FormGroup>
              <Input fieldName="equipement" label="Equipment" />
            </FormGroup>
            <FormGroup>
              <Input fieldName="duration" keyboardType="number-pad" label="Duration" />
            </FormGroup>
            <Button onPress={handleSubmit} text={I18n.t('drillEditorPage.cta')} style={styles.cta} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    customDrills: state.customDrills,
  };
};

const mapDispatchToProps = { saveDrill };

export default connect(mapStateToProps, mapDispatchToProps)(DrillEditorPage);

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
  },
  cta: {
    marginTop: 10,
    width: 120,
  },
});
