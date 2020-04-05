import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent } from 'react-native-testing-library';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';
import { DrillTypes } from '../Fixtures';

import ConnectedDrillListPage, { DrillListPage } from './DrillListPage';

describe('<DrillListPage />', () => {
  it('renders correctly when connected', () => {
    const route = {
      params: {
        type: DrillTypes.TECHNICAL,
      },
    };
    const tree = renderer
      .create(
        <Provider store={store}>
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

  it('links to video view', async () => {
    const route = {
      params: {
        type: DrillTypes.TECHNICAL,
      },
    };
    const drill = createDrill({ type: DrillTypes.TECHNICAL, title: 'Hot Box' });
    const drills = [drill];
    const navigation = { navigate: jest.fn() };
    const { container, getByText, debug } = render(
      <DrillListPage route={route} drills={drills} navigation={navigation} />,
    );

    await fireEvent.press(getByText('Hot Box'));

    expect(navigation.navigate).toBeCalledWith('DrillPage', { drill });
  });
});
