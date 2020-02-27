import React from 'react'
import uuid from 'uuid/v4'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addNote, swapNote, deleteNote, syncState } from 'actions'
import { NoteItem, CategoryItem } from 'types'
import { downloadNote } from 'helpers'

interface NavigationProps {
  notes: NoteItem[]
  categories: CategoryItem[]
  activeNote: NoteItem
  addNote: Function
  swapNote: Function
  deleteNote: Function
  syncState: Function
}

const Navigation: React.FC<NavigationProps> = ({
  notes,
  categories,
  activeNote,
  addNote,
  swapNote,
  deleteNote,
  syncState,
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
        &#43;
      </button>

      <button
        className='nav__button'
        onClick={() => activeNote && deleteNote(activeNote.id)}
      >
        &#10007;
      </button>

      <button
        className='nav__button'
        onClick={() => activeNote && downloadNote(activeNote.text)}
      >
        &#8623;
      </button>

      <button
        className='nav__button'
        onClick={() => syncState(notes, categories)}
      >
        &#8645;
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  notes: state.note.notes,
  categories: state.category.categories,
  activeNote: state.note.notes.find(note => note.id === state.note.active),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNote: note => dispatch(addNote(note)),
  swapNote: noteId => dispatch(swapNote(noteId)),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  syncState: (notes, categories) => dispatch(syncState(notes, categories)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
