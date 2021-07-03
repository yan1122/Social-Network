import {v1} from "uuid";

export type userType = {
    id: string
    isFollowed: boolean
    photoUrl: string
    name: string
    status: string
    photos: any
}


let InitialState = {
    users: [],
    PageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
}


const UsersReducer = (state: any = InitialState, action: any) => {
    switch (action.type) {

        case 'FOLLOW' : {
            let StateCopy = {
                ...state,
                users: state.users.map((u: userType) => {
                    if (u.id === action.UserId) {
                        return {...u, isFollowed: true}
                    }
                    return u
                })
            }
            return StateCopy
        }

        case 'UNFOLLOW' :
            let StateCopy = {
                ...state,
                users: state.users.map((u: userType) => {
                    if (u.id === action.UserId) {
                        return {...u, isFollowed: false}
                    }
                    return u
                })
            }
            return StateCopy

        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            }

        case 'SET-CURRENT-PAGE':{
            return{...state,currentPage:action.Page}
        }

        case 'SET-TOTAL-USERS-COUNT':{
            return{...state,totalUsersCount:action.usersCount}
        }

        default:
            return state
    }
}

export const FollowAC = (UserId: string) => ({type: 'FOLLOW', UserId})
export const UnFollowAC = (UserId: string) => ({type: 'UNFOLLOW', UserId})
export const setUsersAC = (users: any) => ({type: 'SET-USERS', users})
export const setCurrentPageAC = (Page:number) => ({type:'SET-CURRENT-PAGE',Page})
export const setTotalUsersCountAC = (usersCount:number) => ({type:'SET-TOTAL-USERS-COUNT',usersCount})

export default UsersReducer