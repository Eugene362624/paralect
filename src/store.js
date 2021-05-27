import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { reposInfoReducer, userInfoReducer } from './reducers/userInfoReducer'

const initialState = {userInfo: {}, reposInfo: {reposRepos: {data: []}}}
const reducer = combineReducers({
    userInfo: userInfoReducer,
    reposInfo: reposInfoReducer
})

const composeEnhancer = compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store