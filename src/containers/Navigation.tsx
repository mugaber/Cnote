import React from 'react'
import uuid from 'uuid/v4'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addNote, swapNote, deleteNote } from 'actions'
import { NoteItem } from 'types'

interface NavigationProps {
  activeNote: NoteItem
  addNote: Function
  swapNote: Function
  deleteNote: Function
}

const Navigation: React.FC<NavigationProps> = ({
  activeNote,
  addNote,
  swapNote,
  deleteNote,
}) => {
  return (
    <div className='note__navigation'>
      <button
        className='nav__button'
        onClick={() => {
          const newNote = {
            id: uuid(),
            text: '# New Note',
            created: '',
            lastUpdated: '',
          }
          addNote(newNote)
          swapNote(newNote.id)
        }}
      >
        + Note
      </button>
      <button
        className='nav__button'
        onClick={() => activeNote && deleteNote(activeNote.id)}
      >
        &#10007; Note
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  activeNote: state.note.notes.find(note => note.id === state.note.active),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNote: note => dispatch(addNote(note)),
  swapNote: noteId => dispatch(swapNote(noteId)),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
