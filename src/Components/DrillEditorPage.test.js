import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';

import DrillEditorPage from './DrillEditorPage';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

describe('<DrillEditorPage />', () => {
  it('renders correctly when creating a new drill', async () => {
    const tree = create(
      <Provider store={store}>
        <DrillEditorPage route={{}} />
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });

  it('renders correctly when creating an existing drill', async () => {
    const route = {
      params: {
        currentDrill: createDrill(),
      },
    };
    const tree = create(
      <Provider store={store}>
        <DrillEditorPage route={route} />
      </Provider>,
    ).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
