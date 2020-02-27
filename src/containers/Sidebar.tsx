import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCategory } from 'actions'
import { CategoryItem } from 'types'
import uuid from 'uuid/v4'

interface SidebarProps {
  categories: CategoryItem[]
  addCategory: Function
}

const Sidebar: React.FC<SidebarProps> = ({ categories, addCategory }) => {
  const [addNewCategory, setAddNewCategory] = useState(false)
  const [newCategory, setNewCategory] = useState('')

  return (
    <aside className='note__sidebar'>
      <span className='sidebar__title'>Cnote</span>

      <div className='sidebar__item'>All notes</div>

      <div className='sidebar__item'>Categories</div>

      {!!categories.length && (
        <div>
          {categories.map(category => (
            <div className='category__item' key={category.id}>
              {category.name}
            </div>
          ))}
        </div>
      )}

      {addNewCategory && (
        <form
          className='category__form'
          onSubmit={event => {
            event.preventDefault()
            const category = { id: uuid(), name: newCategory }
            addCategory(category)
            setAddNewCategory(false)
            setNewCategory('')
          }}
        >
          <input
            type='text'
            autoFocus
            placeholder='add new category'
            onChange={event => setNewCategory(event.target.value)}
          />
        </form>
      )}

      <div className='sidebar__item'>
        <button
          className='category__button'
          onClick={() => !addNewCategory && setAddNewCategory(true)}
        >
          Add Category
        </button>
      </div>
    </aside>
  )
}

const mapStateToProps = state => ({
  categories: state.category.categories,
})

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(addCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
