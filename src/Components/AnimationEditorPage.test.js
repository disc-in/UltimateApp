import React from 'react';
import renderer from 'react-test-renderer';

import AnimationEditorPage from './AnimationEditorPage';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

describe('<AnimationEditorPage />', () => {
  it('renders correctly', () => {
    const navigation = { navigate: jest.fn(), setOptions: jest.fn() };

    const tree = renderer.create(<AnimationEditorPage navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
