export const savePlay = (play) => ({ type: 'SAVE_PLAY', value: play });
export const renamePlay = (uuid, newTitle) => ({ type: 'RENAME_PLAY', value: { uuid, newTitle } });
export const deletePlay = (uuid) => ({ type: 'DELETE_PLAY', value: uuid });
