import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {StateType} from "../../Redux/Store";
import {withRouter,RouteComponentProps} from 'react-router';

type PathParamType = {
userId:string
}

type mapStatePropsType = {
    profile:any
}

type mapDispatchPropsType = {
    setUserProfile:(profile:any) => void
}

type OwnPropsType = mapStatePropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType


let ProfileAPIContainer = (props:PropsType) => {
    useEffect(() => {
        let userId = props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setUserProfile(response.data)
            })
    }, [])
    return (
        <Profile profile={props.profile}/>
    )
}

const mapStateToProps =(state:any):mapStatePropsType => ({
profile:state.ProfilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileAPIContainer)
const ProfileContainer = connect(mapStateToProps,{setUserProfile})(withUrlDataContainerComponent)
export default ProfileContainer