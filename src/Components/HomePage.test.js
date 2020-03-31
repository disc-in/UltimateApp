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
    const { container, getByText, debug } = render(<HomePage navigation={navigation} />);

    await fireEvent.press(getByText('Frisbee'));

    expect(navigation.navigate).toBeCalledWith('DrillListPage', { type: 'technical' });
  });
});
