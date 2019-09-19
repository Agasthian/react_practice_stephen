import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 84684a9cb8028f5fd7680ba0a349766f26e9ceb00c336cb7eafee9c89f385bb0'
  }
});
