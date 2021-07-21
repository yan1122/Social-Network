import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    
    message:string
    likesCount:number
}

const Post =(props:PostPropsType) => {

    return(
        <div className={s.item}>
            <img src='https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg' alt={'ss'}/>
            {props.message}
            <br/>
            {props.likesCount} likes
            </div>
    )
}

export default Post