import React from 'react'
import { Dispatch } from 'redux'
import { swapNote } from 'actions'
import { connect } from 'react-redux'
import { NoteItem } from 'types'
import Navigation from './Navigation'
import { getTitle } from 'helpers'

interface NoteListProps {
  active: string
  notes: NoteItem[]
  swapNote: Function
}

const NoteList: React.FC<NoteListProps> = ({ active, notes, swapNote }) => {
  return (
    <aside className='notelist__sidebar'>
      <Navigation />
      <div className='note__list'>
        {notes.map(note => {
          const noteTitle = getTitle(note.text)

          return (
            <div
              className={
                active === note.id ? 'note__title active' : 'note__title'
              }
              key={note.id}
              // do not fire if clicked the active note
              onClick={() => active !== note.id && swapNote(note.id)}
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
  active: state.note.active,
  notes: state.note.notes,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  swapNote: noteId => dispatch(swapNote(noteId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
