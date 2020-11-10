import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContext } from '@react-navigation/native';

import VideoPage from './VideoPage';

describe('<VideoPage />', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        video: 1,
      },
    };
    // fake NavigationContext value data
    const navContext = {
      isFocused: () => true,
      // addListener returns an unscubscribe function.
      addListener: jest.fn(() => jest.fn()),
    };

    const { toJSON } = render(
      <NavigationContext.Provider value={navContext}>
        <VideoPage route={route} />
      </NavigationContext.Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
