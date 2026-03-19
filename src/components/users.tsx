import { useDispatch, useSelector } from "react-redux";
import type {RootState} from '../types/store.types';
import { useEffect, useMemo } from "react";
import { fetchUsers } from "../features/users/index.ts";
import User from "./user.tsx";
import type {User as UserType} from '../types/user.types.ts';
import { useState, useCallback } from "react";
import { userActions } from "../features/users/index.ts";


const Users = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // useCallback to memoize the click handler and prevent unnecessary re-renders of User components
  const clickHandler = useCallback((user: UserType) => {    
    alert(`User: ${user.name}, Email: ${user.email}`);
    dispatch(userActions.updateName({id: user.id, name: user.name}));
  }, [dispatch]);

  const handleClear = () => {
    setSearch('');
  };

  // Need to implement the search, filter, sort functionality in the user list using useMemo to optimize and prevent unnecessary re-computation of the user list.
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // This will return a memoized value
  const searchedUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.users.filter(user=> user.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, users.users]);

  const handleSort = () => {
    setSortAsc(prev => !prev);
  }

  const sortedUsers = useMemo(() => {
    console.log('Sorting users...');
    return [...searchedUsers].sort((a, b) => {
      if (sortAsc) {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }, [searchedUsers, sortAsc]);

  return (
    <div className="users">
      <h1>Users</h1>
      <input type="text" placeholder="Search users..." onChange={searchHandler} value={search}/>
      <button onClick={handleClear}>clear</button>
      <button onClick={handleSort}>Sort</button>
      {users.loading && <p>Loading...</p>}
      {users.error && <p>{users.error}</p>}
      {users.users.length === 0 ? <p>No users found</p> : 
      <ul>
        {
            sortedUsers.map(user => {
               return <User key={user.id} data={user} onClick={clickHandler}/>
            })
        }
      </ul>}
    </div>
  );
};

export default Users;