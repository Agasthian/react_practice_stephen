import React from 'react';

import SongList from './components/songList';
import SongDetail from './components/songDetail';

function App() {
  return (
    <div className='ui container grid' style={{ marginTop: '2rem' }}>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className='column eight wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
