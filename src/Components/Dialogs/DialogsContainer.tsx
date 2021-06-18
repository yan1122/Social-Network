import React, {ChangeEvent} from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {
    DialogsPageType,
    SendMessageActionCreator,
    StateType,
    UpdateNewMessageTextActionCreator
} from "../../Redux/Store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


export type DialogsDataType ={
    id:string
    name:string
}

let mapStateToProps = (state:any) => {
return {
    DialogsPage:state.DialogsPage
}
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        onNewMessageChange:(text:string) => {dispatch(UpdateNewMessageTextActionCreator(text))},
        onSendMessageClick:() => {dispatch(SendMessageActionCreator())}
    }

}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer