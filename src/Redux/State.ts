import { MessagesDataType } from './../Components/Dialogs/Dialogs';
import { v1 } from "uuid"
import { DialogsDataType } from "../Components/Dialogs/Dialogs"
import { postsType } from "../Components/Profile/MyPosts/MyPosts"

export type StoreType = {
    _state:StateType
    _callSubscriber:() => void
    getState:()=>StateType
    subscriber:(observer:()=>void) => void
    dispatch:(action:any) => void
}

export type ProfilePageType ={
    posts:Array<postsType>
    newPostText:string
}

type DialogsPageType ={
    dialogsData:Array<DialogsDataType>
    messagesData:Array<MessagesDataType>
}

export type StateType ={
ProfilePage:ProfilePageType
DialogsPage:DialogsPageType
}

let store:StoreType = {
 _state:{
    ProfilePage:{
    posts:[
        {message:'Я русский' , id:v1(),likesCount:12},
        {message:'I am not Russian' , id:v1(),likesCount:1},
        {message:'I am learn React' , id:v1(),likesCount:23},
    ],
    newPostText: ''
},
    
    DialogsPage:{
    dialogsData:[
        { id: v1(), name: 'Sasha' },
        { id: v1(), name: 'Viktor' },
        { id: v1(), name: 'Lesha' },
        { id: v1(), name: 'Elena' },
        { id: v1(), name: 'Dima' },
        { id: v1(), name: 'Ivan' }
      ],
    messagesData:[
        {message:'Hi',id:v1()},
        {message:'How are you?',id:v1()},
        {message:'Lets drink beer today',id:v1()}
      ]}
},
_callSubscriber(){
    console.log('State changed')
    },


getState () {
    return(this._state)
},
subscriber (observer:()=>void) {
    this._callSubscriber = observer
},

dispatch(action:any) {
if(action.type === 'ADD-POST'){
    let newPost = {message:this._state.ProfilePage.newPostText,id:v1(),likesCount:0}
        this._state.ProfilePage.posts.push(newPost)
        this._callSubscriber()
}

else if(action.type === 'UPDATE-NEW-POST-TEXT'){
    this._state.ProfilePage.newPostText=action.NewText
    this._callSubscriber()
}
}
}

export const addPostActionCreater =() => {
    return{type:'ADD-POST'}
  }
  
export const UpdateNewPostTextActionCreater = (NewText:string) =>{
  return{type:'UPDATE-NEW-POST-TEXT',NewText:NewText}
  }
  


export default store

