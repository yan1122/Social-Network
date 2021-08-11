import {v1} from "uuid";
import {DialogsPageType} from "./Store";
import {DialogsDataArrayType, MessagesDataArrayType} from "../Components/Dialogs/Dialogs";

export type InitialStateType = {
    dialogsData:DialogsDataArrayType
    messagesData:MessagesDataArrayType
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
}

export const DialogsReducer = (state:DialogsPageType = InitialState, action: any) => {


    switch(action.type) {
        case "SEND-MESSAGE" :
            let body = action.value
            return {...state,messagesData:[...state.messagesData,{message:body,id:v1()}]}
        default:return state
    }
}