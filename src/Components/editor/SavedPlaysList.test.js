import React from 'react';
import { create, act } from 'react-test-renderer';

import animationSquare from '../../Fixtures/Animation/AnimationSquare';

import SavedPlaysList from './SavedPlaysList';

describe('<SavedPlaysList />', () => {
  const onOpen = jest.fn();
  const saveCurrentPlay = jest.fn();
  const onDelete = jest.fn();
  const isPlaySaved = true;
  const playTitle = 'Title';
  const savedPlays = [{ play: animationSquare, title: 'Square' }];

  it('renders correctly with plays', async () => {
    const tree = create(
      <SavedPlaysList
        savedPlays={savedPlays}
        isPlaySaved={isPlaySaved}
        playTitle={playTitle}
        onDelete={onDelete}
        onOpen={onOpen}
        saveCurrentPlay={saveCurrentPlay}
      />,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });

  it('renders an empty state with no plays', async () => {
    const tree = create(
      <SavedPlaysList
        savedPlays={[]}
        isPlaySaved={isPlaySaved}
        playTitle={playTitle}
        onDelete={onDelete}
        onOpen={onOpen}
        saveCurrentPlay={saveCurrentPlay}
      />,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
