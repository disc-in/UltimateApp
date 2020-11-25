export const savePlay = (play) => ({ type: 'SAVE_PLAY', value: play });
export const renamePlay = (oldTitle, newTitle) => ({ type: 'RENAME_PLAY', value: { oldTitle, newTitle } });
export const deletePlay = (title) => ({ type: 'DELETE_PLAY', value: title });
