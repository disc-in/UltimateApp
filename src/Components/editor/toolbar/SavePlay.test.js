import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';

import animationSquare from '../../../Fixtures/Animation/AnimationSquare';
import * as firebase from '../../../utils/firebase';

import SavePlay from './SavePlay';

jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn(),
}));

describe('<SavePlay />', () => {
  afterEach(() => jest.clearAllMocks());

  const currentPlay = { animation: animationSquare, title: 'Square', uuid: '123' };
  const saveCurrentPlay = jest.fn();

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() =>
      render(<SavePlay currentPlay={currentPlay} saveCurrentPlay={saveCurrentPlay} />),
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers save action', async () => {
    const { getByTestId } = await waitFor(() =>
      render(<SavePlay currentPlay={currentPlay} saveCurrentPlay={saveCurrentPlay} />),
    );

    fireEvent.press(getByTestId('saveButton'));

    await expect(saveCurrentPlay).toBeCalled();
  });
});
