import { MessagesDataType } from './../Components/Dialogs/Dialogs';
import { v1 } from "uuid"
import { DialogsDataType } from "../Components/Dialogs/Dialogs"
import { postsType } from "../Components/Profile/MyPosts/MyPosts"

type ProfilePageType ={
    posts:Array<postsType>
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
    ]},
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

export default state

