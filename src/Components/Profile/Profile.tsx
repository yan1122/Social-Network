import React from 'react';
import MyPosts, { postsType } from './MyPosts/MyPosts';

import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType ={
  ProfilePage:any
  dispatch:(action:any) => void
}

const Profile = (props:ProfilePropsType) => {
    return(
        <div className={s.content}>
        <ProfileInfo />
        <MyPosts  newPostText={props.ProfilePage.newPostText} posts={props.ProfilePage.posts} dispatch={props.dispatch} />
      </div>
    )
}

export default Profile