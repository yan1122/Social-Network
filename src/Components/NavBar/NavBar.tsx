import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

const NavBar = () => {
    return(
        <div className={s.nav}>
        <div>
          <NavLink to='/profile' className={s.item}>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/dialogs' className={s.item}>Messages</NavLink>
        </div>
        <div>
          <a className={s.item}>News</a>
        </div>
        <div>
          <a className={s.item}>Music</a>
        </div>
        <div>
          <a className={s.item}>Settings</a>
        </div>
        
      </div>
    )
}

export default NavBar