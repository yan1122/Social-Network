import React from 'react';
import { v1 } from 'uuid';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Redux/Store';
import s from './MyPosts.module.css'
import MyPosts from "./MyPosts";

export type postsType ={
  message:string
  id:string
  likesCount:number
}

export type MyPostsContainerPropsType ={
  store:any
}

const MyPostsContainer = (props:MyPostsContainerPropsType) => {
  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let updateNewPostText = (text:string) => {
    if(text) {
    props.store.dispatch(UpdateNewPostTextActionCreator(text))
    }
    else {
      props.store.dispatch(UpdateNewPostTextActionCreator(''))
    }
  }



  return (
      <MyPosts posts={state.ProfilePage.posts} newPostText={state.ProfilePage.newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
  )
}

export default MyPostsContainer