import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { createDrill } from '../../Fixtures/TestFixtures';

import FitnessDrillIllustration from './FitnessDrillIllustration';

afterEach(cleanup);

describe('<FitnessDrillIllustration />', () => {
  it('renders correctly', () => {
    const drill = createDrill();
    const tree = renderer.create(<FitnessDrillIllustration drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
