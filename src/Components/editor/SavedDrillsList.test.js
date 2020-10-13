import React from 'react';
import { create, act } from 'react-test-renderer';

import animationSquare from '../../Fixtures/Animation/AnimationSquare';

import SavedDrillsList from './SavedDrillsList';

describe('<SavedDrillsList />', () => {
  const onOpen = jest.fn();
  const saveCurrentDrill = jest.fn();
  const onDelete = jest.fn();
  const isDrillSaved = true;
  const drillTitle = 'Title';
  const savedDrills = [{ drill: animationSquare, title: 'Square' }];

  it('renders correctly with drills', async () => {
    const tree = create(
      <SavedDrillsList
        savedDrills={savedDrills}
        isDrillSaved={isDrillSaved}
        drillTitle={drillTitle}
        onDelete={onDelete}
        onOpen={onOpen}
        saveCurrentDrill={saveCurrentDrill}
      />,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });

  it('renders an empty state with no drills', async () => {
    const tree = create(
      <SavedDrillsList
        savedDrills={[]}
        isDrillSaved={isDrillSaved}
        drillTitle={drillTitle}
        onDelete={onDelete}
        onOpen={onOpen}
        saveCurrentDrill={saveCurrentDrill}
      />,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
