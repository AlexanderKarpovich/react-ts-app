import React, { FC } from 'react'
import Card, { CardVariant } from './Card'
import { IUser } from '../types/interfaces'

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <Card variant={CardVariant.outlined} width='200px' height='200px'>
        <div style={{padding: 15, margin: 5}}>
          {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}.
        </div>
    </Card>
  )
}

export default UserItem