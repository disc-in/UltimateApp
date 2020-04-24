import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';

import { createProgram } from '../../Fixtures/TestFixtures';
import Program from './Program';

afterEach(cleanup);

describe('<Program />', () => {
  it('renders correctly', () => {
    const program = createProgram();
    const tree = renderer.create(<Program program={program} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
