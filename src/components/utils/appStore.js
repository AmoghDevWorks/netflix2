import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";

// console.log(userReducer,"heyyy"),

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
        }
    }
)

export default appStore;