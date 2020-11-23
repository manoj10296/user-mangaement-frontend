import { boardActions } from "../actionTypes";


export const getAllBoardsInitiate = () => ({
  type: boardActions.GET_ALL_BOARDS_INIITIATE,
})

export const getAllBoardsSuccess = (data) => ({
  type: boardActions.GET_ALL_BOARDS_SUCCESS,
  payload: data
})

export const getAllBoardsFailure = (data) => ({
  type: boardActions.GET_ALL_BOARDS_FAILURE,
  payload: data
})

export const getBoardByIdInitiate = (data) => ({
  type: boardActions.GET_BOARD_BY_ID_INITIATE,
  payload: data
})

export const getBoardByIdSuccess = (data) => ({
  type: boardActions.GET_BOARD_BY_ID_SUCCESS,
  payload: data
})

export const getBoardByIdFailure = (data) => ({
  type: boardActions.GET_BOARD_BY_ID_FAILURE,
  payload: data
})

export const createBoardInitiate = (data) => ({
  type: boardActions.CREATE_BOARD_INITIATE,
  payload: data
})

export const createBoardSuccess = (data) => ({
  type: boardActions.CREATE_BOARD_SUCCESS,
  payload: data
})

export const createBoardFailure = (data) => ({
  type: boardActions.CREATE_BOARD_FAILURE,
  payload: data
})