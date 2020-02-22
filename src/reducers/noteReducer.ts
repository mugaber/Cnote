import { actionTypes } from 'constants/enums'
import { initialState } from 'constants/initialState'

const noteReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
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
