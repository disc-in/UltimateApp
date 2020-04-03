import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitForElement } from 'react-native-testing-library';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to technical drill list', async () => {
    const navigation = { navigate: jest.fn() };
    const { container, getByText } = render(<HomePage navigation={navigation} />);

    await fireEvent.press(getByText('Frisbee'));

    expect(navigation.navigate).toBeCalledWith('DrillListPage', { type: 'technical' });

    await fireEvent.press(getByText('Fitness'));

    expect(navigation.navigate).toBeCalledWith('DrillListPage', { type: 'fitness' });

    await fireEvent.press(getByText('Trainings'));

    expect(navigation.navigate).toBeCalledWith('DrillListPage', { type: 'collectif' });
  });
});
