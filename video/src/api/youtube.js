import axios from 'axios';

// const KEY = 'AIzaSyBycHQlx1iMJ5_9SrUJllZNV9Wn_3aXv3U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {}
});
