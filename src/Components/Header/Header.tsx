import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth:boolean
    login:string
}

const Header = (props:HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' alt='Ava'/>

            <div className={s.loginBlock}>


                {props.isAuth?props.login :<NavLink to='/login'>Login</NavLink>}
            </div>
        </div>
    );
}

export default Header