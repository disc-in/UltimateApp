import React from 'react';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';

import DrillEditorAnimationPage from './DrillEditorAnimationPage';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

describe('<DrillEditorAnimationPage />', () => {
  it('renders correctly', async () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };
    const route = {
      params: {
        onAnimationChange: jest.fn(),
        animation: undefined,
      },
    };

    const tree = create(<DrillEditorAnimationPage route={route} navigation={navigation} />).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
