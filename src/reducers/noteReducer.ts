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
        active: payload.length ? payload[0].id : '',
        loading: false,
        error: null,
      }

    case actionTypes.LOAD_NOTES_ERROR:
      return { ...state, loading: false, error: payload }

    case actionTypes.ADD_NOTE:
      return { ...state, notes: [...state.notes, payload] }

    case actionTypes.DELETE_NOTE:
      if (state.notes.length) {
        let activeIndex

        const updatedNotes = state.notes.filter((note, index) => {
          if (note.id === payload) activeIndex = index
          return note.id !== payload
        })
        if (updatedNotes.length) {
          if (updatedNotes.length - 1 < activeIndex)
            activeIndex = updatedNotes.length - 1

          return {
            ...state,
            notes: updatedNotes,
            active: updatedNotes[activeIndex].id,
          }
        } else {
          return { ...state, notes: [] }
        }
      }
      break

    case actionTypes.SWAP_NOTE:
      return { ...state, active: payload, loading: false }

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
