import React from 'react';
import { v1 } from 'uuid';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import PostPropsType from './Post/Post'

export type postsType ={
  message:string
  id:string
  likesCount:number
}

export type MyPostsPropsType ={
  posts:Array<postsType>
}

const MyPosts = (props:MyPostsPropsType) => {
  let postsElements = props.posts.map((p:postsType) => <Post message={p.message} likesCount={p.likesCount} /> )
  return (
    <div>
      <div className={s.title}>
      My Posts
      </div>
        <div className={s.area}>
          <textarea />
        </div>
        <div className={s.addButton}>
          <button>Add Post</button>
        </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts