import {useSelector} from 'react-redux';
import type {RootState} from '../types/store.types';

const IceCream = () => {
  const numOfIceCreams = useSelector((state: RootState) => state.icecream.numOfIceCreams);
  return (
    <div className="icecream">
      <h1>Ice Cream</h1>
      <p>Number of ice creams: {numOfIceCreams}</p>
    </div>
  );
};

export default IceCream;