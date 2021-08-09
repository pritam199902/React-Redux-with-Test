import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {store} from './redux/store'
import {Provider} from 'react-redux'

const ReduxStoreConnet = () =>{
  return <Provider store={store}>
    <App />
  </Provider>
}

ReactDOM.render(
  <React.StrictMode>
    <ReduxStoreConnet />
  </React.StrictMode>,
  document.getElementById('root')
);

