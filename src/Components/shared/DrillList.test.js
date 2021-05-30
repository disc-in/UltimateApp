import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { createDrill } from '../../Fixtures/TestFixtures';
import store from '../../Store/testStore';

import DrillList from './DrillList';

describe('<DrillList />', () => {
  it('renders correctly', () => {
    const drills = [createDrill()];
    const tree = renderer
      .create(
        <Provider store={store}>
          <DrillList drillsToDisplay={drills} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
