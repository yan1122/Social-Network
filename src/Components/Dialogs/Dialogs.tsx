import React from 'react';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


let dialogsData = [
    { id: v1(), name: 'Sasha' },
    { id: v1(), name: 'Viktor' },
    { id: v1(), name: 'Lesha' },
    { id: v1(), name: 'Elena' },
    { id: v1(), name: 'Dima' },
    { id: v1(), name: 'Ivan' }
]

let messagesData =[
    {message:'Hi',id:v1()},
    {message:'How are you?',id:v1()},
    {message:'Lets drink beer today',id:v1()}
]

let dialogsElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

let messagesElement = messagesData.map (m => <Message message={m.message} />)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs