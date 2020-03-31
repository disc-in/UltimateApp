import React from 'react';
import renderer from 'react-test-renderer';

import Filters from './Filters';

describe('<Filters />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Filters initialData={[]} onConfirm={jest.fn()} onFiltered={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
