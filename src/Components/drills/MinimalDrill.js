import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrillTypes } from '../../Fixtures/config';

import FitnessDrillIllustration from './FitnessDrillIllustration';
import FrisbeeDrillIllustration from './FrisbeeDrillIllustration';

const MinimalDrill = props => {
  const { drill } = props;

  return (
    <>
      <View style={styles.animation}>
        {drill.type === DrillTypes.FRISBEE && <FrisbeeDrillIllustration drill={drill} minimal />}
        {drill.type === DrillTypes.FITNESS && <FitnessDrillIllustration drill={drill} minimal />}
      </View>
    </>
  );
};

export default MinimalDrill;

const styles = StyleSheet.create({
  animation: {
    flex: 3,
  },
});
