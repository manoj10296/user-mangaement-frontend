import { put } from 'redux-saga/effects'
import { createBoardFailure, createBoardSuccess, getAllBoardsFailure, getAllBoardsSuccess, getBoardByIdFailure, getBoardByIdSuccess } from '../actions/board'
import apiCall from './request'

export function* getBoardsSaga() {
  try {
    const result = yield apiCall({
      method: 'get',
      api: 'user/boards'
    })

    yield put(getAllBoardsSuccess(result.data.data))
  } catch (error) {
    yield put(getAllBoardsFailure(error))
  }
}

export function* getBoardByIdSaga({ payload }) {
  try {
    const result = yield apiCall({
      method: 'get',
      api: `board/${payload.id}`
    })

    console.log(result)
    yield put(getBoardByIdSuccess(result.data.data))
  } catch (error) {
    yield put(getBoardByIdFailure(error))
  }
}

export function* createBoardSaga({ payload }) {
  try {
    const { title } = payload
    console.log('title', title)
    const user = JSON.parse(localStorage.getItem('user'))
    const result = yield apiCall({
      method: 'post',
      api: 'board',
      body: {
        title: payload.title,
        id: user._id
      }
    })

    yield put(createBoardSuccess(result.data.data))
  } catch (error) {
    yield put(createBoardFailure(error))
  }
}