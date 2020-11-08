import React from 'react';
import { render } from '@testing-library/react-native';

import VideoPage from './VideoPage';

describe('<VideoPage />', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        video: 1,
      },
    };

    const { toJSON } = render(<VideoPage route={route} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
