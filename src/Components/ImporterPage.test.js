import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import * as firebase from '../utils/firebase';

import { ImporterPage } from './ImporterPage';

describe('<ImporterPage />', () => {
  const play = {
    uuid: '123',
    animation: {
      positions: [[], []],
      ids: [],
      texts: [],
      background: 'endzone',
    },
    title: 'Title',
  };
  const navigation = { navigate: jest.fn() };
  const savePlay = jest.fn();
  const route = {
    params: {
      uuid: '123',
    },
  };

  it('renders correctly before download', async () => {
    jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(undefined)));
    const { toJSON } = render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly after download', async () => {
    jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

    const { getByText, toJSON } = await waitFor(() =>
      render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} />),
    );
    await fireEvent.press(getByText('Cancel'));
    expect(toJSON()).toMatchSnapshot();
  });

  it('goes back to home on cancel', async () => {
    jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

    const { getByText } = await waitFor(() =>
      render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} />),
    );
    await fireEvent.press(getByText('Cancel'));

    expect(navigation.navigate).toHaveBeenCalledWith('HomePage');
  });

  it('saves play and opens editor on confirmation', async () => {
    jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

    const { getByText } = await waitFor(() =>
      render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} />),
    );
    await fireEvent.press(getByText('Yes'));

    expect(savePlay).toHaveBeenCalledWith(play);
    expect(navigation.navigate).toHaveBeenCalledWith('PlayEditorPage', { currentPlay: play });
  });
});
