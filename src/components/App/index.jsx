import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../Dashboard';

const App = () => (
  <div>
    <Route exact path="/lista" render={() => <div>Lista</div>} />
    <Route exact path="/" render={() => <div>Home</div>} />
    <Route exact path="/dashboard" component={Dashboard} />
  </div>
);

export default App;
