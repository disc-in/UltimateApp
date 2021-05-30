import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { useField } from 'formik';
import { useNavigation } from '@react-navigation/native';

import I18n from '../../../utils/i18n';
import theme from '../../../styles/theme.style';
import Button from '../Button';

const Input = ({ fieldName, label, required, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [field, meta, helpers] = useField(fieldName);
  const navigation = useNavigation();

  const goToEditAnimation = () => {
    navigation.navigate('DrillEditorAnimationPage', {
      animation: field.value,
      onAnimationChange,
    });
  };

  const onAnimationChange = (animation) => {
    helpers.setValue(animation);
  };

  return (
    <View style={styles.group}>
      <View style={styles.label}>
        {required && <Text style={styles.error}>* </Text>}
        <Text>{label}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => goToEditAnimation()}
          text={field.value ? I18n.t('shared.form.animationInput.edit') : I18n.t('shared.form.animationInput.add')}
          small
          light
          style={styles.button}
        />
        {field.value && (
          <Button
            onPress={() => onAnimationChange(undefined)}
            text={I18n.t('shared.form.animationInput.clear')}
            small
            light
            style={styles.button}
          />
        )}
      </View>
      {meta.error && meta.touched && <Text style={styles.error}>{meta.error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  group: {
    marginBottom: 10,
  },
  label: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
});
