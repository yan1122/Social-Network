import React from 'react';
import { NavLink } from 'react-router-dom';
import { v1} from 'uuid';
import s from './Dialogs.module.css'

type DialogItemPropsType = {
    name:string
    id: string
}

type MessagePropsType ={
    message:string
}

const DialogItem = (props:DialogItemPropsType) => {
    debugger
    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name} </NavLink>
        </div>
    )
}

const Message = (props:MessagePropsType) => {
    return(
        <div className="message">{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    <DialogItem name='Sasha' id={v1()} />
                    <DialogItem name='Viktor' id={v1()} />
                    <DialogItem name='Lesha' id={v1()} />
                    <DialogItem name='Elena' id={v1()} />
                    <DialogItem name='Dima' id={v1()} />
                    <DialogItem name='Ivan' id={v1()} />
            </div>
            <div className={s.messages}>
            <Message message='Hi' />
            <Message message='How are you?' />
            <Message message='Lets drink beer today' />
            </div>
        </div>
    )
}

export default Dialogs