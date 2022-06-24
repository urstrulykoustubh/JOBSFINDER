import {combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware,createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import thunk from 'redux-thunk'

import { jobsReducer } from './reducers/jobsReducer'
 import { loaderReducer } from './reducers/loaderReducer'
 import {usersReducer} from './reducers/usersReducer'

const rootReducer=combineReducers({
     jobsReducer,
     loaderReducer,
     usersReducer

})

const store= createStore(rootReducer,applyMiddleware(thunk));

export default store;