import React, {ChangeEvent} from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType, SendMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../Redux/Store";
import Dialogs from "./Dialogs";



type DialogsPropsType ={
    store:any
}

export type DialogsDataType ={
    id:string
    name:string
}

export type MessagesDataType ={
id:string
message:string
}




const DialogsContainer = (props:DialogsPropsType) => {
    let state = props.store.getState()
    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageActionCreator())
    }
    let onNewMessageChange = (text:string) => {
        props.store.dispatch(UpdateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs DialogsPage={state.DialogsPage} onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} />
    )
}

export default DialogsContainer