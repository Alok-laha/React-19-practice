import { useDispatch, useSelector } from "react-redux";
import type {RootState} from '../types/store.types';
import { useEffect } from "react";
import { fetchUsers } from "../features/users/index.ts";
import User from "./user.tsx";
import type {User as UserType} from '../types/user.types.ts';
import { useState, useCallback } from "react";


const Users = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const clickHandler = useCallback((user: UserType) => {    
    alert(`User: ${user.name}, Email: ${user.email}`);
  }, []);

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