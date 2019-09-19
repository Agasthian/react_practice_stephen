import React from 'react';
import './videoItem.style.scss';

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div onClick={() => onSelectedVideo(video)} className='video-Item item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <h3 className='header'>{video.snippet.title}</h3>
        <p className='description'>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoItem;
