import { combineReducers } from 'redux'
import note from 'reducers/noteReducer'
import sync from 'reducers/syncReducer'

export default combineReducers({
  note,
  sync,
})
