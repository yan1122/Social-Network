import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../Redux/Store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    userType
} from "../../Redux/UsersReducer";
import axios from "axios";
import Users from "./Users";
import {CircularProgress} from "@material-ui/core";

export type UsersAPIPropsType = {
    users: Array<userType>
    PageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
    follow: (UserId: string) => void
    unFollow: (UserId: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (Page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching:(isFetching:boolean) => void

}


class UsersContainerComponent extends React.Component<UsersAPIPropsType, StateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.PageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: any) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.PageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return (<>
                {this.props.isFetching?<CircularProgress /> : null}
            <Users users={this.props.users}
                   setUsers={this.props.setUsers}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   follow={this.props.follow}
                   PageSize={this.props.PageSize}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setCurrentPage={this.props.setCurrentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}/>
            </>
        )
    }
}

const mapStateToProps = (state:StateType) => {
return {
    users:state.UsersPage.users,
    PageSize:state.UsersPage.PageSize,
    totalUsersCount:state.UsersPage.totalUsersCount,
    currentPage:state.UsersPage.currentPage,
    isFetching:state.UsersPage.isFetching
}
}


export default connect (mapStateToProps,{
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
}) (UsersContainerComponent)