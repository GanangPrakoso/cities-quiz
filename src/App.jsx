import React from 'react';

import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import store from './store'

import LandingPage from './views/LandingPage'
import Main from './views/Main'
import Lose from './views/Lose';
import Victory from './views/Victory'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>

            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/play'>
              <Main />
            </Route>
            <Route exact path='/gameover' >
              <Lose />
            </Route>
            <Route exact path='/victory' >
              <Victory />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
