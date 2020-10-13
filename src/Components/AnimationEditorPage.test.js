import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import AnimationEditorPage from './AnimationEditorPage';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

describe('<AnimationEditorPage />', () => {
  it('renders correctly', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

    const tree = create(
      <Provider store={store}>
        <AnimationEditorPage navigation={navigation} />
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
