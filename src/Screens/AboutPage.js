import React from 'react';
import { StyleSheet, Platform, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import * as MailComposer from 'expo-mail-composer';
import * as Linking from 'expo-linking';

import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import icon from '../../assets/icon.png';
import Button from '../Components/shared/Button';

const AboutPage = (props) => {
  const sendEmailAsync = () => {
    MailComposer.composeAsync({
      recipients: ['ultimate.discin@gmail.com'],
      subject: I18n.t('aboutPage.feedback.subject'),
      body: '',
    });
  };

  const timeoutUltimateUrl =
    Platform.OS === 'ios'
      ? 'https://apps.apple.com/mg/app/timeout-ultimate/id1607673533'
      : 'https://play.google.com/store/apps/details?id=com.ultimate.timeout&pli=1';

  return (
    <ScrollView style={styles.aboutPage} contentContainerStyle={styles.aboutPageContainer}>
      <View style={styles.iconArea}>
        <Image source={icon} style={styles.icon} />
        <View>
          <Text style={styles.info}>{I18n.t('aboutPage.copyright', { endYear: new Date().getFullYear() })}</Text>
          <Text style={styles.info}>
            version {Constants.expoConfig.version}, channel {Updates.channel}
          </Text>
          <Text style={styles.info}>{Constants.expoConfig.extra.env}</Text>
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
        icon="mail-outline"
        text={I18n.t('aboutPage.feedback.cta')}
        testID="feedbackButton"
        style={styles.button}
      />
      <Text style={styles.header}>{I18n.t('aboutPage.other.header')}</Text>
      <Text style={styles.text}>{I18n.t('aboutPage.other.text')}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(timeoutUltimateUrl)}>
        <Text style={styles.linkText}>{I18n.t('aboutPage.other.linkText')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  aboutPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
  },
  aboutPageContainer: {
    padding: 20,
    paddingBottom: 50,
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
    fontSize: theme.FONT_SIZE_SMALL,
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
  button: {
    marginTop: 20,
  },
});
