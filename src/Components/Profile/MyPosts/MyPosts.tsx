import React from 'react';
import { v1 } from 'uuid';
import s from './MyPosts.module.css'
import Post from './Post/Post';

let postsData = [
  {message:'Я русский' , id:v1(),likesCount:12},
  {message:'I am not Russian' , id:v1(),likesCount:1},
]

let postsElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount} /> )

const MyPosts = () => {
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