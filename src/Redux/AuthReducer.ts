import {AuthApi} from "../api/Api";


let InitialState = {
    userId: null,
    email: "null",
    login: "null",
    isFetching: false,
    isAuth: false,
}


const AuthReducer = (state: any = InitialState, action: any) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}

        default:
            return state
    }
}

export const setAuthUserData = (userId: any, email: string, login: string,isAuth:boolean) => ({
    type: 'SET-USER-DATA',
    data: {userId, email, login,isAuth }
})

export const Auth = () => {
    return (dispatch: any) => {
        AuthApi.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login,true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    AuthApi.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(Auth())
        }
    })
}

export const Logout = () => (dispatch: any) => {
    AuthApi.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, 'null', 'null',false))
        }
    })
}

export default AuthReducer