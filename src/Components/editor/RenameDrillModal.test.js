import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import animationSquare from '../../Fixtures/Animation/AnimationSquare';

import { RenameDrillModal } from './RenameDrillModal';

describe('<RenameDrillModal />', () => {
  afterEach(() => jest.clearAllMocks());

  const onRename = jest.fn();
  const close = jest.fn();
  const currentDrill = { drill: animationSquare, title: 'Square' };
  const customDrills = [currentDrill];
  const renameDrill = jest.fn();

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() =>
      render(
        <PaperProvider>
          <RenameDrillModal
            currentDrill={currentDrill}
            onRename={onRename}
            close={close}
            customDrills={customDrills}
            renameDrill={renameDrill}
          />
        </PaperProvider>,
      ),
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('does nothing when using Back', async () => {
    const { getByPlaceholderText, getByText } = await waitFor(() =>
      render(
        <PaperProvider>
          <RenameDrillModal
            currentDrill={currentDrill}
            onRename={onRename}
            close={close}
            customDrills={customDrills}
            renameDrill={renameDrill}
          />
        </PaperProvider>,
      ),
    );

    // Fill input
    fireEvent(getByPlaceholderText('Click here to enter the new name'), 'onChangeText', 'New Title');

    await fireEvent.press(getByText('Back'));

    expect(onRename).not.toBeCalled();
    expect(renameDrill).not.toBeCalled();
    expect(currentDrill.title).toEqual('Square');
  });

  it('renames the drill on validation', async () => {
    const { getByPlaceholderText, getByText } = await waitFor(() =>
      render(
        <PaperProvider>
          <RenameDrillModal
            currentDrill={currentDrill}
            onRename={onRename}
            close={close}
            customDrills={customDrills}
            renameDrill={renameDrill}
          />
        </PaperProvider>,
      ),
    );

    // Fill input
    fireEvent(getByPlaceholderText('Click here to enter the new name'), 'onChangeText', 'New Title');

    await fireEvent.press(getByText('Apply'));

    expect(onRename).toBeCalled();
    expect(renameDrill).toBeCalled();
    expect(currentDrill.title).toEqual('New Title');
  });
});
