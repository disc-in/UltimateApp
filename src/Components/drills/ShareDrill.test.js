import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Share } from 'react-native';

import store from '../../Store/testStore';
import * as firebase from '../../utils/firebase';

import ShareDrill from './ShareDrill';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn(),
}));

describe('<ShareDrill />', () => {
  afterEach(() => jest.clearAllMocks());

  const drill = store.getState().drills[0];

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() => render(<ShareDrill drill={drill} />));
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when light', async () => {
    const { toJSON } = await waitFor(() => render(<ShareDrill drill={drill} light />));
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers share action', async () => {
    jest.spyOn(firebase, 'createLink').mockImplementation(() => '');

    const share = jest.fn();
    Share.share = () => new Promise((resolve, reject) => share());

    const { getByTestId } = await waitFor(() => render(<ShareDrill drill={drill} />));
    fireEvent.press(getByTestId('shareButton'));

    await expect(firebase.createLink).toHaveBeenCalled();
    expect(share).toHaveBeenCalled();
  });
});
