import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContext } from '@react-navigation/native';
import { Share } from 'react-native';

import store from '../Store/testStore';

import VideoPage from './VideoPage';

jest.mock('./shared/VimeoVideo');

describe('<VideoPage />', () => {
  const route = {
    params: {
      video: store.getState().theory.essentials[0].pages[0],
    },
  };
  // fake NavigationContext value data
  const navContext = {
    isFocused: () => true,
    // addListener returns an unscubscribe function.
    addListener: jest.fn(() => jest.fn()),
  };

  it('renders correctly', () => {
    const { toJSON } = render(
      <NavigationContext.Provider value={navContext}>
        <VideoPage route={route} />
      </NavigationContext.Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers share', async () => {
    const share = jest.fn();
    Share.share = () => new Promise((resolve, reject) => share());

    const { getByTestId } = render(
      <NavigationContext.Provider value={navContext}>
        <VideoPage route={route} />
      </NavigationContext.Provider>,
    );

    await fireEvent.press(getByTestId('shareButton'));

    expect(share).toHaveBeenCalled();
  });
});
