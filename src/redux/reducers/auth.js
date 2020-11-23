import { authActions } from "../actionTypes";

const initialState = {
  loginLoader: false,
  loginData: '',
  loginError: '',
  signupLoader: false,
  signupData: '',
  signupError: ''
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActions.USER_SIGNIN_INITIATE: {
      return {
        ...state,
        loginLoader: true,
        loginData: '',
        loginError: ''
      }
    }

    case authActions.USER_SIGNIN_SUCCESS: {
      return {
        ...state,
        loginLoader: false,
        loginData: action.payload,
      }
    }

    case authActions.USER_SIGNIN_FAILURE: {
      return {
        ...state,
        loginLoader: false,
        loginError: action.payload
      }
    }

    case authActions.USER_SIGNUP_INITIATE: {
      return {
        ...state,
        signupLoader: true,
        signupData: '',
        signupError: ''
      }
    }

    case authActions.USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        signupLoader: false,
        signupData: action.payload,
      }
    }

    case authActions.USER_SIGNUP_FAILURE: {
      return {
        ...state,
        signupLoader: false,
        signupError: action.payload
      }
    }

    default: {
      return state
    }
  }
}