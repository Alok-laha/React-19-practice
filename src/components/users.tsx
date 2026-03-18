import { useDispatch, useSelector } from "react-redux";
import type {RootState} from '../types/store.types';
import { useEffect } from "react";
import { fetchUsers } from "../features/users/index.ts";
import User from "./user.tsx";
import type {User as UserType} from '../types/user.types.ts';
import { useState, useCallback } from "react";
import { userActions } from "../features/users/index.ts";


const Users = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // useCallback to memoize the click handler and prevent unnecessary re-renders of User components
  const clickHandler = useCallback((user: UserType) => {    
    alert(`User: ${user.name}, Email: ${user.email}`);
    dispatch(userActions.updateName({id: user.id, name: user.name}));
  }, [dispatch]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch('');
  };


  return (
    <div className="users">
      <h1>Users</h1>
      <input type="text" placeholder="Search users..." onChange={searchHandler} value={search}/>
      <button onClick={handleClear}>clear</button>
      {users.loading && <p>Loading...</p>}
      {users.error && <p>{users.error}</p>}
      {users.users.length === 0 ? <p>No users found</p> : 
      <ul>
        {
            users.users.map(user => {
               return <User key={user.id} data={user} onClick={clickHandler}/>
            })
        }
      </ul>}
    </div>
  );
};

export default Users;