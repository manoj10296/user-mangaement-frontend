import { boardActions } from "../actionTypes";

const initialState = {
  userboardsLoading: false,
  userboardsData: [],
  useruserboardError: '',
  boardDetailsLoading: false,
  boardDetailsData: '',
  boardDetailsError: '',
  createBoardLoading: false,
  createBoardData: '',
  createBoardError: ''
}

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case boardActions.GET_ALL_BOARDS_INIITIATE: {
      return {
        ...state,
        userboardsLoading: true,
        userboardsData: [],
        userboardError: ''
      }
    }

    case boardActions.GET_ALL_BOARDS_SUCCESS: {
      return {
        ...state,
        userboardsLoading: false,
        userboardsData: action.payload
      }
    }

    case boardActions.GET_ALL_BOARDS_FAILURE: {
      return {
        ...state,
        userboardsLoading: false,
        userboardError: action.payload
      }
    }

    case boardActions.GET_BOARD_BY_ID_INITIATE: {
      return {
        ...state,
        boardDetailsLoading: true,
        boardDetailsData: '',
        boardDetailsError: ''
      }
    }

    case boardActions.GET_BOARD_BY_ID_SUCCESS: {
      return {
        ...state,
        boardDetailsLoading: false,
        boardDetailsData: action.payload,
      }
    }

    case boardActions.GET_BOARD_BY_ID_FAILURE: {
      return {
        ...state,
        boardDetailsLoading: false,
        boardDetailsError: action.payload
      }
    }

    case boardActions.CREATE_BOARD_INITIATE: {
      return {
        ...state,
        createBoardLoading: true,
        createBoardData: '',
        createBoardError: ''
      }
    }

    case boardActions.CREATE_BOARD_SUCCESS: {
      return {
        ...state,
        createBoardLoading: false,
        createBoardData: action.payload,
        userboardsData: [...state.userboardsData, action.payload]
      }
    }

    case boardActions.CREATE_BOARD_FAILURE: {
      return {
        ...state,
        createBoardLoading: true,
        createBoardError: action.payload
      }
    }

    default: {
      return state
    }
  }
}