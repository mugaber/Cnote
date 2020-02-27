import { actionTypes } from 'constants/enums'
import { NoteItem, CategoryItem } from 'types'

// notes
export const addNote = (note: NoteItem) => ({
  type: actionTypes.ADD_NOTE,
  payload: note,
})

export const deleteNote = (noteId: string) => ({
  type: actionTypes.DELETE_NOTE,
  payload: noteId,
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

// categories
export const addCategory = (category: CategoryItem) => ({
  type: actionTypes.ADD_CATEGORY,
  payload: category,
})

export const loadCategories = () => ({
  type: actionTypes.LOAD_CATEGORIES,
})

// for syncing both notes and categories
export const syncState = (notes: NoteItem[], categories: CategoryItem[]) => ({
  type: actionTypes.SYNC_STATE,
  payload: { notes, categories },
})
