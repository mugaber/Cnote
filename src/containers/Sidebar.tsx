import React, { useEffect } from 'react'
import { loadCategories } from 'actions'
import { connect } from 'react-redux'

const Sidebar = ({ loadCategories }) => {
  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  return (
    <aside className='note__sidebar'>
      <span className='sidebar__title'>Cnote</span>

      <div className='sidebar__item'>All notes</div>

      <div className='sidebar__item'>Categories</div>

      <div className='sidebar__item'>Add Category</div>
    </aside>
  )
}

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories()),
})

export default connect(null, mapDispatchToProps)(Sidebar)
