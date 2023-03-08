import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import * as firebase from '../../utils/firebase';
import * as flashMessage from '../../utils/flashMessage';
import { createDrill } from '../../Fixtures/TestFixtures';

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

  function itHandlesImport(route) {
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

      const { getByText, toJSON } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );
      expect(flashMessage.showError).toHaveBeenCalled();
      expect(toJSON()).toMatchSnapshot();
    });

    it('renders correctly after download', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

      const { getByText, toJSON } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );
      await fireEvent.press(getByText('Cancel'));
      expect(toJSON()).toMatchSnapshot();
    });

    it('goes back to home on cancel', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

      const { getByText } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );
      await fireEvent.press(getByText('Cancel'));

      expect(navigation.navigate).toHaveBeenCalledWith('HomePage');
    });
  }

  describe('when routing on old customPlays link', () => {
    const route = {
      params: {
        source: undefined,
        uuid: '123',
      },
    };

    itHandlesImport(route);

    it('saves play and opens editor on confirmation', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

      const { getByText } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );
      await fireEvent.press(getByText('Yes'));

      expect(savePlay).toHaveBeenCalledWith(play);
      expect(saveDrill).not.toHaveBeenCalled();
      expect(navigation.navigate).toHaveBeenCalledWith('PlayEditorPage', { currentPlay: play });
    });
  });

  describe('when routing on plays', () => {
    const route = {
      params: {
        source: 'plays',
        uuid: '123',
      },
    };

    itHandlesImport(route);

    it('saves play and opens editor on confirmation', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(play)));

      const { getByText } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );
      await fireEvent.press(getByText('Yes'));

      expect(savePlay).toHaveBeenCalledWith(play);
      expect(saveDrill).not.toHaveBeenCalled();
      expect(navigation.navigate).toHaveBeenCalledWith('PlayEditorPage', { currentPlay: play });
    });
  });

  describe('when routing on drills', () => {
    const route = {
      params: {
        source: 'drills',
        uuid: '123',
      },
    };

    itHandlesImport(route);

    it('saves play and opens editor on confirmation', async () => {
      jest.spyOn(firebase, 'download').mockImplementation(() => new Promise((resolve) => resolve(drill)));

      const { getByText } = await waitFor(() =>
        render(<ImporterPage navigation={navigation} route={route} savePlay={savePlay} saveDrill={saveDrill} />),
      );
      await fireEvent.press(getByText('Yes'));

      expect(savePlay).not.toHaveBeenCalled();
      expect(saveDrill).toHaveBeenCalledWith(drill);
      expect(navigation.navigate).toHaveBeenCalledWith('DrillPage', { id: drill.id });
    });
  });
});
