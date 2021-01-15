import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Share } from 'react-native';

import animationSquare from '../../../Fixtures/Animation/AnimationSquare';
import * as firebase from '../../../utils/firebase';

import SharePlay from './SharePlay';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<SharePlay />', () => {
  afterEach(() => jest.clearAllMocks());

  const currentPlay = { animation: animationSquare, title: 'Square', uuid: '123' };

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() => render(<SharePlay currentPlay={currentPlay} />));
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers share action', async () => {
    jest.spyOn(firebase, 'upload').mockImplementation(() => {});

    const share = jest.fn();
    Share.share = () => new Promise((resolve, reject) => share());

    const { getByTestId } = await waitFor(() => render(<SharePlay currentPlay={currentPlay} />));
    fireEvent.press(getByTestId('shareButton'));

    await expect(firebase.upload).toHaveBeenCalled();
    expect(share).toHaveBeenCalled();
  });
});
