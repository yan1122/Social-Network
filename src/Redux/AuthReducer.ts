import {v1} from "uuid";
import {AuthApi} from "../api/Api";


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

export const Auth = () => {
    return (dispatch:any) => {
        AuthApi.me().then(data => {
            if(data.resultCode === 0 ){
                let{id,email,login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}
export default AuthReducer