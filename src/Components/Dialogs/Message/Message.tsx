import React from 'react';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';
import s from './Dialogs.module.css'


type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className="message">{props.message}</div>
    )
}


export default Message