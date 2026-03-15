import { useDispatch, useSelector } from "react-redux";
import type {RootState} from '../types/store.types';
import { useEffect } from "react";
import { fetchUsers } from "../features/users/index.ts";


const Users = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="users">
      <h1>Users</h1>
      {users.loading && <p>Loading...</p>}
      {users.error && <p>{users.error}</p>}
      {users.users.length === 0 ? <p>No users found</p> : 
      <ul>
        {
            users.users.map(user => {
               return <li key={user.id}>{user.name}</li>
            })
        }
      </ul>}
    </div>
  );
};

export default Users;