import React, { useState, useRef } from 'react';
import { StyleSheet, Platform, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import { showError } from '../../utils/flashMessage';
import { createLink } from '../../utils/firebase';

const ShareDrill = ({ drill, light }) => {
  const share = async () => {
    const url = await createLink(
      'drills/' + drill.id,
      drill.title,
      I18n.t('drills.shareDrill.description', { description: drill.description.slice(0, 70) }),
    );

    const youtubeVideos = drill.steps.reduce((total, step) => {
      const stepvideo = step.youtube ? `${step.title} - ${step.youtube}\n` : '';
      return total + stepvideo;
    }, '');

    Share.share({
      title: I18n.t('drills.shareDrill.title', { drillTitle: drill.title }),
      message: I18n.t('drills.shareDrill.content', { url, youtubeVideos, count: youtubeVideos.length }),
      url,
    }).catch((error) => showError(I18n.t('drills.shareDrill.error')));
  };

  const lightColor = light ? styles.lightColor : undefined;
  return (
    <TouchableOpacity onPress={share} testID="shareButton">
      <Ionicons
        name={Platform.select({
          ios: 'ios-share-outline',
          default: 'share-social',
        })}
        style={[styles.icon, lightColor]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    marginRight: 20,
  },
  lightColor: {
    color: theme.COLOR_PRIMARY_LIGHT,
  },
});

export default ShareDrill;
