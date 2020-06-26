import React from 'react';
import renderer from 'react-test-renderer';

import FeedbackButton from './FeedbackButton';

describe('<FeedbackButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FeedbackButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
