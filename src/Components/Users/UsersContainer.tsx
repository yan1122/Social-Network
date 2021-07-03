import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../Redux/Store";
import {
    FollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UnFollowAC,
    userType
} from "../../Redux/UsersReducer";
import axios from "axios";
import Users from "./Users";

export type UsersAPIPropsType = {
    users: Array<userType>
    PageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (UserId: string) => void
    unFollow: (UserId: string) => void
    setUsers: (users: any) => void
    setCurrentPage: (Page: number) => void
    setTotalUsersCount: (usersCount: number) => void
}


class UsersContainerComponent extends React.Component<UsersAPIPropsType, StateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.PageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: any) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.PageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return (
            <Users users={this.props.users}
                   setUsers={this.props.setUsers}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   PageSize={this.props.PageSize}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setCurrentPage={this.props.setCurrentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}/>
        )
    }
}

const mapStateToProps = (state:StateType) => {
return {
    users:state.UsersPage.users,
    PageSize:state.UsersPage.PageSize,
    totalUsersCount:state.UsersPage.totalUsersCount,
    currentPage:state.UsersPage.currentPage
}
}

const mapDispatchToProps = (dispatch:any) => {
return{
    follow:(UserId:string) => dispatch(FollowAC(UserId)),
    unFollow:(UserId:string) => dispatch(UnFollowAC(UserId)),
    setUsers:(users:any) => dispatch(setUsersAC(users)),
    setCurrentPage:(Page:number) => dispatch(setCurrentPageAC(Page)),
    setTotalUsersCount:(usersCount:number) => dispatch(setTotalUsersCountAC(usersCount)),
}
}



const UsersContainer = connect (mapStateToProps,mapDispatchToProps) (UsersContainerComponent)

export default UsersContainer