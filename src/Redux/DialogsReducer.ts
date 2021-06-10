import {v1} from "uuid";
import {DialogsPageType} from "./Store";

let InitialState = {
    dialogsData: [
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Lesha'},
        {id: v1(), name: 'Elena'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Ivan'}
    ],
    messagesData: [
        {message: 'Hi', id: v1()},
        {message: 'How are you?', id: v1()},
        {message: 'Lets drink beer today', id: v1()}
    ],
    newMessageText:''
}

export const DialogsReducer = (state:DialogsPageType = InitialState, action: any) => {
    switch(action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT" :
            state.newMessageText = action.body
            return state

        case "SEND-MESSAGE" :
            let body = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({message: body, id: v1()})
            return(state)
        default:return state
    }
}