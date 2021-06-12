import React from 'react';
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
import {StateType, StoreType} from './Redux/Store';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

type AppPropsType ={
state:StateType
dispatch:(action:any) => void
  store:any
}


function App(props:AppPropsType) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <div className='content'>
      <Route path='/profile' render={() => <Profile dispatch={props.dispatch} store={props.store} ProfilePage={props.state.ProfilePage} />} />
      <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
