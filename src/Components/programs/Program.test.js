import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';

import { createProgram } from '../../Fixtures/TestFixtures';
import Program from './Program';

afterEach(cleanup);

describe('<Program />', () => {
  const program = createProgram();

  it('renders correctly', () => {
    const tree = renderer.create(<Program program={program} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to next training page', async () => {
    const training = program.trainings[0];
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<Program navigation={navigation} program={program} />);

    await fireEvent.press(getByText(program.title));

    expect(navigation.navigate).toBeCalledWith('TrainingPage', { training });
  });
});
