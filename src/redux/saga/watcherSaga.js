import { takeLatest } from 'redux-saga/effects'
import { authActions, boardActions } from '../actionTypes'
import { signinsaga, signupsaga } from './authSaga'
import { getBoardByIdSaga, getBoardsSaga, createBoardSaga } from './boardSaga'

export default function* watcherSaga() {
  yield takeLatest(authActions.USER_SIGNIN_INITIATE, signinsaga)
  yield takeLatest(boardActions.GET_ALL_BOARDS_INIITIATE, getBoardsSaga)
  yield takeLatest(boardActions.GET_BOARD_BY_ID_INITIATE, getBoardByIdSaga)
  yield takeLatest(boardActions.CREATE_BOARD_INITIATE, createBoardSaga)
  yield takeLatest(authActions.USER_SIGNUP_INITIATE, signupsaga)
}