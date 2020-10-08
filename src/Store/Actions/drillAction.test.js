import { saveDrill, deleteDrill } from './drillAction';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('saveDrill', () => {
  const drill = createDrill();

  it('renders correctly', () => {
    expect(saveDrill(drill)).toEqual({ type: 'SAVE_DRILL', value: drill });
  });
});

describe('saveDrill', () => {
  const title = 'title';

  it('renders correctly', () => {
    expect(deleteDrill(title)).toEqual({ type: 'DELETE_DRILL', value: title });
  });
});
