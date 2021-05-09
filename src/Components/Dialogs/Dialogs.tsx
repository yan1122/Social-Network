import React from 'react';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';



type DialogsPropsType ={
    dialogsData:Array<DialogsDataType>
    messagesData:Array<MessagesDataType>
}

export type DialogsDataType ={
    id:string
    name:string
}

export type MessagesDataType ={
id:string
message:string
}




const Dialogs = (props:DialogsPropsType) => {

    let dialogsElement = props.dialogsData.map((d:DialogsDataType) => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.messagesData.map((m:MessagesDataType) => <Message message={m.message} />)

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