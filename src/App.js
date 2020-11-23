import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/auth/login';
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'
import Console from './components/Console';
import Register from './components/auth/signup';

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <React.Fragment>
      <MainWrap>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path="/register" component={Register} />
          <Route path='/console' component={Console} />
          <Redirect from="/" to='/login' />
        </Switch>
      </MainWrap>
    </React.Fragment>
  );
}

export default App;
