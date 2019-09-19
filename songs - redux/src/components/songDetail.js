import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <p>Plese Select a Song from the list to see the details</p>
      </div>
    );
  }
  return (
    <div>
      <h3>Song Details</h3>
      <p>
        Title of the song : {song.title}
        <br />
        Duration : {song.time}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};
export default connect(mapStateToProps)(SongDetail);
