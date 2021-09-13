import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { movieListReducer } from '../redux/reducers/movieListReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    movieList: movieListReducer
})

const initialState = {

}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store