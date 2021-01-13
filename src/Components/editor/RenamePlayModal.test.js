import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react-native';

import animationSquare from '../../Fixtures/Animation/AnimationSquare';

import { RenamePlayModal } from './RenamePlayModal';

describe('<RenamePlayModal />', () => {
  afterEach(() => jest.clearAllMocks());

  const onRename = jest.fn();
  const close = jest.fn();
  const currentPlay = { animation: animationSquare, title: 'Square', uuid: '123' };
  const customPlays = [currentPlay];
  const renamePlay = jest.fn();

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() =>
      render(
        <RenamePlayModal
          currentPlay={currentPlay}
          onRename={onRename}
          close={close}
          customPlays={customPlays}
          renamePlay={renamePlay}
        />,
      ),
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('does nothing when using Back', async () => {
    const { getByPlaceholderText, getByText } = await waitFor(() =>
      render(
        <RenamePlayModal
          currentPlay={currentPlay}
          onRename={onRename}
          close={close}
          customPlays={customPlays}
          renamePlay={renamePlay}
        />,
      ),
    );

    // Fill input
    fireEvent(getByPlaceholderText('Click here to enter the new name'), 'onChangeText', 'New Title');

    await act(async () => await fireEvent.press(getByText('Back')));

    expect(onRename).not.toBeCalled();
    expect(renamePlay).not.toBeCalled();
    expect(currentPlay.title).toEqual('Square');
  });

  it('renames the play on validation', async () => {
    const { getByPlaceholderText, getByText } = await waitFor(() =>
      render(
        <RenamePlayModal
          currentPlay={currentPlay}
          onRename={onRename}
          close={close}
          customPlays={customPlays}
          renamePlay={renamePlay}
        />,
      ),
    );

    // Fill input
    fireEvent(getByPlaceholderText('Click here to enter the new name'), 'onChangeText', 'New Title');

    await act(async () => await fireEvent.press(getByText('Apply')));

    expect(onRename).toBeCalled();
    expect(renamePlay).toBeCalled();
    expect(currentPlay.title).toEqual('New Title');
  });
});
