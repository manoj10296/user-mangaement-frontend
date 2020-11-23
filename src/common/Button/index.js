import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: ${({ width }) => width ? width : '100%'};
  padding: 14px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ color }) => color ? color : '#3CB371'};

`

const ButtonComponent = (props) => {

  const {
    onClick,
    children,
    width,
    color
  } = props

  return (
    <Button
      onClick={onClick}
      width={width}
      color={color}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent