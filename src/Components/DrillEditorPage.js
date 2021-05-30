import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';

import { DrillTypes, Intensities, Levels, FrisbeeGoals } from '../Fixtures/config';
import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import { showSuccess } from '../utils/flashMessage';
import { generateUuid } from '../utils/uuid';
import { saveDrill } from '../Store/Actions/drillAction';
import Button from './shared/Button';
import Input from './shared/form/Input';
import Label from './shared/form/Label';
import RadioButton from './shared/form/RadioButton';
import Checkbox from './shared/form/Checkbox';

const newStep = {
  id: 0,
  title: '',
  animation: undefined,
  vimeoId: undefined,
  youtube: undefined,
  instruction: undefined,
};

const newDrill = {
  id: generateUuid(),
  custom: true,
  type: DrillTypes.FRISBEE,
  visibleInList: true,
  author: '',
  title: '',
  image: undefined,
  description: undefined,
  minimalPlayersNumber: 2,
  inGame: undefined,
  equipmentLabel: undefined, // Cannot be updated because not used in Frisbee drills
  equipment: undefined,
  durationInMinutes: undefined,
  intensity: undefined,
  goals: [],
  seasonTiming: undefined, // Cannot be updated because not used in Frisbee drills
  level: undefined,
  steps: [newStep],
};

export const DrillEditorPage = (props) => {
  const [currentDrill, setCurrentDrill] = useState(props.route.params?.currentDrill || newDrill);

  const validationSchema = Yup.object({
    author: Yup.string().trim(),
    title: Yup.string()
      .trim()
      .required(I18n.t('editor.playTitle.empty'))
      .notOneOf(
        props.customDrills.filter((existingDrill) => existingDrill.id !== currentDrill.id).map((drill) => drill.title),
        I18n.t('editor.playTitle.alreadyExists'),
      ),
    image: Yup.string().trim().min(1),
    description: Yup.string().trim(),
    minimalPlayersNumber: Yup.number().positive(),
    inGame: Yup.string().trim(),
    equipment: Yup.string().trim(),
    durationInMinutes: Yup.number().positive(),
    intensity: Yup.string().trim().oneOf(Object.values(Intensities)),
    goals: Yup.array(Yup.string().oneOf(Object.values(FrisbeeGoals))),
    level: Yup.string().trim().oneOf(Object.values(Levels)),
    // TODO: Steps validation seems to break saving of several steps
    // steps: Yup.array(Yup.object({
    //   id: Yup.number(),
    //   title: Yup.string().trim(),
    //   animation: Yup.object(),
    //   vimeoId: Yup.string().trim().min(1),
    //   youtube: Yup.string().trim().min(1),
    //   instruction: Yup.string().trim(),
    // })),
  });

  const onAnimationChange = (stepIndex) => {
    return (animation) => {
      const newCurrentDrill = { ...currentDrill };
      newCurrentDrill.steps[stepIndex].animation = animation;
      setCurrentDrill(newCurrentDrill);
    };
  };

  const goToEditAnimation = (step, stepIndex) => {
    props.navigation.navigate('DrillEditorAnimationPage', {
      animation: step.animation,
      onAnimationChange: onAnimationChange(stepIndex),
    });
  };

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
            showSuccess(I18n.t('drillEditorPage.saveSuccess', { title: newCurrentDrill.title }));
            props.navigation.navigate('DrillListPage', { type: DrillTypes.FRISBEE });
          }}
        >
          {({ handleSubmit, handleChange, errors, values, touched, isValid }) => (
            <View>
              <Input fieldName="author" label={I18n.t('drillEditorPage.labels.author')} />
              <Input fieldName="title" label={I18n.t('drillEditorPage.labels.title')} />
              <Input fieldName="image" label={I18n.t('drillEditorPage.labels.image')} />
              <Input fieldName="description" label={I18n.t('drillEditorPage.labels.description')} />
              <Input
                fieldName="minimalPlayersNumber"
                keyboardType="number-pad"
                label={I18n.t('drillEditorPage.labels.minimalPlayersNumber')}
              />
              <Input fieldName="inGame" label={I18n.t('drillEditorPage.labels.inGame')} />
              <Input fieldName="equipement" label={I18n.t('drillEditorPage.labels.equipement')} />
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
                      <Text style={styles.stepHeadertext}>{I18n.t('drillEditorPage.labels.steps.header')}</Text>
                      <Button onPress={() => push({ ...newStep, id: values.steps.length })} text="+" small light />
                    </View>
                    {values.steps.map((step, index) => (
                      <View key={index} style={styles.step}>
                        <View style={styles.stepHeader}>
                          <Button onPress={() => remove(index)} text="-" small light style={styles.button} />
                          <Text style={styles.stepHeadertext}>Step {index + 1}</Text>
                        </View>
                        <Input
                          fieldName={`steps[${index}].title`}
                          label={I18n.t('drillEditorPage.labels.steps.title')}
                        />
                        <Input
                          fieldName={`steps[${index}].instruction`}
                          label={I18n.t('drillEditorPage.labels.steps.instruction')}
                        />
                        <Label
                          fieldName={`steps[${index}].animation`}
                          label={I18n.t('drillEditorPage.labels.steps.animation.label')}
                        >
                          <Button
                            onPress={() => goToEditAnimation(step, index)}
                            text={
                              step.animation
                                ? I18n.t('drillEditorPage.labels.steps.animation.edit')
                                : I18n.t('drillEditorPage.labels.steps.animation.add')
                            }
                            small
                            light
                            style={styles.button}
                          />
                          {step.animation && (
                            <Button
                              onPress={() => onAnimationChange(index)(undefined)}
                              text={I18n.t('drillEditorPage.labels.steps.animation.clear')}
                              small
                              light
                              style={styles.button}
                            />
                          )}
                        </Label>
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
  button: {
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  cta: {
    width: 'auto',
    marginVertical: 20,
  },
});
