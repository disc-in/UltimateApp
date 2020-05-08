import React from 'react';
import renderer from 'react-test-renderer';

import { createDrill } from '../Fixtures/TestFixtures';
import { IllustrationType } from '../Fixtures';
import animationSquare from '../Fixtures/AnimationSquare';

import AnimationEditorPage from './AnimationEditorPage';

describe('<AnimationEditorPage />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AnimationEditorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
