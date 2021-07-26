import {v1} from "uuid";
import {ProfilePageType} from "./Store";
import {ProfileApi} from "../api/Api";

let InitialState = {
    posts: [
        {message: 'Я русский', id: v1(), likesCount: 12},
        {message: 'I am not Russian', id: v1(), likesCount: 1},
        {message: 'I am learn React', id: v1(), likesCount: 23},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const ProfileReducer = (state: ProfilePageType = InitialState, action: any) => {
    switch (action.type) {

        case 'ADD-POST': {
            let newPost = {message: state.newPostText, id: v1(), likesCount: 0}
            let newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost)
            newState.newPostText = ''
            return (newState)
        }

        case 'UPDATE-NEW-POST-TEXT' :
            let newState = {...state}
            newState.newPostText = action.NewText
            return newState

        case 'SET-USER-PROFILE' : {
            return {...state, profile: action.profile}
        }

        case 'SET-STATUS' : {
            return {...state, status: action.status}
        }

        default:
            return state
    }

}

export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile})
export const getUserProfile = (userId: string) => {
    return (dispatch: any) => {
        ProfileApi.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const setStatus = (status: string) => ({type: 'SET-STATUS', status})

export const getStatus = (userId: string) => {
    return (dispatch: any) => {
        ProfileApi.getStatus(userId)
            .then(res => dispatch(setStatus(res.data)))

    }
}
export const updateStatus = (status: string) => (dispatch: any) => {
    ProfileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}