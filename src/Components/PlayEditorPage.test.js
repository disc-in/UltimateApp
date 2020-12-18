import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import PlayEditorPage from './PlayEditorPage';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn(),
}));

describe('<PlayEditorPage />', () => {
  it('renders correctly', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

    const tree = create(
      <Provider store={store}>
        <PlayEditorPage navigation={navigation} />
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
