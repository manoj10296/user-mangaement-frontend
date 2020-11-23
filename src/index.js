import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import saga from './redux/saga/watcherSaga'
import { createLogger } from 'redux-logger';

const log = createLogger({
  timestamp: true,
  level: 'log',
  diff: true
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, log))

sagaMiddleware.run(saga)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
