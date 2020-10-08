import drillReducer from './drillReducer';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('drillReducer', () => {
  const drill = {
    drill: {
      positions: [0],
    },
    oldTitle: 'Old title',
    title: 'Title',
  };
  const initialState = [drill];

  describe('When handling SAVE_DRILL', () => {
    it('when saving an existing drill', () => {
      const newDrill = {
        drill: {
          positions: [1],
        },
        oldTitle: 'Old title',
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

    it('when renaming an existing drill', () => {
      const newDrill = {
        drill: {
          positions: [0],
        },
        oldTitle: 'Title',
        title: 'New Title',
      };
      expect(drillReducer(initialState, { type: 'SAVE_DRILL', value: newDrill })).toEqual([newDrill]);
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
