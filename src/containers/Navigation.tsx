import React from 'react'
import uuid from 'uuid/v4'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addNote, swapNote, deleteNote, syncNotes } from 'actions'
import { NoteItem } from 'types'
import { downloadNote } from 'helpers'

interface NavigationProps {
  notes: NoteItem[]
  activeNote: NoteItem
  addNote: Function
  swapNote: Function
  deleteNote: Function
  syncNotes: Function
}

const Navigation: React.FC<NavigationProps> = ({
  notes,
  activeNote,
  addNote,
  swapNote,
  deleteNote,
  syncNotes,
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
      <button
        className='nav__button'
        onClick={() => activeNote && downloadNote(activeNote.text)}
      >
        &#8623; Note
      </button>
      <button className='nav__button' onClick={() => syncNotes(notes)}>
        &#8645; Notes
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  notes: state.note.notes,
  activeNote: state.note.notes.find(note => note.id === state.note.active),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNote: note => dispatch(addNote(note)),
  swapNote: noteId => dispatch(swapNote(noteId)),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  syncNotes: notes => dispatch(syncNotes(notes)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
