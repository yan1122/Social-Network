import React from 'react';
import MyPosts, {postsType} from './MyPosts/MyPosts';

import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {StateType} from "../../Redux/Store";

type ProfilePropsType = {
    ProfilePage: any
    dispatch: (action: any) => void
    store: any
    profile:any
    setUserProfile:(profile:any) => void
}

class ProfileAPIContainer  extends React.Component<ProfilePropsType, StateType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile} ProfilePage={this.props.ProfilePage} store={this.props.store} dispatch={this.props.dispatch}/>
        )
    }
}

const mapStateToProps =(state:any) => ({
profile:state.ProfilePage.profile
})
const ProfileContainer = connect(mapStateToProps,{setUserProfile})(ProfileAPIContainer)
export default ProfileContainer