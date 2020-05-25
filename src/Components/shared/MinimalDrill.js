import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrillTypes } from '../../Fixtures/config';

import FitnessDrillIllustration from '../FitnessDrillIllustration';
import FrisbeeDrillIllustration from '../FrisbeeDrillAnimation';

const MinimalDrill = props => {
  const { drill } = props;

  const typeSwitch = () => {
    if (drill.type === DrillTypes.FRISBEE) {
      return <FrisbeeDrillIllustration drill={drill} minimal />;
    } else {
      return <FitnessDrillIllustration drill={drill} minimal />;
    }
  };

  return (
    <>
      <View style={styles.animation}>{typeSwitch()}</View>
    </>
  );
};

export default MinimalDrill;

const styles = StyleSheet.create({
  animation: {
    flex: 3,
  },
});
