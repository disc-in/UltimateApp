import drillReducer from './drillReducer';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('drillReducer', () => {
  const drill = {
    drill: {
      positions: [0],
    },
    title: 'Title',
  };
  const initialState = [drill];

  describe('When handling SAVE_DRILL', () => {
    it('when saving an existing drill', () => {
      const newDrill = {
        drill: {
          positions: [1],
        },
        title: 'Title',
      };
      expect(drillReducer(initialState, { type: 'SAVE_DRILL', value: newDrill })).toEqual([newDrill]);
    });

    it('when saving a new drill', () => {
      const newDrill = {
        drill: {
          positions: [1],
        },
        title: 'New Title',
      };
      expect(drillReducer(initialState, { type: 'SAVE_DRILL', value: newDrill })).toEqual([drill, newDrill]);
    });
  });

  describe('When handling RENAME_DRILL', () => {
    it('when renaming an existing drill', () => {
      const value = {
        oldTitle: 'Title',
        newTitle: 'New Title',
      };
      expect(drillReducer(initialState, { type: 'RENAME_DRILL', value })).toEqual([{ ...drill, title: 'New Title' }]);
    });

    it('when renaming an unknown drill', () => {
      const value = {
        oldTitle: 'Unknown title',
        newTitle: 'New Title',
      };
      expect(drillReducer(initialState, { type: 'DELETE_DRILL', value: 'unknown drill' })).toEqual([drill]);
    });
  });

  describe('When handling DELETE_DRILL', () => {
    it('when deleting an existing drill', () => {
      expect(drillReducer(initialState, { type: 'DELETE_DRILL', value: drill.title })).toEqual([]);
    });

    it('when deleting an unknown drill', () => {
      expect(drillReducer(initialState, { type: 'DELETE_DRILL', value: 'unknown drill' })).toEqual([drill]);
    });
  });

  it('when handling a unknown action type it does not change the state', () => {
    expect(drillReducer(initialState, { type: 'UKNOWN', value: drill })).toEqual([drill]);
  });

  it('has a default state', () => {
    expect(drillReducer(undefined, { type: 'unknown' })).toEqual([]);
  });
});
