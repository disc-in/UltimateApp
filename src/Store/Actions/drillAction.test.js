import { saveDrill } from './drillAction';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('saveDrill', () => {
  const drill = createDrill();

  it('renders correctly', () => {
    expect(saveDrill(drill)).toEqual({ type: 'SAVE_DRILL', value: drill });
  });
});
