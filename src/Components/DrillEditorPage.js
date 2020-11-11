import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import { saveDrill } from '../Store/Actions/drillAction';
import { DrillTypes, IllustrationType } from '../Fixtures/config';
import AnimationEditor from './editor/AnimationEditor';
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
            <Text>Title</Text>
            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}
            <TextInput onChangeText={handleChange('title')} value={values.title} />
            <Text>Description</Text>
            {touched.description && errors.description && <Text style={styles.error}>{errors.description}</Text>}
            <TextInput onChangeText={handleChange('description')} value={values.description} />
            <Text>Author</Text>
            {touched.author && errors.author && <Text style={styles.error}>{errors.author}</Text>}
            <TextInput onChangeText={handleChange('author')} value={values.author} />
            <Text>Number of players</Text>
            {touched.minimalPlayersNumber && errors.minimalPlayersNumber && (
              <Text style={styles.error}>{errors.minimalPlayersNumber}</Text>
            )}
            <TextInput
              onChangeText={handleChange('minimalPlayersNumber')}
              value={values.minimalPlayersNumber}
              keyboardType="number-pad"
            />
            <Text>Equipment</Text>
            {touched.equipement && errors.equipement && <Text style={styles.error}>{errors.equipement}</Text>}
            <TextInput onChangeText={handleChange('equipement')} value={values.equipement} />
            <Text>Duration</Text>
            {touched.duration && errors.duration && <Text style={styles.error}>{errors.duration}</Text>}
            <TextInput onChangeText={handleChange('duration')} value={values.duration} keyboardType="number-pad" />
            <Button onPress={handleSubmit} text={I18n.t('editor.renamePlayModal.cta')} style={styles.cta} />
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
    padding: 10,
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
