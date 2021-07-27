import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    ProfilePage:ProfileReducer,
    DialogsPage:DialogsReducer,
    UsersPage:UsersReducer,
    SideBar:SideBarReducer,
    Auth:AuthReducer,
    form:formReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default  store

