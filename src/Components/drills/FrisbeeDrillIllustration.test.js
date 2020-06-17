import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { createDrill } from '../../Fixtures/TestFixtures';

import FrisbeeDrillIllustration from './FrisbeeDrillIllustration';

afterEach(cleanup);
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<FrisbeeDrillIllustration />', () => {
  it('renders correctly', () => {
    const drill = createDrill();
    const tree = renderer.create(<FrisbeeDrillIllustration drill={drill} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
