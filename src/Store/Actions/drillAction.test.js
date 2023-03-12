import { saveDrill, deleteDrill } from './drillAction';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('saveDrill', () => {
  const drill = createDrill();

  it('renders correctly', () => {
    expect(saveDrill(drill)).toEqual({ type: 'SAVE_DRILL', value: drill });
  });
});

describe('deleteDrill', () => {
  const id = '123';

  it('renders correctly', () => {
    expect(deleteDrill(id)).toEqual({ type: 'DELETE_DRILL', value: id });
  });
});
