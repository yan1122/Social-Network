import { MessagesDataType } from './../Components/Dialogs/Dialogs';
import { v1 } from "uuid"
import { DialogsDataType } from "../Components/Dialogs/Dialogs"
import { postsType } from "../Components/Profile/MyPosts/MyPosts"

let rerenderEntireTree = () => {
console.log('State changed')
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

let state:StateType ={
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
}

export const addPost = (postMessage:string) => {
    let newPost = {message:postMessage,id:v1(),likesCount:0}
    state.ProfilePage.posts.push(newPost)
    rerenderEntireTree()
}

export const updateNewPostText = (NewText:string) => {
    state.ProfilePage.newPostText=NewText
    rerenderEntireTree()
}

export const subscriber = (observer:()=>void) => {
    rerenderEntireTree = observer
}

export default state

