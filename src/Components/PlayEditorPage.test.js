import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';
import Drill from './animation/Drill';

import PlayEditorPage from './PlayEditorPage';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn(),
}));

describe('<PlayEditorPage />', () => {
  it('renders correctly', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
    const route = {};

    const tree = create(
      <Provider store={store}>
        <PlayEditorPage navigation={navigation} route={route} />
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });

  it('renders correctly  with a currentPlay', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
    const play = {
      uuid: undefined,
      animation: new Drill(),
      title: 'title',
    };
    const route = {
      params: {
        currentPlay: play,
      },
    };

    const tree = create(
      <Provider store={store}>
        <PlayEditorPage navigation={navigation} route={route} />
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
