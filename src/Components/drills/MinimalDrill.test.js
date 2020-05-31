import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { createDrill } from '../../Fixtures/TestFixtures';

import MinimalDrill from './MinimalDrill';

afterEach(cleanup);

describe('<MinimalDrill />', () => {
  it('renders correctly', () => {
    const drill = createDrill();
    const tree = renderer.create(<MinimalDrill drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
