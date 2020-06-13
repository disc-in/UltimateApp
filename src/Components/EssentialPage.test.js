import React from 'react';
import renderer from 'react-test-renderer';

import EssentialPage from './EssentialPage';

describe('<EssentialPage />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EssentialPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
