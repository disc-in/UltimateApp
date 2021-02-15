import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import I18n from '../../utils/i18n';
import VimeoVideo from '../shared/VimeoVideo';
import theme from '../../styles/theme.style';
import Button from '../shared/Button';

const FitnessDrillIllustration = ({ drill, startFitness }) => {
  const isUniqueStep = drill.steps.length === 1;

  if (isUniqueStep) {
    const step = drill.steps[0];
    return (
      <View style={styles.video}>
        <VimeoVideo vimeoId={step.vimeoId} sounds={step.sounds} />
      </View>
    );
  } else {
    return (
      <View style={styles.fitnessDrillIllustration}>
        {drill.steps.map((step) => (
          <View style={styles.step} key={step.id.toString()}>
            <Text style={styles.stepTitle}>• {step.repetition} </Text>
            <Text style={styles.stepTitle}>{step.title}</Text>
          </View>
        ))}
        <View style={styles.startButtonWrapper}>
          <Button onPress={startFitness} text={I18n.t('drills.fitnessDrillIllustration.start')} testID="startFitness" />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  fitnessDrillIllustration: {
    flex: 1,
    paddingLeft: 10,
  },
  step: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  stepTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
  },
  startButtonWrapper: {
    marginVertical: 10,
    alignItems: 'center',
  },
  video: {
    height: 250,
    marginBottom: 20,
  },
});

export default FitnessDrillIllustration;
