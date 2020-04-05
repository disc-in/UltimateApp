import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';
import { DrillTypes } from '../Fixtures';

import ConnectedDrillListPage, { DrillListPage } from './DrillListPage';

describe('<DrillListPage />', () => {
  const route = {
    params: {
      type: DrillTypes.TECHNICAL,
    },
  };

  it('renders correctly when connected', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedDrillListPage route={route} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a drill', () => {
    const drills = [createDrill()];
    const tree = renderer.create(<DrillListPage route={route} drills={drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
