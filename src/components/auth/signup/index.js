import { cloneDeep } from 'lodash';
import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import loginImage from '../../../images/login.jpg'
import { usersigninInitiate, userSignupInitiate } from '../../../redux/actions/auth';
import LabelComponent from '../../../common/Label';
import InputComponent from '../../../common/Input';
import ButtonComponent from '../../../common/Button';

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
`

const ColumnOne = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColumneTwo = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FBAB7E;
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  clip-path: polygon(10% 0%, 0% 100%, 100% 100%, 100% 0%);
`

const FormContainer = styled.div`
  width: 70%;
  background: white;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const FormComponent = styled.form`
  width: 100%;
  padding: 20px;    
`
const LoginText = styled.span`
  margin-top: 20px;
  cursor: pointer;
`

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  designation: ''
}

const Register = (props) => {

  const authState = useSelector(state => state.authReducer)

  const dispatch = useDispatch()
  const [state, updateState] = useState(cloneDeep(initialState))

  useEffect(() => {
    return () => {
      updateState({
        email: '',
        password: ''
      })
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    updateState({
      ...state,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(userSignupInitiate(state))
  }

  useEffect(() => {
    if (authState.loginData) {
      props.history.push('/login')
    }
  }, [authState.loginData])

  return (
    <MainDiv>
      <Container>
        <ColumnOne>
          <img src={loginImage} height="500px" />
        </ColumnOne>
        <ColumneTwo>
          <FormContainer>
            <FormComponent className="ui form">
              <Form.Field>
                <LabelComponent
                  text="First Name"
                />
                <InputComponent
                  placeholder='First Name'
                  name="firstName"
                  required
                  value={state.firstName}
                  onChange={handleChange}
                />
                {/* <input placeholder='email' name="email" value={state.email} onChange={handleChange} /> */}
              </Form.Field>
              <Form.Field>
                <LabelComponent
                  text="LastName"
                />
                <InputComponent
                  placeholder='Last Name'
                  name="lastName"
                  required
                  value={state.lastName}
                  onChange={handleChange}
                />
                {/* <input placeholder='email' name="email" value={state.email} onChange={handleChange} /> */}
              </Form.Field>
              <Form.Field>
                <LabelComponent
                  text="Designation"
                />
                <InputComponent
                  placeholder='Designation'
                  name="designation"
                  required
                  value={state.designation}
                  onChange={handleChange}
                />
                {/* <input placeholder='email' name="email" value={state.email} onChange={handleChange} /> */}
              </Form.Field>
              <Form.Field>
                <LabelComponent
                  text="Email"
                />
                <InputComponent
                  placeholder='Email'
                  name="email"
                  required
                  value={state.email}
                  onChange={handleChange}
                />
                {/* <input placeholder='email' name="email" value={state.email} onChange={handleChange} /> */}
              </Form.Field>
              <Form.Field>
                <LabelComponent
                  text="Password"
                />
                <InputComponent
                  placeholder='Password'
                  name="password"
                  type="password"
                  required
                  value={state.password}
                  onChange={handleChange}
                />
                {/* <input placeholder='password' name="password" type="password" value={state.password} onChange={handleChange} /> */}
              </Form.Field>
              <ButtonComponent onClick={onSubmit}>  SIGN UP {authState.signupLoader && <i className="fa fa-spinner fa-spin"></i>} </ButtonComponent>
            </FormComponent>
          </FormContainer>
          <LoginText onClick={() => props.history.push('/login')}>Already have and account? Back to login</LoginText>
        </ColumneTwo>
      </Container>
    </MainDiv>
  )
}

export default Register