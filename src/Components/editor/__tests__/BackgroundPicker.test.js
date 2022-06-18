import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import BackgroundPicker from '../BackgroundPicker';

describe('<BackgroundPicker />', () => {
  afterEach(() => jest.clearAllMocks());

  const onBackgroundChange = jest.fn();
  const selectedBackground = 'endzone';

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() =>
      render(<BackgroundPicker onBackgroundChange={onBackgroundChange} selectedBackground={selectedBackground} />),
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
