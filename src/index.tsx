import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/ReduxStore'
import {StateType} from "./Redux/Store";

export let rerenderEntireTree = (state:StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App dispatch={store.dispatch.bind(store)} state={state} store={store}  />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})



