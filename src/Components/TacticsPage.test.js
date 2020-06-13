import React from 'react';
import renderer from 'react-test-renderer';

import TacticsPage from './TacticsPage';

describe('<TacticsPage />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TacticsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
