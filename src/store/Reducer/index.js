import { combineReducers } from "redux"

import LoginReducer from "./LoginReducer";
import SidebarShow from "./SidebarShow";

const reducers = combineReducers({
    login: LoginReducer,
    sidebarShow: SidebarShow
});
export default reducers;