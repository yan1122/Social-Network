import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subscriber, updateNewPostText} from '././Redux/State'

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App updateNewPostText={updateNewPostText} addPost={addPost} state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree()

subscriber(rerenderEntireTree)



