import {v1} from "uuid";


export const ProfileReducer = (state: any, action: any) => {
    switch (action.type) {

        case 'ADD-POST':
            let newPost = {message: state.newPostText, id: v1(), likesCount: 0}
            state.posts.push(newPost)
            return(state)

        case 'UPDATE-NEW-POST-TEXT' :
            state.newPostText = action.NewText
            return state

        default:return state
    }


    return state
}