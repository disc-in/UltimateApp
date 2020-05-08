import React from 'react';
import { StyleSheet, View } from 'react-native';

import DrillIllustration from '../DrillIllustration';

const MinimalDrill = props => {
  const { drill } = props;
  return (
    <>
      <View style={styles.animation}>
        <DrillIllustration drill={drill} minimal />
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
