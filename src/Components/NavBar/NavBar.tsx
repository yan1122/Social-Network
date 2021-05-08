import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

const NavBar = () => {
    return(
        <div className={s.nav}>
        <div>
          <NavLink to='/profile' activeClassName={s.ActiveItem} className={s.item}>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/dialogs' activeClassName={s.ActiveItem} className={s.item}>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/news' activeClassName={s.ActiveItem} className={s.item}>News</NavLink>
        </div>
        <div>
          <NavLink to='/music' activeClassName={s.ActiveItem} className={s.item}>Music</NavLink>
        </div>
        <div>
          <NavLink to='settings' activeClassName={s.ActiveItem} className={s.item}>Settings</NavLink>
        </div>
        
      </div>
    )
}

export default NavBar