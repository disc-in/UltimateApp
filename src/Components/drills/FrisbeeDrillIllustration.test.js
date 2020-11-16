import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContext } from '@react-navigation/native';

import fixtures from '../../Fixtures/TestFixtures';

import FrisbeeDrillIllustration from './FrisbeeDrillIllustration';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<FrisbeeDrillIllustration />', () => {
  // fake NavigationContext value data
  const navContext = {
    isFocused: () => true,
    // addListener returns an unscubscribe function.
    addListener: jest.fn(() => jest.fn()),
  };

  it('renders correctly', () => {
    const drill = fixtures.drills[3];

    const { toJSON } = render(
      <NavigationContext.Provider value={navContext}>
        <FrisbeeDrillIllustration drill={drill} />
      </NavigationContext.Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
