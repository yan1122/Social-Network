
import {addPostActionCreator, StateType, UpdateNewPostTextActionCreator} from '../../../Redux/Store';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

export type postsType ={
  message:string
  id:string
  likesCount:number
}

let mapStateToProps = (state:StateType) => {
  return{
    posts:state.ProfilePage.posts,
    newPostText:state.ProfilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch:any) => {
  return {
    addPost:() => {dispatch(addPostActionCreator())},
    updateNewPostText: (text:string) => {
      if(text) {
        dispatch(UpdateNewPostTextActionCreator(text))
      }
      else {
        dispatch(UpdateNewPostTextActionCreator(''))
      }
    }
    }
  }


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer

