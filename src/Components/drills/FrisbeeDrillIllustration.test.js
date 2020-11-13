import React from 'react';
import { render } from '@testing-library/react-native';

import fixtures from '../../Fixtures/TestFixtures';

import FrisbeeDrillIllustration from './FrisbeeDrillIllustration';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<FrisbeeDrillIllustration />', () => {
  it('renders correctly', () => {
    const drill = fixtures.drills[3];

    const { toJSON } = render(<FrisbeeDrillIllustration drill={drill} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
