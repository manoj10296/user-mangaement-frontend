import React from 'react'
import Avatar from 'react-avatar'


const AvatarComponent = (props) => {
  const {
    name,
    onClick
  } = props

  return (
    <Avatar
      name={name}
      alt="#"
      size="35px"
      round
      color="#5E005E"
      onClick={() => console.log('click')}
    />
  )
}

export default AvatarComponent