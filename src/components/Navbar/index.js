import React from 'react'
import styled from 'styled-components'
import Avatar from '../../common/Avatar'

const MainDiv = styled.div`
  height: 50px;
  background: #00B4DB;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  padding-left: 10px;
  align-items: center;
`
const RightProfile = styled.span`
  position: absolute;
  right: 8px;
`

const Navbar = (props) => {
  console.log('adasdad', props)
  // const
  return (
    <MainDiv>
      <i class="fas fa-clipboard-list fa-2x"></i>
      <RightProfile>
        <Avatar
          name="Manoj Gupta"
        />
      </RightProfile>
    </MainDiv>
  )
}

export default Navbar