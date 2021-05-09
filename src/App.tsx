import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs, { DialogsDataType, MessagesDataType } from './Components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import { postsType } from './Components/Profile/MyPosts/MyPosts';

type AppPropsType ={
state:any
}


function App(props:AppPropsType) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <div className='content'>
      <Route path='/profile' render={() => <Profile posts={props.state.ProfilePage.posts} />} />
      <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.DialogsPage.dialogsData} messagesData={props.state.DialogsPage.messagesData} />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
