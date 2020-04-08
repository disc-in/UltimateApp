import { toggleFavorite } from './favoriteAction';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('toggleFavorite', () => {
  const drill = createDrill();

  it('renders correctly', () => {
    expect(toggleFavorite(drill)).toEqual({ type: 'TOGGLE_FAVORITE', value: drill });
  });
});
