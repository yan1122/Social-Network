
import {
    SendMessageActionCreator,
    StateType,
    UpdateNewMessageTextActionCreator
} from "../../Redux/Store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export type DialogsDataType ={
    id:string
    name:string
}

let mapStateToProps = (state:StateType) => {
return {
    dialogsData:state.DialogsPage.dialogsData,
    messagesData:state.DialogsPage.messagesData,
    newMessageText:state.DialogsPage.newMessageText,
    isAuth:state.Auth.isAuth
}
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        onNewMessageChange:(text:string) => {dispatch(UpdateNewMessageTextActionCreator(text))},
        onSendMessageClick:() => {dispatch(SendMessageActionCreator())}
    }

}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer