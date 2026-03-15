import { useSelector, useDispatch } from "react-redux";
import type {RootState} from '../types/store.types';
import {cakeActions} from '../features/cake/index.ts';
import { useState } from "react";


const Cake = () => {
  const numOfCakes = useSelector((state: RootState) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(0);
  const [addToInventory, setAddToInventory] = useState(0);
  const handleOrderCake = () => {
    dispatch(cakeActions.orderCake(order));
    setOrder(0);
  }
  const handleAddToInventory = () => {
    dispatch(cakeActions.addToInventory(addToInventory));
    setAddToInventory(0);
  }

  return (
    <div className="cake">
      <h1>Cake</h1>
      <p>Number of cakes: {numOfCakes}</p>
      <input type='number' name="orderCake" value={order} onChange={(e) => setOrder(parseInt(e.target.value) || 0)} min={0}/>
      <button onClick={handleOrderCake}>buy cake</button>
      <input type='number' name="addToInventory" value={addToInventory} onChange={(e) => setAddToInventory(parseInt(e.target.value) || 0)} min={0}/>
      <button onClick={handleAddToInventory}>add to inventory</button>
    </div>
  );
};

export default Cake;