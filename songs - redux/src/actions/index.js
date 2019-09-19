//Action creator
export const selectSong = song => {
  return {
    type: 'SELECTED_SONGS',
    payload: song
  };
};
