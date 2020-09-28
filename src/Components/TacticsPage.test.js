import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import ConnectedTacticsPage from './TacticsPage';

describe('<TacticsPage />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedTacticsPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
