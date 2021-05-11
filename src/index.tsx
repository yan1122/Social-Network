import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from '././Redux/State'

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App dispatch={store.dispatch.bind(store)} state={store.getState()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree()

store.subscriber(rerenderEntireTree)



