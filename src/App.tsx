import React from 'react'
import NoteEditor from 'containers/NoteEditor'
import NoteList from 'containers/NoteList'

const App: React.FC = () => {
  return (
    <div className='app'>
      <NoteList />
      <NoteEditor />
    </div>
  )
}

export default App
