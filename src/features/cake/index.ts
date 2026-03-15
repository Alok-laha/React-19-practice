// This file is for having the cake slice in one place.
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        orderCake: (state, action) => {
            state.numOfCakes -= action.payload || 1;
        },
        addToInventory: (state, action) => {
            state.numOfCakes += action.payload || 1;
        }
    }
});

// we need to export the reducers and actions separately.
export default cakeSlice.reducer;

export const cakeActions = cakeSlice.actions;