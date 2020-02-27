import React from 'react'
import NoteEditor from 'containers/NoteEditor'
import NoteList from 'containers/NoteList'
import Sidebar from 'containers/Sidebar'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Sidebar />
      <NoteList />
      <NoteEditor />
    </div>
  )
}

export default App
