import { actionTypes } from 'constants/enums'
import { put, takeEvery } from 'redux-saga/effects'

async function asyncFetch(endpoint) {
  const response = await fetch(endpoint)

  if (response.ok) {
    return await response.json()
  }

  throw new Error('Fetch Error')
}

function* fetchNotes() {
  try {
    const data = yield asyncFetch(
      'https://gist.githubusercontent.com/MuGaber/d2af7311125c80fc813402dffc56df71/raw/750d1810a6c01414db4cbef62c91fc423bf8d6d4/notes.json'
    )

    yield put({ type: actionTypes.LOAD_NOTES_SUCCESS, payload: data })
  } catch (err) {
    yield put({ type: actionTypes.LOAD_NOTES_ERROR, payload: err.message })
  }
}

function* noteSaga() {
  // will listen to all of LOAD_NOTES
  yield takeEvery(actionTypes.LOAD_NOTES, fetchNotes)
}

export default noteSaga
