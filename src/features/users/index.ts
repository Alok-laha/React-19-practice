import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from '../../types/user.types.ts'

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const data: User[] = await response.json();
    return data;
});

const initialState: {
    loading: boolean,
    users: User[],
    error:string
} = {
    loading: false,
    users: [],
    error: ''
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state)=>{
            state.error='';
            state.users=[];
            state.loading=true;
        });

        builder.addCase(fetchUsers.fulfilled,  (state, action)=>{
            state.error='';
            state.users=action.payload;
            state.loading=false;
        });

        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.error=action.error.message || 'Something went wrong';
            state.users=[];
            state.loading=false;
        });
    }
});

export default userSlice.reducer;
export {fetchUsers};