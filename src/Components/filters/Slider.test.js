import React from 'react';
import renderer from 'react-test-renderer';

import Slider from './Slider';

describe('<Slider />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Slider value={15} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
