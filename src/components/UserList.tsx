import React, { FC } from 'react'
import { IUser } from '../types/interfaces';
import UserItem from './UserItem';

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {users.map(user => 
        <UserItem key={user.id} user={user} />
      )}
    </div>
  )
}

export default UserList