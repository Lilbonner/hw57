import React from 'react';
import UserItem from './UserItem';
import {User} from '../../Types';


interface Props {
  users: User[];
}
const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      {users.map((user) => (
        <UserItem key={user.name} user={user}/>
      ))}
    </>
  );
};

export default Users;