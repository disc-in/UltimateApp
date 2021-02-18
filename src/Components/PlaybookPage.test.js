import React from 'react';
import { create } from 'react-test-renderer';

import PlaybookPage from './PlaybookPage';

describe('<PlaybookPage />', () => {
  it('renders correctly', () => {
    const tree = create(<PlaybookPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
