import {v1} from "uuid";
import {DialogsPageType} from "./Store";
import {DialogsDataArrayType, MessagesDataArrayType} from "../Components/Dialogs/Dialogs";

export type InitialStateType = {
    dialogsData:DialogsDataArrayType
    messagesData:MessagesDataArrayType
    newMessageText:string
}

let InitialState:InitialStateType = {
    dialogsData:
        [{id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Lesha'},
        {id: v1(), name: 'Elena'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Ivan'},]
    ,
    messagesData: [
        {message: 'Hi', id: v1()},
        {message: 'How are you?', id: v1()},
        {message: 'Lets drink beer today', id: v1()},
    ],
    newMessageText:''
}

export const DialogsReducer = (state:DialogsPageType = InitialState, action: any) => {



    switch(action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT" :{
            state.newMessageText = action.body
            return {...state}}

        case "SEND-MESSAGE" :
            let body = state.newMessageText
            state.messagesData.push({message:body,id:v1()})
            state.newMessageText = ''
            return {...state}
        default:return state
    }
}