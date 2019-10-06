import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamList from './components/streams/StreamList.component';
import StreamCreate from './components/streams/StreamCreate.component';
import StreamEdit from './components/streams/StreamEdit.component';
import StreamDelete from './components/streams/StreamDelete.component';
import StreamShow from './components/streams/StreamShow.component';
import Header from './components/Header.component';
import history from './history';

function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' component={StreamCreate} />
            <Route path='/streams/edit/:id' component={StreamEdit} />
            <Route path='/streams/delete/:id' component={StreamDelete} />
            <Route path='/streams/:id' component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
