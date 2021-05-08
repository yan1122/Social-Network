import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <div className='content'>
      <Route path='/profile' component={Profile} />
      <Route path='/dialogs' component={Dialogs} />
      <Route path='/news' component={News} />
      <Route path='/music' component={Music} />
      <Route path='/settings' component={Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
