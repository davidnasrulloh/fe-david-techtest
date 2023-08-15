/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction  } from "@reduxjs/toolkit"
import APIUsers from "../../../api/APIUsers"
import { User, UserDetailState } from "../../../types"

const initialState: UserDetailState = {
    data: {
        id: 0, 
        email: "string",
        first_name: "string",
        last_name: "string",
        avatar: "string"
    },
    loading: false,
    status: "idle",
    error: 'undefined',
}

export const fetchUserDetails = createAsyncThunk("fetch/userDetails", async(id: number)=>{
    try {
        const res = await APIUsers.getDetailsUser(id);
        return res?.data;
    } catch (error) {
        console.log(error);
    }
})

const userDetailSlice = createSlice({
    name: "usersdetails",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchUserDetails.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchUserDetails.fulfilled, (state, action : PayloadAction<User>) => {
                state.status = "success";
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchUserDetails.rejected, (state, action)=>{
                state.status = "failed";
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default userDetailSlice.reducer;