import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'

const middlewares = []

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
