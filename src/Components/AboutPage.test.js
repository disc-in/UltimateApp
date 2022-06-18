import React from 'react';
import { render } from '@testing-library/react-native';

import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<AboutPage />);
    expect(toJSON()).toMatchSnapshot();
  });
});
