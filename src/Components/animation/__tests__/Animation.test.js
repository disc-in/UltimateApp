import React from 'react';
import { render } from '@testing-library/react-native';

import animationSquare from '../../../Fixtures/Animation/AnimationSquare';
import Drill from '../Drill';

import Animation from '../Animation';

describe('<Animation />', () => {
  it('renders correctly', async () => {
    const { toJSON } = render(<Animation animation={new Drill(animationSquare)} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
