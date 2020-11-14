import React from 'react';
import renderer from 'react-test-renderer';

import { createDrill } from '../../Fixtures/TestFixtures';

import Description from './Description';

describe('<Description />', () => {
  it('renders correctly', () => {
    const drill = createDrill();

    const tree = renderer.create(<Description drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly as minimal', () => {
    const drill = createDrill();

    const tree = renderer.create(<Description drill={drill} minimal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
