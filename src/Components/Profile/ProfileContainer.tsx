import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../Redux/ProfileReducer";
import {StateType} from "../../Redux/Store";
import {withRouter,RouteComponentProps} from 'react-router';
import {ProfileApi} from "../../api/Api";

type PathParamType = {
userId:string
}

type mapStatePropsType = {
    profile:any
}

type mapDispatchPropsType = {
    getUserProfile:(userId:string) => void
}

type OwnPropsType = mapStatePropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType


let ProfileAPIContainer = (props:PropsType) => {
    useEffect(() => {
        let userId = props.match.params.userId
        props.getUserProfile(userId)
    }, [])
    return (
        <Profile profile={props.profile}/>
    )
}

const mapStateToProps =(state:any):mapStatePropsType => ({
profile:state.ProfilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileAPIContainer)
const ProfileContainer = connect(mapStateToProps,{getUserProfile})(withUrlDataContainerComponent)
export default ProfileContainer