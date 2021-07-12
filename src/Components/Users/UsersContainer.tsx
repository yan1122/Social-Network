import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../Redux/Store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unFollow,
    userType
} from "../../Redux/UsersReducer";
import axios from "axios";
import Users from "./Users";
import {CircularProgress} from "@material-ui/core";
import {UsersApi} from "../../api/Api";

export type UsersAPIPropsType = {
    users: Array<userType>
    PageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
    follow: (UserId: string) => void
    unFollow: (UserId: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (Page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean,userId:string) => void

}


class UsersContainerComponent extends React.Component<UsersAPIPropsType, StateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersApi.getUsers(this.props.currentPage, this.props.PageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (p: any) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        UsersApi.getUsers(p, this.props.PageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (<>
                {this.props.isFetching ? <CircularProgress/> : null}
                <Users users={this.props.users}
                       setUsers={this.props.setUsers}
                       currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       PageSize={this.props.PageSize}
                       setTotalUsersCount={this.props.setTotalUsersCount}
                       setCurrentPage={this.props.setCurrentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       unFollow={this.props.unFollow}
                       onPageChanged={this.onPageChanged}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}/>
            </>
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.UsersPage.users,
        PageSize: state.UsersPage.PageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainerComponent)