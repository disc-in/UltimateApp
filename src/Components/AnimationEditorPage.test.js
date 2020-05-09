import React from 'react';
import renderer from 'react-test-renderer';

import AnimationEditorPage from './AnimationEditorPage';

describe('<AnimationEditorPage />', () => {
  it('renders correctly', () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

    const tree = renderer.create(<AnimationEditorPage navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
