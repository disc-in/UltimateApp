import React from 'react';
import { Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';
import theme from '../../styles/theme.style';
import HeaderButton from '../shared/HeaderButton';

export const FeedbackButton = (props) => {
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

  return <HeaderButton icon="email-outline" onPress={feedback} />;
};

export default FeedbackButton;
