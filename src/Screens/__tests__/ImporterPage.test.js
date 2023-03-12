import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import * as firebase from '../../utils/firebase';
import * as flashMessage from '../../utils/flashMessage';
import { createDrill } from '../../Fixtures/TestFixtures';
import * as random from '../../utils/random';

import { ImporterPage } from '../ImporterPage';

describe('<ImporterPage />', () => {
  afterEach(() => jest.clearAllMocks());

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
  const drill = createDrill({ id: 1, custom: true });
  const navigation = { navigate: jest.fn() };
  const savePlay = jest.fn();
  const saveDrill = jest.fn();

  function itHandlesImport(route, identifier) {
    it('renders correctly before download', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(undefined)));
      const { toJSON } = render(
        <ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />,
      );
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders an error message if the play could not be found', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(null)));
      jest.spyOn(flashMessage, 'showError');

      const { getByTestId, toJSON } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );

      fireEvent.changeText(getByTestId('identifierInput'), identifier);
      await fireEvent.press(getByTestId('identifierInputSubmit'));

      expect(flashMessage.showError).toHaveBeenCalled();
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders correctly after download', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

      const { getByTestId, toJSON } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );

      fireEvent.changeText(getByTestId('identifierInput'), identifier);
      await waitFor(() => fireEvent.press(getByTestId('identifierInputSubmit')));

      expect(toJSON()).toMatchSnapshot();
    });

    it('goes back to beginning on cancel', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

      const { getByText, getByTestId, toJSON } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );

      fireEvent.changeText(getByTestId('identifierInput'), identifier);
      await waitFor(() => fireEvent.press(getByTestId('identifierInputSubmit')));

      await fireEvent.press(getByText('Cancel'));

      expect(toJSON()).toMatchSnapshot();
    });
  }

  describe('when routing on plays', () => {
    const route = {
      params: {
        source: 'customPlays',
      },
    };

    itHandlesImport(route, '123');

    it('saves play and opens editor on confirmation', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));
      jest.spyOn(random, 'generateUuid').mockImplementation(() => '123456');

      const { getByTestId, getByText } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );

      fireEvent.changeText(getByTestId('identifierInput'), '123');
      await waitFor(() => fireEvent.press(getByTestId('identifierInputSubmit')));
      await fireEvent.press(getByText('Yes'));

      const importedPlay = { ...play, uuid: '123456' };
      expect(savePlay).toHaveBeenCalledWith(importedPlay);
      expect(saveDrill).not.toHaveBeenCalled();
      expect(navigation.navigate).toHaveBeenCalledWith('PlayEditorPage', { currentPlay: importedPlay });
    });
  });

  describe('when routing on drills', () => {
    const route = {
      params: {
        source: 'customDrills',
      },
    };

    itHandlesImport(route, '123');

    it('saves play and opens editor on confirmation', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(drill)));
      jest.spyOn(random, 'generateUuid').mockImplementation(() => '123456');

      const { getByTestId, getByText } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );
      fireEvent.changeText(getByTestId('identifierInput'), '123');
      await waitFor(() => fireEvent.press(getByTestId('identifierInputSubmit')));
      await fireEvent.press(getByText('Yes'));

      const importedDrill = { ...drill, id: '123456' };
      expect(savePlay).not.toHaveBeenCalled();
      expect(saveDrill).toHaveBeenCalledWith(importedDrill);
      expect(navigation.navigate).toHaveBeenCalledWith('DrillPage', { id: '123456' });
    });
  });
});
