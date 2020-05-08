import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { DrillTypes } from '../Fixtures';

import HomePage from './HomePage';

afterEach(cleanup);

describe('<HomePage />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to frisbee drill list', async () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<HomePage navigation={navigation} />);

    await fireEvent.press(getByText('Frisbee drills'));

    expect(navigation.navigate).toBeCalledWith('DrillListPage', { type: DrillTypes.FRISBEE });

    await fireEvent.press(getByText('Fitness drills'));

    expect(navigation.navigate).toBeCalledWith('DrillListPage', { type: DrillTypes.FITNESS });

    await fireEvent.press(getByText('Training programs'));

    expect(navigation.navigate).toBeCalledWith('ProgramListPage');
  });
});
