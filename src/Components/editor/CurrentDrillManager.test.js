import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Alert } from 'react-native';

import animationSquare from '../../Fixtures/Animation/AnimationSquare';

import CurrentDrillManager from './CurrentDrillManager';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<CurrentDrillManager />', () => {
  afterEach(() => jest.clearAllMocks());

  const save = jest.fn();
  const _new = jest.fn();
  const rename = jest.fn();
  let isDrillSaved = true;
  const currentDrill = { drill: animationSquare, title: 'Square' };

  it('renders correctly', async () => {
    const { toJSON, getByTestId } = await waitFor(() =>
      render(
        <PaperProvider>
          <CurrentDrillManager
            currentDrill={currentDrill}
            isDrillSaved={isDrillSaved}
            save={save}
            new={_new}
            rename={rename}
          />
        </PaperProvider>,
      ),
    );
    expect(toJSON()).toMatchSnapshot();

    await fireEvent.press(getByTestId('headerButton'));

    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers save action', async () => {
    const { getByTestId, getByText } = await waitFor(() =>
      render(
        <PaperProvider>
          <CurrentDrillManager
            currentDrill={currentDrill}
            isDrillSaved={isDrillSaved}
            save={save}
            new={_new}
            rename={rename}
          />
        </PaperProvider>,
      ),
    );
    await fireEvent.press(getByTestId('headerButton'));
    await fireEvent.press(getByText('Save'));

    expect(save).toBeCalled();
  });

  it('triggers rename action', async () => {
    const { getByTestId, getByText } = await waitFor(() =>
      render(
        <PaperProvider>
          <CurrentDrillManager
            currentDrill={currentDrill}
            isDrillSaved={isDrillSaved}
            save={save}
            new={_new}
            rename={rename}
          />
        </PaperProvider>,
      ),
    );
    await fireEvent.press(getByTestId('headerButton'));
    await fireEvent.press(getByText('Rename'));

    expect(rename).toBeCalled();
  });

  describe('New', () => {
    it('triggers new action when current drill is saved', async () => {
      const { getByTestId, getByText } = await waitFor(() =>
        render(
          <PaperProvider>
            <CurrentDrillManager
              currentDrill={currentDrill}
              isDrillSaved={isDrillSaved}
              save={save}
              new={_new}
              rename={rename}
            />
          </PaperProvider>,
        ),
      );
      await fireEvent.press(getByTestId('headerButton'));
      await fireEvent.press(getByText('New'));

      expect(_new).toBeCalled();
    });

    it('asks for confirmation when current drill is not saved', async () => {
      isDrillSaved = false;
      jest.spyOn(Alert, 'alert');

      const { getByTestId, getByText, debug } = await waitFor(() =>
        render(
          <PaperProvider>
            <CurrentDrillManager
              currentDrill={currentDrill}
              isDrillSaved={isDrillSaved}
              save={save}
              new={_new}
              rename={rename}
            />
          </PaperProvider>,
        ),
      );
      await fireEvent.press(getByTestId('headerButton'));
      await fireEvent.press(getByText('New'));

      // Opens confirmation Alert
      expect(Alert.alert).toHaveBeenCalled();
    });

    it('does nothing on cancel in the confirmation alert', async () => {
      isDrillSaved = false;
      jest.spyOn(Alert, 'alert');

      const { getByTestId, getByText, debug } = await waitFor(() =>
        render(
          <PaperProvider>
            <CurrentDrillManager
              currentDrill={currentDrill}
              isDrillSaved={isDrillSaved}
              save={save}
              new={_new}
              rename={rename}
            />
          </PaperProvider>,
        ),
      );
      await fireEvent.press(getByTestId('headerButton'));
      await fireEvent.press(getByText('New'));

      // Opens confirmation Alert
      expect(Alert.alert).toHaveBeenCalled();

      // Press Cancel
      expect(Alert.alert.mock.calls[0][2][0].text).toEqual('Cancel');
      Alert.alert.mock.calls[0][2][0].onPress();

      expect(save).not.toBeCalled();
      expect(_new).not.toBeCalled();
    });

    it('calles save then new on pressing Yes in the confirmation alert', async () => {
      isDrillSaved = false;
      jest.spyOn(Alert, 'alert');

      const { getByTestId, getByText, debug } = await waitFor(() =>
        render(
          <PaperProvider>
            <CurrentDrillManager
              currentDrill={currentDrill}
              isDrillSaved={isDrillSaved}
              save={save}
              new={_new}
              rename={rename}
            />
          </PaperProvider>,
        ),
      );
      await fireEvent.press(getByTestId('headerButton'));
      await fireEvent.press(getByText('New'));

      // Opens confirmation Alert
      expect(Alert.alert).toHaveBeenCalled();

      // Press Yes
      expect(Alert.alert.mock.calls[0][2][1].text).toEqual('Yes');
      Alert.alert.mock.calls[0][2][1].onPress();

      expect(save).toBeCalled();
      expect(_new).toBeCalled();
    });

    it('calles save then new on pressing No in the confirmation alert', async () => {
      isDrillSaved = false;
      jest.spyOn(Alert, 'alert');

      const { getByTestId, getByText, debug } = await waitFor(() =>
        render(
          <PaperProvider>
            <CurrentDrillManager
              currentDrill={currentDrill}
              isDrillSaved={isDrillSaved}
              save={save}
              new={_new}
              rename={rename}
            />
          </PaperProvider>,
        ),
      );
      await fireEvent.press(getByTestId('headerButton'));
      await fireEvent.press(getByText('New'));

      // Opens confirmation Alert
      expect(Alert.alert).toHaveBeenCalled();

      // Press No
      expect(Alert.alert.mock.calls[0][2][2].text).toEqual('No');
      Alert.alert.mock.calls[0][2][2].onPress();

      expect(save).not.toBeCalled();
      expect(_new).toBeCalled();
    });
  });
});
