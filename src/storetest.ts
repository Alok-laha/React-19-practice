import store from './store/store.ts';
// import the actions as well to dispatch them.
import {cakeActions} from './features/cake/index.ts';
import {iceCreamActions} from './features/icecream/index.ts';
import { fetchUsers } from './features/users/index.ts';


console.log('Initial state: ', store.getState());


const unsubscribe = store.subscribe(() => {
    console.log('Updated state: ', store.getState());
});

store.dispatch(cakeActions.orderCake(2));
store.dispatch(cakeActions.addToInventory(5));

store.dispatch(iceCreamActions.orderIceCream(3));
store.dispatch(iceCreamActions.addToInventory(2));

store.dispatch(fetchUsers());

unsubscribe();