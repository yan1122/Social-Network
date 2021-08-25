import {AuthApi} from "../api/Api";
import {stopSubmit} from "redux-form";
import {Auth} from "./AuthReducer";


let InitialState = {
    initialized: false
}


const AppReducer = (state: any = InitialState, action: any) => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {...state, initialized: true}
        default:
            return state
    }
}

export const SetInitialized = () => ({type: 'SET-INITIALIZED'})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(Auth())
    promise.then=(() => {
        dispatch(SetInitialized())
    })

}


export default AppReducer