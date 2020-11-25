import { savePlay, renamePlay, deletePlay } from './playAction';
import { createPlay } from '../../Fixtures/TestFixtures';

describe('savePlay', () => {
  const play = {
    animation: {},
    title: 'Title',
  };

  it('renders correctly', () => {
    expect(savePlay(play)).toEqual({ type: 'SAVE_PLAY', value: play });
  });
});

describe('renamePlay', () => {
  it('renders correctly', () => {
    expect(renamePlay('previous title', 'new title')).toEqual({
      type: 'RENAME_PLAY',
      value: { oldTitle: 'previous title', newTitle: 'new title' },
    });
  });
});

describe('deletePlay', () => {
  const title = 'title';

  it('renders correctly', () => {
    expect(deletePlay(title)).toEqual({ type: 'DELETE_PLAY', value: title });
  });
});
