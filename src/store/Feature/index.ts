import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./FeaturesUsers/userSlice";
import userDetailSlice from "./FeaturesUsers/userDetailSlice";

const rootReducer = combineReducers({
    users : userSlice,
    usersdetails: userDetailSlice
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer