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
import { StateType } from './Redux/State';

type AppPropsType ={
state:StateType
dispatch:(action:any) => void
}


function App(props:AppPropsType) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <div className='content'>
      <Route path='/profile' render={() => <Profile dispatch={props.dispatch} ProfilePage={props.state.ProfilePage} />} />
      <Route path='/dialogs' render={() => <Dialogs dispatch={props.dispatch} DialogsPage={props.state.DialogsPage} />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
