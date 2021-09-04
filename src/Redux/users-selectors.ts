import {AppRootStateType} from "./ReduxStore";

export const GetUsers = (state:AppRootStateType) => {

    return state.UsersPage.users
}

export const getPageSize = (state:AppRootStateType) => {

    return state.UsersPage.PageSize
}

export const getTotalUsersCount = (state:AppRootStateType) => {

    return state.UsersPage.totalUsersCount
}

export const getCurrentPage = (state:AppRootStateType) => {

    return state.UsersPage.currentPage
}

export const getIsFetching = (state:AppRootStateType) => {

    return state.UsersPage.isFetching
}

export const getFollowingInProgress = (state:AppRootStateType) => {

    return state.UsersPage.followingInProgress
}

