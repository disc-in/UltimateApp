import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import ConnectedTacticsPage from './TacticsPage';

describe('<TacticsPage />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedTacticsPage />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
