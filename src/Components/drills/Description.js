import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';
import { DrillTypes } from '../../Fixtures/config';

const Description = ({ drill, minimal }) => {
  const itemStyle = minimal ? styles.minimalDescriptionItem : styles.descriptionItem;
  const minimalTweak = minimal ? styles.minimal : undefined;
  return (
    <View style={styles.description}>
      {!minimal && (
        <>
          <View style={styles.lines} />
          <View style={itemStyle}>
            <Text style={[styles.descriptionTitle, minimalTweak]}>{I18n.t('drills.description.goal')}</Text>
            <Text style={[styles.descriptionText, minimalTweak]}>
              {drill.goals
                .map((goal) =>
                  I18n.t(`data.fitnessGoals.${goal}`, { defaults: [{ scope: `data.frisbeeGoals.${goal}` }] }),
                )
                .join(', ')}
            </Text>
          </View>
        </>
      )}
      <View style={styles.lines} />
      <View style={itemStyle}>
        <Text style={[styles.descriptionTitle, minimalTweak]}>{I18n.t('drills.description.equipment')}</Text>
        <Text style={[styles.descriptionText, minimalTweak]}>{drill.equipment}</Text>
      </View>
      <View style={styles.lines} />
      <View style={itemStyle}>
        <Text style={[styles.descriptionTitle, minimalTweak]}>{I18n.t('drills.description.description')}</Text>
        <Text style={[styles.descriptionText, minimalTweak]}>{drill.description}</Text>
      </View>
      {drill.type === DrillTypes.FRISBEE && drill.inGame && (
        <>
          <View style={styles.lines} />
          <View style={itemStyle}>
            <Text style={[styles.descriptionTitle, minimalTweak]}>{I18n.t('drills.description.inGame')}</Text>
            <Text style={[styles.descriptionText, minimalTweak]}>{drill.inGame}</Text>
          </View>
        </>
      )}
      <View style={styles.lines} />
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    paddingBottom: 10,
  },
  descriptionItem: {
    padding: 20,
  },
  minimalDescriptionItem: {
    padding: 10,
  },
  descriptionTitle: {
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_SECONDARY,
  },
  minimal: {
    textAlign: 'left',
  },
  lines: {
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
});

export default Description;
