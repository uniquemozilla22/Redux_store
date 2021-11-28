import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { createStore } from 'redux';
import reducers from './redux/reducer';
import { Provider } from 'react-redux';

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('fakeStore_app')
);

