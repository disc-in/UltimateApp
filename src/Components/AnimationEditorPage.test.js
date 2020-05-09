import React from 'react';
import renderer from 'react-test-renderer';

import AnimationEditorPage from './AnimationEditorPage';

describe('<AnimationEditorPage />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AnimationEditorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
