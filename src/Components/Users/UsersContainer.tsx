import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../Redux/Store";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unFollow,
    unFollowSuccess,
    userType
} from "../../Redux/UsersReducer";
import Users from "./Users";
import {CircularProgress} from "@material-ui/core";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    GetUsers
} from "../../Redux/users-selectors";
import {AppRootStateType} from "../../Redux/ReduxStore";

export type UsersAPIPropsType = {
    users: Array<userType>
    PageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
    followSuccess: (UserId: string) => void
    unFollowSuccess: (UserId: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (Page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, PageSize: number) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}


class UsersContainerComponent extends React.Component<UsersAPIPropsType, StateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.PageSize)
    }

    onPageChanged = (p: number) => {
        this.props.getUsers(p, this.props.PageSize)
        this.props.setCurrentPage(p)
    }

    render() {
        return (<>
                {this.props.isFetching ? <CircularProgress/> : null}
                <Users users={this.props.users}
                       setUsers={this.props.setUsers}
                       currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                       followSuccess={this.props.followSuccess}
                       PageSize={this.props.PageSize}
                       setTotalUsersCount={this.props.setTotalUsersCount}
                       setCurrentPage={this.props.setCurrentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       unFollowSuccess={this.props.unFollowSuccess}
                       onPageChanged={this.onPageChanged}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}/>
            </>
        )
    }
}

// const mapStateToProps = (state: StateType) => {
//     return {
//         users: state.UsersPage.users,
//         PageSize: state.UsersPage.PageSize,
//         totalUsersCount: state.UsersPage.totalUsersCount,
//         currentPage: state.UsersPage.currentPage,
//         isFetching: state.UsersPage.isFetching,
//         followingInProgress: state.UsersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: GetUsers(state),
        PageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}



export default compose(
    connect(mapStateToProps, {
        followSuccess,
        unFollowSuccess,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers,
        unFollow,
        follow
    }),
)(UsersContainerComponent)