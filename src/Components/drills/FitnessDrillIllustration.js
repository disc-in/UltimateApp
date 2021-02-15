import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import I18n from '../../utils/i18n';
import VimeoVideo from '../shared/VimeoVideo';
import theme from '../../styles/theme.style';
import Button from '../shared/Button';

const FitnessDrillIllustration = ({ drill, startFitness }) => {
  const renderStep = ({ index, item }) => {
    return (
      <View style={styles.step}>
        <Text style={styles.stepTitle}>• {item.repetition} </Text>
        <Text style={styles.stepTitle}>{item.title}</Text>
      </View>
    );
  };

  const startButton = () => (
    <View style={styles.startButtonWrapper}>
      <Button
        style={styles.startButton}
        onPress={startFitness}
        text={I18n.t('drills.fitnessDrillIllustration.start')}
        testID="startFitness"
      />
    </View>
  );

  const isUniqueStep = drill.steps.length === 1;

  if (isUniqueStep) {
    return (
      <View style={styles.video}>
        <VimeoVideo vimeoId={vimeoId} sounds={sounds} />
      </View>
    );
  } else {
    return (
      <FlatList
        data={drill.steps}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderStep}
        ListFooterComponent={startButton}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: 250,
  },
  step: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
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
});

export default FitnessDrillIllustration;
