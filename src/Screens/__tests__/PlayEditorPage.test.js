import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../../Store/testStore';
import Drill from '../../Components/animation/Drill';

import PlayEditorPage from '../PlayEditorPage';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

describe('<PlayEditorPage />', () => {
  it('renders correctly', async () => {
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

    const { toJSON } = render(
      <Provider store={store}>
        <PlayEditorPage navigation={navigation} route={route} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
