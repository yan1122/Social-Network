import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from '././Redux/State'

export let rerenderEntireTree = (state:any) => {
  ReactDOM.render(
    <React.StrictMode>
      <App updateNewPostText={updateNewPostText} addPost={addPost} state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}