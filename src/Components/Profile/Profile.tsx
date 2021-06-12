import React from 'react';
import MyPosts, {postsType} from './MyPosts/MyPosts';

import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    ProfilePage: any
    dispatch: (action: any) => void
    store: any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile