import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { DrillTypes, FrisbeeGoals } from '../Fixtures/config';
import I18n from '../utils/i18n';
import { saveDrill } from '../Store/Actions/drillAction';
import Button from './shared/Button';

export const DrillEditorPage = (props) => {
  const newDrill = {
    id: 9999,
    custom: true,
    type: DrillTypes.FRISBEE,
    visibleInList: true,
    author: 'Martin',
    title: 'Mon drill',
    image: undefined,
    description: 'Ma super description',
    minimalPlayersNumber: 8,
    // inGame: "Le Split permet d'isoler une paire de joueurs afin d'éviter les poachs des autres défenseurs",
    equipmentLabel: undefined,
    equipment: '1 disque',
    durationInMinutes: undefined,
    intensity: undefined,
    goals: [],
    seasonTiming: undefined,
    level: undefined,
    steps: [
      {
        id: 1,
        title: 'Première étape',
        animation: {
          positions: [[], []],
          ids: [],
          texts: [],
          background: 'endzone',
        },
        instruction: 'Il faut courir',
      },
    ],
  };
  const handleSubmit = () => {
    props.saveDrill(newDrill);
    props.navigation.navigate('DrillListPage', { type: DrillTypes.FRISBEE });
  };

  return (
    <View style={styles.drillEditorPage}>
      <Text>Editor</Text>
      <Text>{newDrill.title}</Text>
      <Button onPress={handleSubmit} text={I18n.t('drillEditorPage.cta')} style={styles.cta} />
    </View>
  );
};

const mapDispatchToProps = { saveDrill };

export default connect(null, mapDispatchToProps)(DrillEditorPage);

const styles = StyleSheet.create({
  drillEditorPage: {
    flex: 1,
  },
});
