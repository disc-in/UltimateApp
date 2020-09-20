import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { createDrill } from '../../Fixtures/TestFixtures';

import DrillList from './DrillList';

describe('<DrillList />', () => {
  it('renders correctly', () => {
    const drills = [createDrill()];
    const tree = renderer.create(<DrillList drillsToDisplay={drills} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
