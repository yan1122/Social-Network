import {v1} from "uuid";


export const DialogsReducer = (state: any, action: any) => {
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