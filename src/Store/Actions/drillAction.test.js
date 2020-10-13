import { saveDrill, renameDrill, deleteDrill } from './drillAction';
import { createDrill } from '../../Fixtures/TestFixtures';

describe('saveDrill', () => {
  const drill = createDrill();

  it('renders correctly', () => {
    expect(saveDrill(drill)).toEqual({ type: 'SAVE_DRILL', value: drill });
  });
});

describe('renameDrill', () => {
  it('renders correctly', () => {
    expect(renameDrill('previous title', 'new title')).toEqual({
      type: 'RENAME_DRILL',
      value: { oldTitle: 'previous title', newTitle: 'new title' },
    });
  });
});

describe('deleteDrill', () => {
  const title = 'title';

  it('renders correctly', () => {
    expect(deleteDrill(title)).toEqual({ type: 'DELETE_DRILL', value: title });
  });
});
