import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { NavigationContext } from '@react-navigation/native';

import VimeoVideo from '../VimeoVideo';

describe('<VimeoVideo />', () => {
  // fake NavigationContext value data
  const navContext = {
    isFocused: () => true,
    // addListener returns an unscubscribe function.
    addListener: jest.fn(() => jest.fn()),
  };

  it('loads the video', async () => {
    const vimeo_video_id = '407999139';

    const { getByText, toJSON } = render(
      <NavigationContext.Provider value={navContext}>
        <VimeoVideo vimeoId={vimeo_video_id} />
      </NavigationContext.Provider>,
    );

    expect(getByText('Loading…')).toBeDefined(); // Displayed by default

    await waitFor(() => getByText('Loading…'));

    expect(toJSON()).toMatchSnapshot();
  });

  it('displays a message on error', async () => {
    const not_found_video_id = '123456789_id_that_does_not_exist';

    const { getByText, toJSON } = await waitFor(() =>
      render(
        <NavigationContext.Provider value={navContext}>
          <VimeoVideo vimeoId={not_found_video_id} />
        </NavigationContext.Provider>,
      ),
    );

    await waitFor(() => getByText('Oopsie! There was an error loading the video…'));

    expect(toJSON()).toMatchSnapshot();
  });
});
