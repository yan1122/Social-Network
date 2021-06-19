import {v1} from "uuid";
import {ProfilePageType} from "./Store";

let InitialState = {
    posts: [
    {message: 'Я русский', id: v1(), likesCount: 12},
    {message: 'I am not Russian', id: v1(), likesCount: 1},
    {message: 'I am learn React', id: v1(), likesCount: 23},
],
    newPostText: ''
}

export const ProfileReducer = (state:ProfilePageType = InitialState,action: any) => {
    switch (action.type) {

        case 'ADD-POST':{
            let newPost = {message: state.newPostText, id: v1(), likesCount: 0}
            let newState = {...state}
            newState.posts=[...state.posts]
            newState.posts.push(newPost)
            newState.newPostText = ''
            return(newState)}

        case 'UPDATE-NEW-POST-TEXT' :
            let newState = {...state}
            newState.newPostText = action.NewText
            return newState

        default:return state
    }

}