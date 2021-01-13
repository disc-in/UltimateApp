import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as MailComposer from 'expo-mail-composer';
import * as Linking from 'expo-linking';

import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import icon from '../../assets/icon.png';
import Button from './shared/Button';

const AboutPage = (props) => {
  const sendEmailAsync = () => {
    const result = MailComposer.composeAsync({
      recipients: ['ultimate.discin@gmail.com'],
      subject: I18n.t('aboutPage.feedback.subject'),
      body: '',
    });

    alert(result.status);
  };

  return (
    <ScrollView style={styles.aboutPage}>
      <View style={styles.iconArea}>
        <Image source={icon} style={styles.icon} />
        <View>
          <Text style={styles.info}>{I18n.t('aboutPage.copyright', { endYear: new Date().getFullYear() })}</Text>
          <Text style={styles.info}>{I18n.t('aboutPage.version', { version: Constants.manifest.version })}</Text>
        </View>
      </View>
      <Text style={styles.header}>{I18n.t('aboutPage.about.header')}</Text>
      <Text style={styles.text}>{I18n.t('aboutPage.about.text')}</Text>
      <Text style={styles.header}>{I18n.t('aboutPage.acknowledgements.header')}</Text>
      <Text style={styles.text}>{I18n.t('aboutPage.acknowledgements.text')}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(I18n.t('aboutPage.acknowledgements.linkUrl'))}>
        <Text style={styles.linkText}>{I18n.t('aboutPage.acknowledgements.linkText')}</Text>
      </TouchableOpacity>
      <Text style={styles.header}>{I18n.t('aboutPage.contributing.header')}</Text>
      <Text style={styles.text}>{I18n.t('aboutPage.contributing.text')}</Text>
      <Text style={styles.header}>{I18n.t('aboutPage.feedback.header')}</Text>
      <Text style={styles.text}>{I18n.t('aboutPage.feedback.text')}</Text>
      <Button
        onPress={sendEmailAsync}
        small
        icon="email-outline"
        text={I18n.t('aboutPage.feedback.cta')}
        testID="feedbackButton"
        style={{ marginTop: 5 }}
      />
    </ScrollView>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  aboutPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
    padding: 20,
  },
  iconArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  info: {
    marginLeft: 10,
    color: theme.COLOR_SECONDARY,
  },
  header: {
    marginTop: 10,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
  },
  text: {
    marginTop: 5,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_SECONDARY,
  },
  linkText: {
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
