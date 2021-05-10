import React from 'react';
import MyPosts, { postsType } from './MyPosts/MyPosts';

import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType ={
  ProfilePage:any
  addPost:(postMessage:string) => void
  updateNewPostText:(NewText:string) => void
}

const Profile = (props:ProfilePropsType) => {
    return(
        <div className={s.content}>
        <ProfileInfo />
        <MyPosts updateNewPostText={props.updateNewPostText} newPostText={props.ProfilePage.newPostText} posts={props.ProfilePage.posts} addPost={props.addPost} />
      </div>
    )
}

export default Profile