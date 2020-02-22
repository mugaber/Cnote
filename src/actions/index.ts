import { actionTypes } from 'constants/enums'
import { NoteItem } from 'types'

export const addNote = (note: NoteItem) => ({
  type: actionTypes.ADD_NOTE,
  payload: note,
})

export const updateNote = (note: NoteItem) => ({
  type: actionTypes.UPDATE_NOTE,
  payload: note,
})

export const swapNote = (noteId: string) => ({
  type: actionTypes.SWAP_NOTE,
  payload: noteId,
})

export const loadNotes = () => ({
  type: actionTypes.LOAD_NOTES,
})
