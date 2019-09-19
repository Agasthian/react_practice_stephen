import React from 'react';

import VideoItem from '../videoItem/videoItem.component';

const VideoList = ({ videos, onSelectedVideo }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.snippet.title}
        video={video}
        onSelectedVideo={onSelectedVideo}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
