import React from 'react';
import renderer from 'react-test-renderer';

import fixtures from '../Fixtures/TestFixtures';

import ProgramPage from './ProgramPage';

describe('<ProgramPage />', () => {
  const program = fixtures.programs[0];
  const route = {
    params: {
      program,
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<ProgramPage route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
