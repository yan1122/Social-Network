import React, {ChangeEvent} from 'react';
import { v1 } from 'uuid';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Redux/Store';
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
  newPostText:string
  updateNewPostText:(text:string) => void
  addPost:() =>void
}

const MyPosts = (props:MyPostsPropsType) => {
  let postsElements =  props.posts.map((p:postsType) => <Post message={p.message} likesCount={p.likesCount} /> )

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    props.addPost()
  }

  let updateNewPostText = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
  }



  return (
    <div>
      <div className={s.title}>
      My Posts
      </div>

        <div className={s.area}>
          <textarea onChange={updateNewPostText} value={props.newPostText} ref={newPostElement} />
        </div>

        <div className={s.addButton}>
          <button onClick={addPost}>Add Post</button>
        </div>

      <div className={s.posts}>
        {postsElements}
      </div>

    </div>
  )
}

export default MyPosts