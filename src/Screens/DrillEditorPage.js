import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';

import { DrillTypes, Intensities, Levels, FrisbeeGoals } from '../Fixtures/config';
import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import { showSuccess } from '../utils/flashMessage';
import { generateRandomHex } from '../utils/random';
import { saveDrill } from '../Store/Actions/drillAction';
import Button from '../Components/shared/Button';
import Input from '../Components/shared/form/Input';
import RadioButton from '../Components/shared/form/RadioButton';
import Checkbox from '../Components/shared/form/Checkbox';
import AnimationInput from '../Components/shared/form/AnimationInput';
import HeaderButton from '../Components/shared/HeaderButton';

const newStep = {
  id: 0,
  title: '',
  animation: undefined,
  vimeoId: undefined,
  youtube: undefined,
  instruction: undefined,
};

const newDrill = {
  id: generateRandomHex(),
  custom: true,
  type: DrillTypes.FRISBEE,
  visibleInList: true,
  author: '',
  title: '',
  image: undefined,
  description: undefined,
  minimalPlayersNumber: 2,
  inGame: undefined,
  equipment: undefined,
  durationInMinutes: undefined,
  intensity: undefined,
  goals: [],
  level: undefined,
  steps: [newStep],
};

export const DrillEditorPage = (props) => {
  const [currentDrill, setCurrentDrill] = useState(props.route.params?.currentDrill || newDrill);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          icon="download"
          onPress={() => props.navigation.navigate('DrillImporterPage', { source: 'customDrills' })}
        />
      ),
    });
  });

  const validationSchema = Yup.object({
    author: Yup.string().trim(),
    title: Yup.string()
      .trim()
      .required(I18n.t('drillEditorPage.errors.title.empty'))
      .notOneOf(
        props.customDrills.filter((existingDrill) => existingDrill.id !== currentDrill.id).map((drill) => drill.title),
        I18n.t('drillEditorPage.errors.title.alreadyExists'),
      ),
    image: Yup.string().trim().min(1),
    description: Yup.string().trim(),
    minimalPlayersNumber: Yup.number().positive(),
    inGame: Yup.string().trim(),
    equipment: Yup.string().trim(),
    durationInMinutes: Yup.number().positive(),
    intensity: Yup.string().trim().oneOf(Object.values(Intensities)),
    goals: Yup.array(Yup.string().oneOf(Object.values(FrisbeeGoals))).min(
      1,
      I18n.t('drillEditorPage.errors.goals.empty'),
    ),
    level: Yup.string().trim().oneOf(Object.values(Levels)),
    steps: Yup.array(
      Yup.object({
        id: Yup.number(),
        title: Yup.string().trim(),
        animation: Yup.object(),
        vimeoId: Yup.string().trim().min(1),
        youtube: Yup.string().trim().min(1),
        instruction: Yup.string().trim(),
      }),
    )
      .required()
      .min(1, I18n.t('drillEditorPage.errors.steps.empty')),
  });

  const behavior = Platform.select({
    ios: 'padding',
    android: 'height',
  });

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={behavior}>
      <ScrollView style={styles.drillEditorPage}>
        <Formik
          initialValues={currentDrill}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            props.saveDrill(values);
            showSuccess(I18n.t('drillEditorPage.saveSuccess', { title: values.title }));
            props.navigation.navigate('DrillPage', { id: values.id });
          }}
        >
          {({ handleSubmit, handleChange, errors, values, touched, isValid }) => (
            <View>
              <Input fieldName="author" label={I18n.t('drillEditorPage.labels.author')} />
              <Input fieldName="title" label={I18n.t('drillEditorPage.labels.title')} required />
              <Input fieldName="image" label={I18n.t('drillEditorPage.labels.image')} />
              <Input fieldName="description" label={I18n.t('drillEditorPage.labels.description')} multiline />
              <Input
                fieldName="minimalPlayersNumber"
                keyboardType="number-pad"
                label={I18n.t('drillEditorPage.labels.minimalPlayersNumber')}
              />
              <Input fieldName="inGame" label={I18n.t('drillEditorPage.labels.inGame')} multiline />
              <Input fieldName="equipment" label={I18n.t('drillEditorPage.labels.equipment')} />
              <Input
                fieldName="durationInMinutes"
                keyboardType="number-pad"
                label={I18n.t('drillEditorPage.labels.durationInMinutes')}
              />
              <RadioButton
                fieldName="intensity"
                label={I18n.t('drillEditorPage.labels.intensity')}
                values={Object.values(Intensities)}
                labels={Object.values(Intensities).map((intensity) => I18n.t(`data.intensities.${intensity}`))}
              />
              <Checkbox
                fieldName="goals"
                label={I18n.t('drillEditorPage.labels.goals')}
                values={Object.values(FrisbeeGoals)}
                labels={Object.values(FrisbeeGoals).map((goal) => I18n.t(`data.frisbeeGoals.${goal}`))}
              />
              <RadioButton
                fieldName="level"
                label={I18n.t('drillEditorPage.labels.level')}
                values={Object.values(Levels)}
                labels={Object.values(Levels).map((level) => I18n.t(`data.levels.${level}`))}
              />
              <FieldArray
                name="steps"
                render={({ push, remove }) => (
                  <View>
                    <View style={styles.stepHeader}>
                      <Text style={styles.stepHeadertext}>{I18n.t('drillEditorPage.labels.stepsHeader')}</Text>
                      <Button
                        onPress={() => push({ ...newStep, id: values.steps.length })}
                        text="+"
                        small
                        light
                        testID="addStep"
                      />
                    </View>
                    <Text style={styles.error}>{errors.steps}</Text>
                    {values.steps.map((step, index) => (
                      <View key={index} style={styles.step}>
                        <View style={styles.stepHeader}>
                          <Button
                            onPress={() => remove(index)}
                            text="-"
                            small
                            light
                            style={styles.button}
                            testID="removeStep"
                          />
                          <Text style={styles.stepHeadertext}>
                            {I18n.t('drillEditorPage.labels.steps.header', { count: index + 1 })}
                          </Text>
                        </View>
                        <Input
                          fieldName={`steps[${index}].title`}
                          label={I18n.t('drillEditorPage.labels.steps.title')}
                        />
                        <Input
                          fieldName={`steps[${index}].instruction`}
                          label={I18n.t('drillEditorPage.labels.steps.instruction')}
                          multiline
                        />
                        <AnimationInput
                          fieldName={`steps[${index}].animation`}
                          label={I18n.t('drillEditorPage.labels.steps.animation')}
                        />
                        <Input
                          fieldName={`steps[${index}].vimeoId`}
                          label={I18n.t('drillEditorPage.labels.steps.vimeoId')}
                        />
                        <Input
                          fieldName={`steps[${index}].youtube`}
                          label={I18n.t('drillEditorPage.labels.steps.youtube')}
                        />
                      </View>
                    ))}
                  </View>
                )}
              />
              <Button
                onPress={handleSubmit}
                text={I18n.t('drillEditorPage.cta')}
                style={styles.cta}
                testID="submitButton"
              />
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
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    padding: 10,
    paddingRight: 20,
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
    marginBottom: 5,
  },
  stepHeadertext: {
    fontSize: theme.FONT_SIZE_LARGE,
    marginRight: 10,
  },
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
  button: {
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  cta: {
    width: 'auto',
    marginVertical: 20,
  },
});
