import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {Field, InjectedFormProps, reduxForm,} from "redux-form";
import {TextArea} from "../../common/FormsControl/FormsControl";
import {maxLength15, maxLengthCreator, requiredField} from "../../utils/validators/validator";


type DialogsPropsType = {
    onNewMessageChange: (text: string) => void
    onSendMessageClick: (value:string) => void
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

type FormDataType = {
    newMessageBody: string
}


const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogsData.map((d: DialogsDataType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messagesData.map((m: MessagesDataType) => <Message key={m.id} message={m.message}/>)
    let addNewMessage = (values: any) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={TextArea}
                    name={'newMessageBody'}
                    validate={[requiredField]}
                    placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs