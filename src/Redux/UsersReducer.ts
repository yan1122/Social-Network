import {UsersApi} from "../api/Api";

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
    isFetching: false,
    followingInProgress: []
}


const UsersReducer = (state: any = InitialState, action: any) => {
    switch (action.type) {

        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map((u: userType) => {
                    if (u.id === action.UserId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map((u: userType) => {
                    if (u.id === action.UserId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            }

        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.Page}
        }

        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.usersCount}
        }

        case 'TOGGLE-IS-FETCHING ' : {
            return {...state, isFetching: action.isFetching}
        }

        case 'TOGGLE-IS-FOLLOWING-PROGRESS' :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter((id: number) => id !== action.userId)]
            }


        default:
            return state
    }
}

export const followSuccess = (UserId: string) => ({type: 'FOLLOW', UserId})
export const unFollowSuccess = (UserId: string) => ({type: 'UNFOLLOW', UserId})
export const setUsers = (users: any) => ({type: 'SET-USERS', users})
export const setCurrentPage = (Page: number) => ({type: 'SET-CURRENT-PAGE', Page})
export const setTotalUsersCount = (usersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', usersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING ', isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId
})

export const getUsers = (currentPage:number,PageSize:number) => {

    return (dispatch: any) => {

        dispatch(toggleIsFetching(true))

        UsersApi.getUsers(currentPage, PageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const unFollow = (userId:string) => {

    return (dispatch: any) => {

        dispatch(toggleFollowingProgress(true, userId))
        UsersApi.UnFollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const follow = (userId:string) => {

    return (dispatch: any) => {

        dispatch(toggleFollowingProgress(true, userId))
        UsersApi.FollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}





export default UsersReducer