import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    ProfilePage:ProfileReducer,
    DialogsPage:DialogsReducer,
    UsersPage:UsersReducer,
    SideBar:SideBarReducer
})
let store = createStore(reducers)

export default  store