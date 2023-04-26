import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Share } from 'react-native';

import store from '../../../Store/testStore';
import { createDrill } from '../../../Fixtures/TestFixtures';
import * as firebase from '../../../utils/firebase';

import ShareDrill from '../ShareDrill';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<ShareDrill />', () => {
  afterEach(() => jest.clearAllMocks());

  const drill = store.getState().drills[0];

  it('renders correctly', async () => {
    drill.custom = true;
    const { toJSON } = await waitFor(() => render(<ShareDrill drill={drill} />));
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when light', async () => {
    drill.custom = true;
    const { toJSON } = await waitFor(() => render(<ShareDrill drill={drill} light />));
    expect(toJSON()).toMatchSnapshot();
  });

  it('does nothing for an app drill', async () => {
    const appDrill = createDrill({ id: 2 });
    const { toJSON } = await waitFor(() => render(<ShareDrill drill={appDrill} />));
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers share action for a custom drill', async () => {
    const customDrill = createDrill({ id: 2, custom: true });
    jest.spyOn(firebase, 'upload').mockImplementation(() => 'identifier');

    const share = jest.fn();
    Share.share = () => new Promise((resolve, reject) => share());

    const { getByTestId } = await waitFor(() => render(<ShareDrill drill={customDrill} />));
    fireEvent.press(getByTestId('shareButton'));

    await expect(firebase.upload).toHaveBeenCalledWith('customDrills', customDrill);
    expect(share).toHaveBeenCalled();
  });
});
