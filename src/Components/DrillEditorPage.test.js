import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';

import DrillEditorPage from './DrillEditorPage';
import store from '../Store/testStore';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

describe('<DrillEditorPage />', () => {
  it('renders correctly', async () => {
    const tree = create(
      <Provider store={store}>
        <DrillEditorPage />
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
