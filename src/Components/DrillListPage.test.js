import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';
import { DrillTypes } from '../Fixtures';

import ConnectedDrillListPage, { DrillListPage } from './DrillListPage';

afterEach(cleanup);

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
    const tree = renderer.create(<DrillListPage route={route} storeDrills={drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a fitness drill', () => {
    const route = {
      params: {
        type: DrillTypes.FITNESS,
      },
    };
    const drills = [createDrill({ type: DrillTypes.FITNESS })];
    const tree = renderer.create(<DrillListPage route={route} storeDrills={drills} />).toJSON();
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
    const { getByText } = render(<DrillListPage route={route} storeDrills={drills} navigation={navigation} />);

    await fireEvent.press(getByText('Hot Box'));

    expect(navigation.navigate).toBeCalledWith('DrillPage', { drill });
  });

  it('links to filter view on press on the button', async () => {
    const route = {
      name: 'DrillListPage',
      params: {
        type: DrillTypes.TECHNICAL,
      },
    };
    const drills = [createDrill({ type: DrillTypes.TECHNICAL, title: 'Hot Box' })];
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<DrillListPage route={route} storeDrills={drills} navigation={navigation} />);

    await fireEvent.press(getByTestId('filterButton'));

    expect(navigation.navigate).toBeCalledWith('Filters', {
      initialData: drills,
      previousScreen: 'DrillListPage',
      previousType: DrillTypes.TECHNICAL,
    });
  });
});
