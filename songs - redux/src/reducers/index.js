import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'Only want you', time: '2:53' },
    { title: 'If You had my love', time: '3:20' },
    { title: 'Buttons', time: '6:17' },
    { title: 'Dont Call me up', time: '4:38' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECTED_SONGS') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songList: songReducer,
  selectedSong: selectedSongReducer
});
