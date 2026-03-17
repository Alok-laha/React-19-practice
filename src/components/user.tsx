import type {User as UserType} from '../types/user.types.ts';
import React from 'react';

type UserProps = {
    data: UserType;
    onClick: (user: UserType) => void;
};

const UserComponent: React.FC<UserProps> = ({ data, onClick }) => {
    return (
        <div onClick={() => onClick(data)}>
            <h2>User Profile</h2>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
        </div>
    )
};

const User = React.memo(UserComponent);

export default User;