// string enum will give us run time meaningful and readable value
// independent of the enum member name (key)

export enum actionTypes {
  ADD_NOTE = 'ADD_NOTE',
  SWAP_NOTE = 'SWAP_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
  LOAD_NOTES = 'LOAD_NOTES',
  RENDER_NOTE = 'RENDER_NOTE',
  LOAD_NOTES_SUCCESS = 'LOAD_NOTES_SUCCESS',
  LOAD_NOTES_ERROR = 'LOAD_NOTES_ERROR',
}
