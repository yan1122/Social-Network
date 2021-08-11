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

export const addPostActionCreator = (value:string) => {
    return {type: 'ADD-POST',value}
}

export const UpdateNewPostTextActionCreator = (NewText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', NewText: NewText}
}

export const UpdateNewMessageTextActionCreator = (body:string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', body:body}
}

export const SendMessageActionCreator = (value:string) => {
    return {type: 'SEND-MESSAGE',value}
}



