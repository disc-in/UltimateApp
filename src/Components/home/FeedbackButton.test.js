import React from 'react';
import { create, act } from 'react-test-renderer';

import FeedbackButton from './FeedbackButton';

describe('<FeedbackButton />', () => {
  it('renders correctly', async () => {
    const tree = create(<FeedbackButton />).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
