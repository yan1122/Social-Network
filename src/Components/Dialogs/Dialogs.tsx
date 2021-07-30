import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type DialogsPropsType = {
    onNewMessageChange: (text: string) => void
    onSendMessageClick: () => void
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
    isAuth: boolean
}

export type DialogsDataType = {
    id: string
    name: string
}

export type MessagesDataType = {
    id: string
    message: string
}

export type DialogsDataArrayType = Array<DialogsDataType>

export type MessagesDataArrayType = Array<MessagesDataType>

 type FormDataType ={
     newMessageBody:string
 }

const addMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = (props:any) => {
    reduxForm<FormDataType>({form:'addMessageForm'})(addMessageForm)
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogsData.map((d: DialogsDataType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messagesData.map((m: MessagesDataType) => <Message key={m.id} message={m.message}/>)
    let newMessageText = props.newMessageText
    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux />
            </div>
        </div>
    )
}

export default Dialogs