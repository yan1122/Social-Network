import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {InjectedFormProps, reduxForm} from "redux-form";

export type postsType = {
    message: string
    id: string
    likesCount: number
}

export type MyPostsPropsType = {
    posts: Array<postsType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

type FormDataType = {
    post: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p: postsType) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
    }

    let updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }


    return (
        <div>
            <div className={s.title}>
                My Posts
            </div>
            <div className={s.area}>
                <textarea onChange={updateNewPostText} value={props.newPostText} ref={newPostElement}/>
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