import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength15, maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import {TextArea} from "../../../common/FormsControl/FormsControl";

export type postsType = {
    message: string
    id: string
    likesCount: number
}

export type MyPostsPropsType = {
    posts: Array<postsType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (value: string) => void
}

type FormDataType = {
    newPostBody: string
}

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p: postsType) => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = (values: any) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div>
            <div className={s.title}>
                My Posts
            </div>
            <MyPostsFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}

const MyPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.area}>
                <Field component={TextArea}
                       name={'newPostBody'}
                       placeholder={'Enter your post text'}
                validate={[requiredField,maxLength10]}/>
            </div>
            <div className={s.addButton}>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm<FormDataType>({form: "MypostsAddForm"})(MyPostsForm)


export default MyPosts