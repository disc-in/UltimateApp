import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';

import ConnectedDrillListPage, { DrillListPage } from './DrillListPage';

const storeInstance = store;

describe('<DrillListPage />', () => {
  it('renders correctly when connected', () => {
    const route = {
      params: {
        type: 'technical',
      },
    };
    const tree = renderer
      .create(
        <Provider store={storeInstance}>
          <ConnectedDrillListPage route={route} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a drill', () => {
    const route = {
      params: {
        type: 'technical',
      },
    };
    const drills = [createDrill()];
    const tree = renderer.create(<DrillListPage route={route} drills={drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
