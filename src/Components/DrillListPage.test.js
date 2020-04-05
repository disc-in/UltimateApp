import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';
import { DrillTypes } from '../Fixtures';

import ConnectedDrillListPage, { DrillListPage } from './DrillListPage';

const storeInstance = store;

describe('<DrillListPage />', () => {
  it('renders correctly when connected', () => {
    const route = {
      params: {
        type: DrillTypes.TECHNICAL,
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

  it('renders correctly with a technical drill', () => {
    const route = {
      params: {
        type: DrillTypes.TECHNICAL,
      },
    };
    const drills = [createDrill({ type: DrillTypes.TECHNICAL })];
    const tree = renderer.create(<DrillListPage route={route} drills={drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a fitness drill', () => {
    const route = {
      params: {
        type: DrillTypes.FITNESS,
      },
    };
    const drills = [createDrill({ type: DrillTypes.FITNESS })];
    const tree = renderer.create(<DrillListPage route={route} drills={drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
