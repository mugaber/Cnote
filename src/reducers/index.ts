import { combineReducers } from 'redux'
import note from 'reducers/noteReducer'
import sync from 'reducers/syncReducer'
import category from 'reducers/categoryReducer'

export default combineReducers({
  note,
  sync,
  category,
})
