import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";

let reducers = combineReducers({
    ProfilePage:ProfileReducer,
    DialogsPage:DialogsReducer,
    SideBar:SideBarReducer
})

let store = createStore(reducers)

export default  store