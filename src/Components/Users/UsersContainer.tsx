import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {StateType} from "../../Redux/Store";
import {FollowAC, setUsersAC, UnFollowAC, userType} from "../../Redux/UsersReducer";

const mapStateToProps = (state:StateType) => {
return {
    users:state.UsersPage.users
}
}

const mapDispatchToProps = (dispatch:any) => {
return{
    follow:(UserId:string) => dispatch(FollowAC(UserId)),
    unFollow:(UserId:string) => dispatch(UnFollowAC(UserId)),
    setUsers:(users:any) => dispatch(setUsersAC(users))
}
}



const UsersContainer = connect (mapStateToProps,mapDispatchToProps) (Users)

export default UsersContainer