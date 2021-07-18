import {MessagesDataType} from './../Components/Dialogs/Dialogs';
import {v1} from "uuid"
import {DialogsDataType} from "../Components/Dialogs/Dialogs"
import {postsType} from "../Components/Profile/MyPosts/MyPosts"
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";
import {userType} from "./UsersReducer";

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}

export type ProfilePageType = {
    posts: Array<postsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText:string
}

export type SideBarType = {}

export type UsersPageType = {
    users:Array<userType>
    PageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:Array<string>
}

export type StateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    SideBar:SideBarType
    UsersPage:UsersPageType
    Auth:any
}

let store: any = {
    _state: {
        ProfilePage: {
            posts: [
                {message: 'Я русский', id: v1(), likesCount: 12},
                {message: 'I am not Russian', id: v1(), likesCount: 1},
                {message: 'I am learn React', id: v1(), likesCount: 23},
            ],
            newPostText: ''
        },

        DialogsPage: {
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
        },

        SideBar:{}
    },

    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return (this._state)
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {

        ProfileReducer(this._state.ProfilePage,action)
        DialogsReducer(this._state.DialogsPage,action)
        SideBarReducer(this._state.SideBar,action)
            this._callSubscriber()
        }
    }


export const addPostActionCreator = () => {
    return {type: 'ADD-POST'}
}

export const UpdateNewPostTextActionCreator = (NewText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', NewText: NewText}
}

export const UpdateNewMessageTextActionCreator = (body:string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', body:body}
}

export const SendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'}
}



