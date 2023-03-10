import React, { FC } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant;
}

const Card: FC<CardProps> = 
({
  width, 
  height, 
  variant,
  children
}) => {
  return (
    <div style={{width, height, 
      border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
      background: variant === CardVariant.primary ? 'lightgray' : '',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      margin: 5}}>
          {children}
    </div>
  )
}

export default Card