// This file is for having the cake slice in one place.
import {createSlice} from '@reduxjs/toolkit';
import { cakeActions } from '../cake/index.ts';

const initialState = {
    numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        orderIceCream: (state, action) => {
            state.numOfIceCreams -= action.payload || 1;
        },
        addToInventory: (state, action) => {
            state.numOfIceCreams += action.payload || 1;
        }
    },
    extraReducers: (builder) => {
        // Think of whenenever a cake is ordered, an ice cream is given as an offer. Here we are listening to the orderCake action and updating the ice cream state accordingly.
        builder.addCase(cakeActions.orderCake, (state) => {
            state.numOfIceCreams--;
        })
    }
});

// we need to export the reducers and actions separately.
export default iceCreamSlice.reducer;

export const iceCreamActions = iceCreamSlice.actions;