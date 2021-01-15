import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import animationSquare from '../../../Fixtures/Animation/AnimationSquare';

import NewPlay from './NewPlay';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<NewPlay />', () => {
  afterEach(() => jest.clearAllMocks());

  const currentPlay = { animation: animationSquare, title: 'Square', uuid: '123' };
  let isPlaySaved = true;
  const createNewPlay = jest.fn();
  const saveCurrentPlay = jest.fn();

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() =>
      render(
        <NewPlay
          currentPlay={currentPlay}
          isPlaySaved={isPlaySaved}
          createNewPlay={createNewPlay}
          saveCurrentPlay={saveCurrentPlay}
        />,
      ),
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers new action when current play is saved', async () => {
    const { getByTestId } = await waitFor(() =>
      render(
        <NewPlay
          currentPlay={currentPlay}
          isPlaySaved={isPlaySaved}
          createNewPlay={createNewPlay}
          saveCurrentPlay={saveCurrentPlay}
        />,
      ),
    );
    await fireEvent.press(getByTestId('newButton'));

    expect(createNewPlay).toBeCalled();
  });

  it('asks for confirmation when current play is not saved', async () => {
    isPlaySaved = false;
    jest.spyOn(Alert, 'alert');

    const { getByTestId } = await waitFor(() =>
      render(
        <NewPlay
          currentPlay={currentPlay}
          isPlaySaved={isPlaySaved}
          createNewPlay={createNewPlay}
          saveCurrentPlay={saveCurrentPlay}
        />,
      ),
    );
    await fireEvent.press(getByTestId('newButton'));

    // Opens confirmation Alert
    expect(Alert.alert).toHaveBeenCalled();
  });

  it('does nothing on cancel in the confirmation alert', async () => {
    isPlaySaved = false;
    jest.spyOn(Alert, 'alert');

    const { getByTestId } = await waitFor(() =>
      render(
        <NewPlay
          currentPlay={currentPlay}
          isPlaySaved={isPlaySaved}
          createNewPlay={createNewPlay}
          saveCurrentPlay={saveCurrentPlay}
        />,
      ),
    );
    await fireEvent.press(getByTestId('newButton'));

    // Opens confirmation Alert
    expect(Alert.alert).toHaveBeenCalled();

    // Press Cancel
    expect(Alert.alert.mock.calls[0][2][0].text).toEqual('Cancel');
    Alert.alert.mock.calls[0][2][0].onPress();

    expect(saveCurrentPlay).not.toBeCalled();
    expect(createNewPlay).not.toBeCalled();
  });

  it('calles save then new on pressing Yes in the confirmation alert', async () => {
    isPlaySaved = false;
    jest.spyOn(Alert, 'alert');

    const { getByTestId } = await waitFor(() =>
      render(
        <NewPlay
          currentPlay={currentPlay}
          isPlaySaved={isPlaySaved}
          createNewPlay={createNewPlay}
          saveCurrentPlay={saveCurrentPlay}
        />,
      ),
    );
    await fireEvent.press(getByTestId('newButton'));

    // Opens confirmation Alert
    expect(Alert.alert).toHaveBeenCalled();

    // Press Yes
    expect(Alert.alert.mock.calls[0][2][1].text).toEqual('Yes');
    Alert.alert.mock.calls[0][2][1].onPress();

    expect(saveCurrentPlay).toBeCalled();
    expect(createNewPlay).toBeCalled();
  });

  it('calles save then new on pressing No in the confirmation alert', async () => {
    isPlaySaved = false;
    jest.spyOn(Alert, 'alert');

    const { getByTestId } = await waitFor(() =>
      render(
        <NewPlay
          currentPlay={currentPlay}
          isPlaySaved={isPlaySaved}
          createNewPlay={createNewPlay}
          saveCurrentPlay={saveCurrentPlay}
        />,
      ),
    );
    await fireEvent.press(getByTestId('newButton'));

    // Opens confirmation Alert
    expect(Alert.alert).toHaveBeenCalled();

    // Press No
    expect(Alert.alert.mock.calls[0][2][2].text).toEqual('No');
    Alert.alert.mock.calls[0][2][2].onPress();

    expect(saveCurrentPlay).not.toBeCalled();
    expect(createNewPlay).toBeCalled();
  });
});
