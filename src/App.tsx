import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

type AppPropsType = {
    dispatch: (action: any) => void
    store: any
}


function App(props: AppPropsType) {

    let state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <NavBar/>
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;