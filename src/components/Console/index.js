import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Board from '../Board'
import DashBoard from '../DashBoard'
import Navbar from '../Navbar'

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
`
const BelowNav = styled.div`
  height: calc(100% - 50px);
  width: 100%;
`
const Console = (props) => {
  console.log('props', props)
  const { match: { path } } = props
  return (
    <MainWrapper>
      <Navbar />
      <BelowNav>
        <Switch>
          <Route exact path={`${path}/board/:id`} component={Board} />
          <Route path={path} component={DashBoard} />
        </Switch>
      </BelowNav>
    </MainWrapper>
  )
}

export default Console