import React from 'react'
import { Dispatch } from 'redux'
import { swapNote } from 'actions'
import { connect } from 'react-redux'
import { NoteItem } from 'types'
import Navigation from './Navigation'

interface NoteListProps {
  notes: NoteItem[]
  swapNote: Function
}

const NoteList: React.FC<NoteListProps> = ({ notes, swapNote }) => {
  return (
    <aside className='note__sidebar'>
      <Navigation />
      <div className='note__list'>
        {notes.map(note => {
          const noteTitle =
            note.text.indexOf('\n') !== -1
              ? note.text.slice(0, note.text.indexOf('\n'))
              : note.text.slice(0, 40)

          return (
            <div
              className='note__title'
              key={note.id}
              onClick={() => swapNote(note.id)}
            >
              {noteTitle}
            </div>
          )
        })}
      </div>
    </aside>
  )
}

const mapStateToProps = state => ({
  notes: state.note.notes,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  swapNote: noteId => dispatch(swapNote(noteId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
