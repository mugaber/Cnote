import { actionTypes } from 'constants/enums'
import { NoteItem } from 'types'

const initialState = {
  notes: [] as NoteItem[],
  active: null,
  loading: true,
  error: null,
}

const noteReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case actionTypes.LOAD_NOTES:
      return { notes: [], active: null, loading: true, error: null }

    case actionTypes.LOAD_NOTES_SUCCESS:
      return {
        ...state,
        notes: payload,
        active: payload[0].id,
        loading: false,
        error: null,
      }

    case actionTypes.LOAD_NOTES_ERROR:
      return { ...state, loading: false, error: payload }

    case actionTypes.ADD_NOTE:
      return { ...state, notes: [...state.notes, payload] }

    case actionTypes.SWAP_NOTE:
      return { ...state, active: payload }

    case actionTypes.UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === payload.id
            ? {
                id: note.id,
                text: payload.text,
                created: note.created,
                lastUpdated: 'new-value',
              }
            : note
        ),
      }

    default:
      return state
  }
}

export default noteReducer
