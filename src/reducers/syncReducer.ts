import { actionTypes } from 'constants/enums'
import { SyncReducer } from 'types'

const initialState: SyncReducer = {
  syncing: false,
  error: '',
}

const syncReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SYNC_STATE:
      return { ...state, syncing: true }

    case actionTypes.SYNC_STATE_SUCCESS:
      return { ...state, syncing: false, error: '' }

    case actionTypes.SYNC_STATE_ERROR:
      return { ...state, syncing: false, error: action.payload }

    default:
      return state
  }
}

export default syncReducer
