import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import Home from './components/Home';
import AnotherPage from './components/AnotherPage';
import NotFound from './components/NotFound';
import reducers from './reducers';
import messageMiddleware from './messageMiddleware';

const middlewares = [
  thunk, 
  logger,
  messageMiddleware
]

const createStoreWithMiddleware = compose(
  applyMiddleware(...middlewares),
  typeof window === 'object' &&
  typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
);

const store = createStore(
  reducers,
  createStoreWithMiddleware
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/another_page" component={AnotherPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
