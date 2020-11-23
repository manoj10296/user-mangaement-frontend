import { put } from 'redux-saga/effects'
import { usersigninFailure, usersigninSuccess, userSignupFailure, userSignupSuccess } from '../actions/auth'
import axios from 'axios'
import { API } from '../../BackendUrl'

export function* signinsaga({ payload }) {
  try {
    const result = yield axios.post(`${API}/api/login`, {
      email: payload.email,
      password: payload.password
    })
    console.log(result)
    yield put(usersigninSuccess(result.data.user))
    localStorage.setItem('token', `Bearer ${result.data.accessToken}`)
    localStorage.setItem('user', JSON.stringify(result.data.user))
  } catch (error) {
    yield put(usersigninFailure(error.response.data.error.message))
  }
}

export function* signupsaga({ payload }) {
  try {
    const result = yield axios.post(`${API}/api/register`, {
      email: payload.email,
      password: payload.password,
      firstName: payload.firstName,
      lastName: payload.lastName,
      designation: payload.designation
    })
    console.log(result)
    yield put(userSignupSuccess(result.data))
    // localStorage.setItem('token', `Bearer ${result.data.accessToken}`)
    // localStorage.setItem('user', JSON.stringify(result.data.user))
  } catch (error) {
    yield put(userSignupFailure(error.response.data.error.message))
  }
}

