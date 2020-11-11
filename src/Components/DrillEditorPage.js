import React, { useState } from 'react';
import { View } from 'react-native';

import I18n from '../utils/i18n';
import { DrillTypes, IllustrationType } from '../Fixtures/config';
import AnimationEditor from './editor/AnimationEditor';

const newDrill = {
  type: DrillTypes.FRISBEE,
  author: 'My Drills',
  title: I18n.t('drillEditorPage.untitledDrill'),
  image: undefined,
  description: '',
  minimalPlayersNumber: undefined,
  equipmentLabel: undefined,
  equipment: undefined,
  durationInMinutes: undefined,
  intensity: undefined,
  goals: undefined,
  seasonTiming: undefined,
  level: undefined,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: {
        positions: [[], []],
        ids: [],
        texts: [],
        background: 'endzone',
      },
      instruction: '',
    },
  ],
};

export const DrillEditorPage = (props) => {
  const [currentDrill, setCurrentDrill] = useState(newDrill);

  const onAnimationChange = (animation) => {
    const newCurrentDrill = { ...currentDrill };
    newCurrentDrill.steps[0].illustrationSource = animation;
    setCurrentDrill(newCurrentDrill);
  };

  return (
    <View>
      <AnimationEditor onAnimationChange={onAnimationChange} animation={currentDrill.steps[0].illustrationSource} />
    </View>
  );
};

export default DrillEditorPage;
