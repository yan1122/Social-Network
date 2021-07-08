import {v1} from "uuid";


let InitialState = {
    userId: null,
    email:"null",
    login:"null",
    isFetching:false,
    isAuth:false,
}


const AuthReducer = (state: any = InitialState, action: any) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return{...state,...action.data,isAuth:true}

        default:
            return state
    }
}

export const setAuthUserData = (userId:any,email:string,login:string) => ({type:'SET-USER-DATA',data: {userId, email, login}})

export default AuthReducer