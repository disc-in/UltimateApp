import { savePlay, renamePlay, deletePlay } from './playAction';

describe('savePlay', () => {
  const play = {
    uuid: '123',
    animation: {},
    title: 'Title',
  };

  it('renders correctly', () => {
    expect(savePlay(play)).toEqual({ type: 'SAVE_PLAY', value: play });
  });
});

describe('renamePlay', () => {
  it('renders correctly', () => {
    expect(renamePlay('123', 'new title')).toEqual({
      type: 'RENAME_PLAY',
      value: { identifier: '123', newTitle: 'new title' },
    });
  });
});

describe('deletePlay', () => {
  const identifier = '123';

  it('renders correctly', () => {
    expect(deletePlay(identifier)).toEqual({ type: 'DELETE_PLAY', value: identifier });
  });
});
