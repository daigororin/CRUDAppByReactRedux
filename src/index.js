import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk'

import './index.css';
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
