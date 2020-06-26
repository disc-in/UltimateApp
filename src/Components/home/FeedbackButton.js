import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';
import theme from '../../styles/theme.style';

export const FeedbackButton = props => {
  const feedback = () => {
    Alert.alert(
      I18n.t('feedback.alert.title'),
      I18n.t('feedback.alert.content'),
      [
        { text: I18n.t('feedback.alert.cancel'), style: 'cancel' },
        { text: I18n.t('feedback.alert.cta'), onPress: sendEmailAsync },
      ],
      { cancelable: true },
    );
  };

  const sendEmailAsync = () => {
    const result = MailComposer.composeAsync({
      recipients: ['ultimate.discin@gmail.com'],
      subject: I18n.t('feedback.subject'),
      body: '',
    });

    alert(result.status);
  };

  return (
    <TouchableOpacity style={styles.feedbackButton} onPress={() => feedback()} testID="feedbackButton">
      <MaterialCommunityIcons name="email-outline" color={theme.COLOR_PRIMARY} size={26} />
    </TouchableOpacity>
  );
};

export default FeedbackButton;

const styles = StyleSheet.create({
  feedbackButton: {
    marginRight: 20,
  },
});
