import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';

import { DrillTypes, FrisbeeGoals } from '../Fixtures/config';
import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import { generateUuid } from '../utils/uuid';
import { saveDrill } from '../Store/Actions/drillAction';
import Button from './shared/Button';
import Input from './shared/form/Input';

// TODO: Stocker correctement les champs number
// TODO: Gérer différemment le partage de drill de l'app et de drill custom (pour l'instant empêcher ?)
// TODO: Pouvoir créer une animation
// TODO: Écrire des tests plus précis du formulaire
// TODO: Meilleures validations (notamment sur steps)

const newStep = {
  id: 0,
  title: '',
  animation: {
    positions: [[], []],
    ids: [],
    texts: [],
    background: 'endzone',
  },
  vimeoId: undefined,
  youtube: undefined,
  instruction: '',
};

const newDrill = {
  id: generateUuid(),
  custom: true,
  type: DrillTypes.FRISBEE,
  visibleInList: true,
  author: 'Martin',
  title: 'Mon drill',
  image: undefined,
  description: 'Ma super description',
  minimalPlayersNumber: 8, // Should be a string, then casted back to integer before save?
  inGame: 'ça sert un peu',
  equipmentLabel: undefined,
  equipment: '1 disque',
  durationInMinutes: undefined,
  intensity: undefined,
  goals: [],
  seasonTiming: undefined,
  level: undefined,
  steps: [newStep],
};

export const DrillEditorPage = (props) => {
  const [currentDrill, setCurrentDrill] = useState(newDrill);

  const validationSchema = Yup.object({
    title: Yup.string()
      .trim()
      .required(I18n.t('editor.playTitle.empty'))
      .notOneOf(
        props.customDrills.map((drill) => drill.title),
        I18n.t('editor.playTitle.alreadyExists'),
      ),
    description: Yup.string().trim(),
    author: Yup.string().trim(),
    minimalPlayersNumber: Yup.number().positive(),
    equipment: Yup.string().trim(),
  });

  const behavior = Platform.select({
    ios: 'padding',
    android: 'height',
  });

  return (
    <KeyboardAvoidingView style={styles.drillEditorPage} behavior={behavior}>
      <ScrollView>
        <Formik
          initialValues={currentDrill}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const newCurrentDrill = { ...currentDrill, ...values };
            props.saveDrill(newCurrentDrill);
            props.navigation.navigate('DrillListPage', { type: DrillTypes.FRISBEE });
          }}
        >
          {({ handleSubmit, handleChange, errors, values, touched, isValid }) => (
            <View>
              <Input fieldName="author" label="Author" />
              <Input fieldName="title" label="Title" />
              <Input fieldName="image" label="URL de l'image" />
              <Input fieldName="description" label="Description" />
              <Input fieldName="minimalPlayersNumber" keyboardType="number-pad" label="Minimal number of players" />
              <Input fieldName="inGame" label="Utilité en jeu" />
              <Input fieldName="equipement" label="Equipment" />
              <Input fieldName="duration" keyboardType="number-pad" label="Duration" />
              <FieldArray
                name="steps"
                render={({ push, remove }) => (
                  <View>
                    <View style={styles.stepHeader}>
                      <Text style={styles.stepHeadertext}>Steps</Text>
                      <Button onPress={() => push({ ...newStep, id: values.steps.length })} text="+" small light />
                    </View>
                    {values.steps.map((step, index) => (
                      <View style={styles.step}>
                        <Text>Step {index + 1}</Text>
                        <Input fieldName={`steps[${index}].title`} label="Title" />
                        <Input fieldName={`steps[${index}].instruction`} label="Instructions" />
                        <Input fieldName={`steps[${index}].vimeoId`} label="Identifiant Vimeo" />
                        <Input fieldName={`steps[${index}].youtube`} label="URL Youtube" />
                        <Button onPress={() => remove(index)} text="-" small light style={styles.button} />
                      </View>
                    ))}
                  </View>
                )}
              />
              <Button onPress={handleSubmit} text={I18n.t('drillEditorPage.cta')} style={styles.cta} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
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
  drillEditorPage: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    padding: 10,
  },
  step: {
    paddingBottom: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.BORDER_COLOR_BUTTON,
  },
  stepHeader: {
    flexDirection: 'row',
  },
  stepHeadertext: {
    fontSize: theme.FONT_SIZE_LARGE,
    marginRight: 10,
  },
  button: {
    alignSelf: 'flex-start',
  },
});
