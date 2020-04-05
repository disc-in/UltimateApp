import React from 'react';
import renderer from 'react-test-renderer';
import { createDrill } from '../Fixtures/TestFixtures';

import Filters from './Filters';

describe('<Filters />', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        initialData: [createDrill()],
        onFiltered: jest.fn(),
      },
    };
    const navigation = { setOptions: jest.fn() };
    const tree = renderer.create(<Filters route={route} navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
