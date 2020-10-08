export const saveDrill = (drill) => ({ type: 'SAVE_DRILL', value: drill });
export const renameDrill = (oldTitle, newTitle) => ({ type: 'RENAME_DRILL', value: { oldTitle, newTitle } });
export const deleteDrill = (title) => ({ type: 'DELETE_DRILL', value: title });
