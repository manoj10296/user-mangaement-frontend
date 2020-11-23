import { authActions } from "../actionTypes";


export const usersigninInitiate = (data) => ({
  type: authActions.USER_SIGNIN_INITIATE,
  payload: data
})

export const usersigninSuccess = (data) => ({
  type: authActions.USER_SIGNIN_SUCCESS,
  payload: data
})

export const usersigninFailure = (data) => ({
  type: authActions.USER_SIGNIN_FAILURE,
  payload: data
})

export const userSignupInitiate = (data) => ({
  type: authActions.USER_SIGNUP_INITIATE,
  payload: data
})

export const userSignupSuccess = (data) => ({
  type: authActions.USER_SIGNUP_SUCCESS,
  payload: data
})

export const userSignupFailure = (data) => ({
  type: authActions.USER_SIGNUP_FAILURE,
  payload: data
})