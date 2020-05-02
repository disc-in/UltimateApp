import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { connect, Provider } from 'react-redux';

import { createProgram } from '../../Fixtures/TestFixtures';
import store from '../../Store/testStore';

import ConnectedProgram, { Program } from './Program';

afterEach(cleanup);

describe('<Program />', () => {
  const program = createProgram();

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedProgram program={program} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when finished', () => {
    const training = program.trainings[0];

    const MockedConnectedDrillPage = connect(() => ({ completeTrainings: [{ training, program }] }))(Program);
    const tree = renderer
      .create(
        <Provider store={store}>
          <MockedConnectedDrillPage program={program} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to next training page', async () => {
    const training = program.trainings[0];
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(
      <Provider store={store}>
        <ConnectedProgram navigation={navigation} program={program} />
      </Provider>,
    );

    await fireEvent.press(getByText(program.title));

    expect(navigation.navigate).toBeCalledWith('TrainingPage', { training, program });
  });
});
