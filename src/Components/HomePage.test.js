import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { NavigationContainer } from '@react-navigation/native';

import { DrillTypes } from '../Fixtures/config';

import HomePage from './HomePage';

afterEach(cleanup);

describe('<HomePage />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <HomePage />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to frisbee drill list', async () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(
      <NavigationContainer>
        <HomePage navigation={navigation} />
      </NavigationContainer>,
    );

    await fireEvent.press(getByText('Frisbee Drills'));

    expect(navigation.navigate).toBeCalledWith('DrillListPage', { type: DrillTypes.FRISBEE });

    await fireEvent.press(getByText('Fitness Drills'));

    expect(navigation.navigate).toBeCalledWith('DrillListPage', { type: DrillTypes.FITNESS });

    await fireEvent.press(getByText('Training programs'));

    expect(navigation.navigate).toBeCalledWith('ProgramListPage');
  });
});
