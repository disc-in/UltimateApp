import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import DrillIllustration from '../DrillIllustration';
import theme from '../../styles/theme.style';

const MinimalDrill = props => {
  const { drill } = props;
  return (
    <>
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>Goals</Text>
          <Text style={styles.descriptionText}>{drill.goals ? drill.goals.join(', ') : ''}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>Equipment</Text>
          <Text style={styles.descriptionText}>{drill.equipment}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{drill.description}</Text>
        </View>
      </View>
      <View style={styles.animation}>
        <DrillIllustration drill={drill} />
      </View>
    </>
  );
};

export default MinimalDrill;

const styles = StyleSheet.create({
  description: {
    padding: 5,
    paddingLeft: 20,
    maxHeight: '20%',
  },
  descriptionItem: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  descriptionTitle: {
    flexGrow: 0,
    flexShrink: 0,
    width: '25%',
    fontWeight: 'bold',
    color: theme.COLOR_PRIMARY,
  },
  animation: {
    flex: 3,
  },
  descriptionText: {
    flexGrow: 1,
    color: theme.COLOR_SECONDARY,
  },
});
