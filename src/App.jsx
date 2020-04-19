import React from 'react';

import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import store from './store'

import Main from './views/Main'
import Lose from './views/Lose';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/gameover' >
              <Lose />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
