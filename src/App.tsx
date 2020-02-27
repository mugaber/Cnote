import React, { useEffect } from 'react'
import Sidebar from 'containers/Sidebar'
import NoteList from 'containers/NoteList'
import NoteEditor from 'containers/NoteEditor'

import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { loadNotes, loadCategories } from 'actions'

interface AppProps {
  loadNotes: Function
  loadCategories: Function
}

const App: React.FC<AppProps> = ({ loadNotes, loadCategories }) => {
  useEffect(() => {
    loadNotes()
    loadCategories()
  }, [loadNotes, loadCategories])

  return (
    <div className='app'>
      <Sidebar />
      <NoteList />
      <NoteEditor />
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadNotes: () => dispatch(loadNotes()),
  loadCategories: () => dispatch(loadCategories()),
})

export default connect(null, mapDispatchToProps)(App)
