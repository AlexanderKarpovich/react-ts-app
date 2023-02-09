import React, { FC } from 'react'
import Card, { CardVariant } from './Card'
import { IUser } from '../../../types/interfaces'
import { useNavigate } from 'react-router-dom';

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
  const navigate = useNavigate();

  return (
    <Card variant={CardVariant.outlined} width='200px' height='200px'>
        <div style={{padding: 15, margin: 5}}>
          <p>{user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}.</p>
          <button onClick={() => navigate('/users/' + user.id)}>Details</button>
        </div>
    </Card>
  )
}

export default UserItem