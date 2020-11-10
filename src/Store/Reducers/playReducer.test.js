import playReducer from './playReducer';

describe('playReducer', () => {
  const play = {
    play: {
      positions: [0],
    },
    title: 'Title',
  };
  const initialState = [play];

  describe('When handling SAVE_PLAY', () => {
    it('when saving an existing play', () => {
      const newPlay = {
        play: {
          positions: [1],
        },
        title: 'Title',
      };
      expect(playReducer(initialState, { type: 'SAVE_PLAY', value: newPlay })).toEqual([newPlay]);
    });

    it('when saving a new play', () => {
      const newPlay = {
        play: {
          positions: [1],
        },
        title: 'New Title',
      };
      expect(playReducer(initialState, { type: 'SAVE_PLAY', value: newPlay })).toEqual([play, newPlay]);
    });
  });

  describe('When handling RENAME_PLAY', () => {
    it('when renaming an existing play', () => {
      const value = {
        oldTitle: 'Title',
        newTitle: 'New Title',
      };
      expect(playReducer(initialState, { type: 'RENAME_PLAY', value })).toEqual([{ ...play, title: 'New Title' }]);
    });

    it('when renaming an unknown play', () => {
      const value = {
        oldTitle: 'Unknown title',
        newTitle: 'New Title',
      };
      expect(playReducer(initialState, { type: 'DELETE_PLAY', value: 'unknown play' })).toEqual([play]);
    });
  });

  describe('When handling DELETE_PLAY', () => {
    it('when deleting an existing play', () => {
      expect(playReducer(initialState, { type: 'DELETE_PLAY', value: play.title })).toEqual([]);
    });

    it('when deleting an unknown play', () => {
      expect(playReducer(initialState, { type: 'DELETE_PLAY', value: 'unknown play' })).toEqual([play]);
    });
  });

  it('when handling a unknown action type it does not change the state', () => {
    expect(playReducer(initialState, { type: 'UKNOWN', value: play })).toEqual([play]);
  });

  it('has a default state', () => {
    expect(playReducer(undefined, { type: 'unknown' })).toEqual([]);
  });
});
