import React from 'react';
import { render } from '@testing-library/react-native';

import { createDrill } from '../../../Fixtures/TestFixtures';

import Description from '../Description';

describe('<Description />', () => {
  it('renders correctly', () => {
    const drill = createDrill();

    const { toJSON } = render(<Description drill={drill} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly as minimal', () => {
    const drill = createDrill();

    const { toJSON } = render(<Description drill={drill} minimal />);
    expect(toJSON()).toMatchSnapshot();
  });
});
