import favoriteReducer from './favoriteReducer';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('favoriteReducer', () => {
  const drill = createDrill({ id: 1 });
  const initialState = { favoriteDrills: [drill] };

  describe('When handling TOGGLE_FAVORITE', () => {
    it('when there is a toggle on a favorite drill', () => {
      expect(favoriteReducer(initialState, { type: 'TOGGLE_FAVORITE', value: drill })).toEqual({ favoriteDrills: [] });
    });

    it('when there is a toggle on another drill', () => {
      const newDrill = createDrill({ id: 2 });
      expect(favoriteReducer(initialState, { type: 'TOGGLE_FAVORITE', value: newDrill })).toEqual({
        favoriteDrills: [drill, newDrill],
      });
    });
  });

  it('when handling a unknown action type it does not change the state', () => {
    expect(favoriteReducer(initialState, { type: 'UKNOWN', value: drill })).toEqual({ favoriteDrills: [drill] });
  });

  it('has a default state', () => {
    expect(favoriteReducer(undefined, { type: 'unknown' })).toEqual({ favoriteDrills: [] });
  });
});
