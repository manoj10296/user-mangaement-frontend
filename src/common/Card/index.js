import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
  height: 140px;
  width: 200px;
  display: flex;
  margin: 30px;
  /* background: white; */
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  background: #22c1c3;
  transition: transform .3s ease-out;
  /* display: inline-block; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    transform: translate(-0px, -3px);
  }
`

const TitleText = styled.div`
  text-align: center;
  color: white;
  font-size: 20px;
  padding: 10px;
  font-weight: 600;
`

const IconDiv = styled.div`

`

const Card = (props) => {
  const {
    title,
    onClick
  } = props
  return (
    <MainDiv
      onClick={onClick}
    >
      <TitleText>{title}</TitleText>
      {title === 'Add new board' && <IconDiv> <i class="fas fa-plus fa-3x"></i></IconDiv>}
    </MainDiv>
  )
}

export default Card