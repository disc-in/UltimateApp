import React, { ReactElement } from 'react';

import { View } from 'react-native';

const MockedVimeoVideo = (props): ReactElement => {
  return <View testID="VimeoVideoMock" {...props} />;
};

export default MockedVimeoVideo;
