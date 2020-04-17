import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import store from '../Store/testStore';
import fixtures from '../Fixtures/TestFixtures';

import ConnectedTrainingListPage, { TrainingListPage } from './TrainingListPage';

afterEach(cleanup);

describe('<TrainingListPage />', () => {
  it('renders correctly when connected', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
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
  it('links to training page', async () => {
    const training = fixtures.trainings[0];
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(
      <TrainingListPage navigation={navigation} allDrills={fixtures.drills} trainings={fixtures.trainings} />,
    );

    await fireEvent.press(getByText(fixtures.trainings[0].title));

    expect(navigation.navigate).toBeCalledWith('TrainingPage', { training });
  });
});
