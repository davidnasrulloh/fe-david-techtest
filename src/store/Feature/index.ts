import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./FeaturesUsers/userSlice";

const rootReducer = combineReducers({
    users : userSlice
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer