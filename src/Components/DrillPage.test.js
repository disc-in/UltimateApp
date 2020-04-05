import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';

import ConnectedDrillPage from './DrillPage';

describe('<DrillPage />', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        drill: createDrill(),
      },
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedDrillPage route={route} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
