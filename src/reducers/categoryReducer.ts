import { actionTypes } from 'constants/enums'
import { CategoryReducer } from 'types'

const initialState: CategoryReducer = {
  categories: [],
  loading: true,
  active: '',
  error: '',
}

const categoryReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case actionTypes.LOAD_CATEGORIES:
      return initialState

    case actionTypes.LOAD_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, loading: false, error: '' }

    case actionTypes.LOAD_CATEGORIES_ERROR:
      return { ...state, categories: [], loading: false, error: payload }

    case actionTypes.ADD_CATEGORY:
      return { ...state, categories: [...state.categories, payload] }

    case actionTypes.SWAP_CATEGORY:
      return { ...state, active: payload }

    case actionTypes.UPDATE_CATEGORY:
      const updatedCategories = state.categories.map(category =>
        category.id === payload.id
          ? { id: category.id, name: payload.name }
          : category
      )
      return {
        ...state,
        categories: updatedCategories,
        loading: false,
        error: '',
      }

    case actionTypes.DELETE_CATEGORY:
      let activeIndex

      const filteredCategories = state.categories.filter((category, index) => {
        category.id === payload && (activeIndex = index)
        return category.id !== payload
      })

      if (activeIndex > filteredCategories.length - 1)
        activeIndex = filteredCategories.length - 1

      return {
        ...state,
        categories: filteredCategories,
        active: filteredCategories[activeIndex].id,
      }

    default:
      return state
  }
}

export default categoryReducer
