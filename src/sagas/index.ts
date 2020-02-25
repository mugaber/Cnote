import { actionTypes } from 'constants/enums'
import { put, all, takeLatest } from 'redux-saga/effects'
import { getLocalNotes, setLocalNotes } from 'api'

function* fetchNotes() {
  try {
    const data = yield getLocalNotes()

    yield put({ type: actionTypes.LOAD_NOTES_SUCCESS, payload: data })
  } catch (err) {
    yield put({ type: actionTypes.LOAD_NOTES_ERROR, payload: err.message })
  }
}

// the action that this saga will listen to will have the notes as payload
function* syncingNotes(action) {
  console.log(action)
  try {
    const data = yield setLocalNotes(action)

    yield put({ type: actionTypes.SYNC_NOTES_SUCCESS, payload: data })
  } catch (err) {
    yield put({ type: actionTypes.SYNC_NOTES_ERROR, payload: err.message })
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_NOTES, fetchNotes),
    takeLatest(actionTypes.SYNC_NOTES, syncingNotes),
  ])
}

export default rootSaga
