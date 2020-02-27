import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { updateNote } from 'actions'
import { NoteItem } from 'types'

import { Controlled as CodeMirror } from 'react-codemirror2'
import options from 'constants/codeMirrorOptions'
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/mode/gfm/gfm.js'

interface NoteEditorProps {
  note: NoteItem
  loading: boolean
  updateNote: Function
}

const NoteEditor: React.FC<NoteEditorProps> = ({
  note,
  loading,
  updateNote,
}) => {
  if (loading) {
    return <div className='note__editor--empty' />
  } else if (!note) {
    return <div className='note__editor--empty'>Create a note</div>
  } else {
    return (
      <CodeMirror
        className='note__editor'
        value={note.text}
        options={options}
        onBeforeChange={(editor, data, value) => {
          updateNote({ id: note.id, text: value })
        }}
        editorDidMount={editor => {
          editor.focus()
          editor.setCursor(editor.lineCount(), 0)
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  note: state.note.notes.find(note => note.id === state.note.active),
  loading: state.note.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateNote: note => dispatch(updateNote(note)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor)
