import React from 'react'
import {
    SendMessageActionCreator,
    StateType,
    UpdateNewMessageTextActionCreator
} from "../../Redux/Store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type DialogsDataType ={
    id:string
    name:string
}

let mapStateToProps = (state:StateType) => {
return {
    dialogsData:state.DialogsPage.dialogsData,
    messagesData:state.DialogsPage.messagesData,
    isAuth:state.Auth.isAuth
}
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        onNewMessageChange:(text:string) => {dispatch(UpdateNewMessageTextActionCreator(text))},
        onSendMessageClick:(value:string) => {dispatch(SendMessageActionCreator(value))}
    }

}



export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)