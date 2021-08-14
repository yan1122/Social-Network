import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Logout} from "../../Redux/AuthReducer";

export type HeaderPropsType = {
    isAuth:boolean
    login:string
    logout:() => void
}

const Header = (props:HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' alt='Ava'/>

            <div className={s.loginBlock}>

                {props.isAuth
                    ?<div>{props.login} <button onClick={props.logout}>Logout</button></div>
                    :<NavLink to='/login'>Login</NavLink>}
            </div>
        </div>
    );
}

export default Header