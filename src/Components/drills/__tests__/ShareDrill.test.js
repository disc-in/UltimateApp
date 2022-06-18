import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Share } from 'react-native';

import store from '../../../Store/testStore';
import { createDrill } from '../../../Fixtures/TestFixtures';
import * as firebase from '../../../utils/firebase';

import ShareDrill from '../ShareDrill';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
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

  it('triggers share action for an app drill', async () => {
    jest.spyOn(firebase, 'createLink').mockImplementation(() => '');

    const share = jest.fn();
    Share.share = () => new Promise((resolve, reject) => share());

    const { getByTestId } = await waitFor(() => render(<ShareDrill drill={drill} />));
    fireEvent.press(getByTestId('shareButton'));

    await expect(firebase.createLink).toHaveBeenCalledWith('drills/' + drill.id, drill.title, expect.any(String));
    expect(share).toHaveBeenCalled();
  });

  it('triggers share action for a custom drill', async () => {
    const customDrill = createDrill({ id: 2, custom: true });
    jest.spyOn(firebase, 'upload').mockImplementation(() => 'uuid');
    jest.spyOn(firebase, 'createLink').mockImplementation(() => '');

    const share = jest.fn();
    Share.share = () => new Promise((resolve, reject) => share());

    const { getByTestId } = await waitFor(() => render(<ShareDrill drill={customDrill} />));
    fireEvent.press(getByTestId('shareButton'));

    await expect(firebase.upload).toHaveBeenCalledWith('customDrills', customDrill);
    await expect(firebase.createLink).toHaveBeenCalledWith('custom/drills/uuid', customDrill.title);
    expect(share).toHaveBeenCalled();
  });
});
