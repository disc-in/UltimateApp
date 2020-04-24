import React from 'react';
import renderer from 'react-test-renderer';

import VimeoVideo from './VimeoVideo';
import { VIMEO_VIDEO_ID } from '../Fixtures';

describe('<VimeoVideo />', () => {
  it('renders correctly for a video from vimeo', () => {
    const screenWidth = 480;
    const tree = renderer.create(<VimeoVideo vimeoId={VIMEO_VIDEO_ID} screenWidth={screenWidth} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
