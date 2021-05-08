import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

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
        <Post message='Я русский' />
        <Post message='Это мой первый пост' />
      </div>
    </div>
  )
}

export default MyPosts