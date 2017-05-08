import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducers} from 'ipfs-filexp'

export default combineReducers(Object.assign({routing: routerReducer}, reducers))
