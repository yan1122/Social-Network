import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


type DialogsPropsType = {
    onNewMessageChange: (text: string) => void
    onSendMessageClick: () => void
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText:string
    isAuth:boolean
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



const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogsData.map((d:DialogsDataType) =>  <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElement = props.messagesData.map((m:MessagesDataType) => <Message key={m.id} message={m.message}/>)
    let newMessageText = props.newMessageText
    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e.currentTarget.value)
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageText} onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs