/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction  } from "@reduxjs/toolkit"
import APIUsers from "../../../api/APIUsers"
import {UserData, UserState } from "../../../types"

const initialState: UserState = {
    data: {
        data: [],
        page: 1,
        per_page: 10,
        total: 0,
        total_pages: 0,
    },
    loading: false,
    status: "idle",
    error: 'undefined',
}


export const fetchUsers = createAsyncThunk("fetch/users", async(page: number)=>{
    try {
        const res = await APIUsers.getAllUsers(page)
        return (res as any)?.data;
    } catch (error) {
        console.log(error);
    }
})


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchUsers.pending, (state) =>{
                state.status = "loading"
            })
            .addCase(fetchUsers.fulfilled, (state, action : PayloadAction<UserData>) => {
                state.status = "success";
                state.data = action.payload;
                state.loading = false; 
            })
            .addCase(fetchUsers.rejected, (state, action)=>{
                state.status = "failed";
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default userSlice.reducer;