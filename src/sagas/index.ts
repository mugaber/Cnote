import { actionTypes } from 'constants/enums'
import { put, all, takeLatest } from 'redux-saga/effects'
import { getLocalNotes, getLocalCategories, syncLocalState } from 'api'

//
function* fetchNotes() {
  try {
    const data = yield getLocalNotes()

    yield put({ type: actionTypes.LOAD_NOTES_SUCCESS, payload: data })
  } catch (err) {
    yield put({ type: actionTypes.LOAD_NOTES_ERROR, payload: err.message })
  }
}

//
function* fetchCategories() {
  try {
    const data = yield getLocalCategories()
    yield put({ type: actionTypes.LOAD_CATEGORIES_SUCCESS, payload: data })
  } catch (err) {
    yield put({ type: actionTypes.LOAD_CATEGORIES_ERROR, payload: err.message })
  }
}

//
function* syncingState(action) {
  try {
    yield syncLocalState(action)
    yield put({ type: actionTypes.SYNC_STATE_SUCCESS })
  } catch (err) {
    yield put({ type: actionTypes.SYNC_STATE_ERROR, payload: err.message })
  }
}

//
function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_NOTES, fetchNotes),
    takeLatest(actionTypes.LOAD_CATEGORIES, fetchCategories),
    takeLatest(actionTypes.SYNC_STATE, syncingState),
  ])
}

export default rootSaga
