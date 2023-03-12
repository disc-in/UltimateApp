import React from 'react';
import { connect, Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';

import store from '../../Store/testStore';
import Drill from '../../Components/animation/Drill';
import * as random from '../../utils/random';

import ConnectedPlaybookPage, { PlaybookPage } from '../PlaybookPage';

describe('<PlaybookPage />', () => {
  const play = {
    uuid: undefined,
    animation: new Drill(),
    title: 'title',
  };

  it('renders correctly when empty', () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedPlaybookPage navigation={navigation} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with plays', () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
    const MockedConnectedPlaybookPage = connect(() => ({ customPlays: [play] }))(PlaybookPage);

    const { toJSON } = render(
      <Provider store={store}>
        <MockedConnectedPlaybookPage navigation={navigation} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('links to drill page', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

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
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
    const savePlay = jest.fn();
    jest.spyOn(random, 'generateUuid').mockImplementation(() => '123456');

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
      uuid: '123456',
    };
    expect(navigation.navigate).toBeCalledWith('PlayEditorPage', { currentPlay: expectedPlay });
    expect(savePlay).toBeCalledWith(expectedPlay);
  });
});
