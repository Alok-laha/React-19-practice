import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/index.ts';
import iceCreamReducer from '../features/icecream/index.ts';
import userReducer from '../features/users/index.ts';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        users: userReducer
    }
});

export default store;