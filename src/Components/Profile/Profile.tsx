import React from 'react';
import MyPosts, { postsType } from './MyPosts/MyPosts';

import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType ={
  posts:Array<postsType>
}

const Profile = (props:ProfilePropsType) => {
    return(
        <div className={s.content}>
        <ProfileInfo />
        <MyPosts posts={props.posts} />
      </div>
    )
}

export default Profile