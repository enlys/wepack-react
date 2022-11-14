import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'antd-mobile/bundle/css-vars-patch.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
