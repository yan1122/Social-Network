import {DialogsDataType, MessagesDataType} from '../Components/Dialogs/Dialogs';
import {v1} from "uuid"
import {postsType} from "../Components/Profile/MyPosts/MyPosts"
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
v1();
v1();
v1();
v1();
v1();
v1();
v1();
v1();
v1();
v1();
v1();
v1();
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



