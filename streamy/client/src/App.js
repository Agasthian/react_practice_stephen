import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamList from './components/streams/StreamList.component';
import StreamCreate from './components/streams/StreamCreate.component';
import StreamEdit from './components/streams/StreamEdit.component';
import StreamDelete from './components/streams/StreamDelete.component';
import StreamShow from './components/streams/StreamShow.component';
import Header from './components/Header.component';

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' component={StreamCreate} />
          <Route path='/streams/edit' component={StreamEdit} />
          <Route path='/streams/delete' component={StreamDelete} />
          <Route path='/streams/show' component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
