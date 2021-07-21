import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div >
            <NavLink className={s.item} activeClassName={s.ActiveItem} to={'/dialogs/' + props.id}>{props.name} </NavLink>
        </div>
    )
}

export default DialogItem