import React from 'react';
import { v1 } from 'uuid';
import s from './../Dialogs.module.css'


type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Message