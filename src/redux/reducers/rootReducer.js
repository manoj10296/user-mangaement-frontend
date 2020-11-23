import { combineReducers } from 'redux'
import authReducer from './auth'
import boardReducer from './board'

export const rootReducer = combineReducers({
  authReducer,
  boardReducer
})