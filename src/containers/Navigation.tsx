import React from 'react'
import uuid from 'uuid/v4'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addNote, swapNote } from 'actions'

interface NavigationProps {
  addNote: Function
  swapNote: Function
}

const Navigation: React.FC<NavigationProps> = ({ addNote, swapNote }) => {
  return (
    <div className='note__navigation'>
      <button
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
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addNote: note => dispatch(addNote(note)),
  swapNote: noteId => dispatch(swapNote(noteId)),
})

export default connect(null, mapDispatchToProps)(Navigation)
