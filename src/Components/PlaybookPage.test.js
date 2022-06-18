import React from 'react';
import { connect, Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';

import store from '../Store/testStore';
import Drill from './animation/Drill';
import * as uuid from '../utils/uuid';

import ConnectedPlaybookPage, { PlaybookPage } from './PlaybookPage';

jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn(),
}));

describe('<PlaybookPage />', () => {
  const play = {
    uuid: undefined,
    animation: new Drill(),
    title: 'title',
  };

  it('renders correctly when empty', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedPlaybookPage />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with plays', () => {
    const MockedConnectedPlaybookPage = connect(() => ({ customPlays: [play] }))(PlaybookPage);

    const { toJSON } = render(
      <Provider store={store}>
        <MockedConnectedPlaybookPage />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('links to drill page', async () => {
    const navigation = { navigate: jest.fn() };

    const MockedConnectedPlaybookPage = connect(() => ({ customPlays: [play] }))(PlaybookPage);
    const { getByText } = render(
      <Provider store={store}>
        <MockedConnectedPlaybookPage navigation={navigation} />
      </Provider>,
    );
    await fireEvent.press(getByText(play.title));

    expect(navigation.navigate).toBeCalledWith('PlayEditorPage', { currentPlay: play });
  });

  it('creates a new play and links to drill page', async () => {
    const navigation = { navigate: jest.fn() };
    const savePlay = jest.fn();
    jest.spyOn(uuid, 'generateUuid').mockImplementation(() => '123-456');

    const MockedConnectedPlaybookPage = connect(
      () => ({ customPlays: [play] }),
      () => ({ savePlay }),
    )(PlaybookPage);
    const { getByTestId } = render(
      <Provider store={store}>
        <MockedConnectedPlaybookPage navigation={navigation} savePlay={savePlay} />
      </Provider>,
    );
    await fireEvent.press(getByTestId('createPlay'));

    const expectedPlay = {
      animation: new Drill(),
      title: 'Unnamed play',
      uuid: '123-456',
    };
    expect(navigation.navigate).toBeCalledWith('PlayEditorPage', { currentPlay: expectedPlay });
    expect(savePlay).toBeCalledWith(expectedPlay);
  });
});
