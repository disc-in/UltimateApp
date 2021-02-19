import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { Alert } from 'react-native';

import store from '../../Store/testStore';
import animationSquare from '../../Fixtures/Animation/AnimationSquare';

import ConnectedPlayTitle, { PlayTitle } from './PlayTitle';

describe('<PlayTitle />', () => {
  afterEach(() => jest.clearAllMocks());

  const play = { animation: animationSquare, title: 'Square', uuid: '123' };
  const renamePlay = jest.fn();
  const deletePlay = jest.fn();
  const onPress = jest.fn();

  it('renders correctly', async () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedPlayTitle play={play} onPress={onPress} deletePlay={deletePlay} renamePlay={renamePlay} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when safe mode', async () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedPlayTitle play={play} safe />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when unsaved', async () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedPlayTitle play={play} unsavedPlay />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom style', async () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedPlayTitle play={play} style={{ backgroundColor: 'cyan' }} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers onPress action', async () => {
    const { getByText } = render(
      <PlayTitle play={play} onPress={onPress} deletePlay={deletePlay} renamePlay={renamePlay} />,
    );

    fireEvent.press(getByText(play.title));

    expect(onPress).toHaveBeenCalled();
  });

  it('triggers rename action on blur', async () => {
    const { getByTestId, getByDisplayValue } = render(
      <PlayTitle play={play} onPress={onPress} deletePlay={deletePlay} renamePlay={renamePlay} />,
    );

    fireEvent.press(getByTestId('edit'));
    fireEvent(getByDisplayValue(play.title), 'onChangeText', 'New Title');
    fireEvent(getByDisplayValue('New Title'), 'onBlur');

    await expect(renamePlay).toHaveBeenCalledWith(play.uuid, 'New Title');
  });

  it('triggers rename action on validate', async () => {
    const { getByTestId, getByDisplayValue } = render(
      <PlayTitle play={play} onPress={onPress} deletePlay={deletePlay} renamePlay={renamePlay} />,
    );

    fireEvent.press(getByTestId('edit'));
    fireEvent(getByDisplayValue(play.title), 'onChangeText', 'New Title');
    await fireEvent.press(getByTestId('update'));

    await expect(renamePlay).toHaveBeenCalledWith(play.uuid, 'New Title');
  });

  it('does not trigger delete on cancel', async () => {
    jest.spyOn(Alert, 'alert');
    const { getByTestId, getByDisplayValue } = render(
      <PlayTitle play={play} onPress={onPress} deletePlay={deletePlay} renamePlay={renamePlay} />,
    );

    fireEvent.press(getByTestId('delete'));

    // Opens confirmation Alert
    expect(Alert.alert).toHaveBeenCalled();

    // Press Cancel
    expect(Alert.alert.mock.calls[0][2][0].text).toEqual('Cancel');
    Alert.alert.mock.calls[0][2][0].onPress();

    expect(deletePlay).not.toHaveBeenCalled();
  });

  it('triggers delete on confirmation', async () => {
    jest.spyOn(Alert, 'alert');
    const { getByTestId, getByDisplayValue } = render(
      <PlayTitle play={play} onPress={onPress} deletePlay={deletePlay} renamePlay={renamePlay} />,
    );

    fireEvent.press(getByTestId('delete'));

    // Opens confirmation Alert
    expect(Alert.alert).toHaveBeenCalled();

    // Press Cancel
    expect(Alert.alert.mock.calls[0][2][1].text).toEqual('Delete');
    Alert.alert.mock.calls[0][2][1].onPress();

    expect(deletePlay).toHaveBeenCalledWith(play.uuid);
  });
});
