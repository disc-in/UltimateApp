import React from 'react';
import renderer from 'react-test-renderer';

import DictionaryPage from './DictionaryPage';

describe('<DictionaryPage />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DictionaryPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
