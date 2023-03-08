export const savePlay = (play) => ({ type: 'SAVE_PLAY', value: play });
export const renamePlay = (identifier, newTitle) => ({ type: 'RENAME_PLAY', value: { identifier, newTitle } });
export const deletePlay = (identifier) => ({ type: 'DELETE_PLAY', value: identifier });
