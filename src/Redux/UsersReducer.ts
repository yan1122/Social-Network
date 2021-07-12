import {v1} from "uuid";

export type userType = {
    id: string
    followed: boolean
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
    isFetching:false,
    followingInProgress:[ ]
}


const UsersReducer = (state: any = InitialState, action: any) => {
    switch (action.type) {

        case 'FOLLOW' : {
            let StateCopy = {
                ...state,
                users: state.users.map((u: userType) => {
                    if (u.id === action.UserId) {
                        return {...u, followed: true}
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
                        return {...u, followed: false}
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

        case 'TOGGLE-IS-FETCHING ' :{
            return{...state,isFetching:action.isFetching}
        }

        case 'TOGGLE-IS-FOLLOWING-PROGRESS' :
        return {...state,
            followingInProgress: action.isFetching
                ? [...state.followingInProgress,action.userId]
                :[state.followingInProgress.filter((id:number) => id!=action.userId)]
        }


        default:
            return state
    }
}

export const follow = (UserId: string) => ({type: 'FOLLOW', UserId})
export const unFollow = (UserId: string) => ({type: 'UNFOLLOW', UserId})
export const setUsers = (users: any) => ({type: 'SET-USERS', users})
export const setCurrentPage = (Page:number) => ({type:'SET-CURRENT-PAGE',Page})
export const setTotalUsersCount = (usersCount:number) => ({type:'SET-TOTAL-USERS-COUNT',usersCount})
export const toggleIsFetching = (isFetching:boolean) => ({type:'TOGGLE-IS-FETCHING ',isFetching})
export const toggleFollowingProgress = (isFetching:boolean,userId:string) => ({type:'TOGGLE-IS-FOLLOWING-PROGRESS',isFetching,userId})

export default UsersReducer