import React from 'react';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';
import s from './Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name} </NavLink>
        </div>
    )
}

export default DialogItem