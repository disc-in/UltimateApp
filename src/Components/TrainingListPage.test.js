import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Store/configureStore';
import fixtures from '../Fixtures/TestFixtures';

import ConnectedTrainingListPage, { TrainingListPage } from './TrainingListPage';

const storeInstance = store;

describe('<TrainingListPage />', () => {
  it('renders correctly when connected', () => {
    const tree = renderer
      .create(
        <Provider store={storeInstance}>
          <ConnectedTrainingListPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a training', () => {
    const tree = renderer
      .create(<TrainingListPage allDrills={fixtures.drills} trainings={fixtures.trainings} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
