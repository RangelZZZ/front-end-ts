import {combineReducers} from 'redux'

import {routerReducer} from 'react-router-redux'

import signInFrom from './signInFrom'
import saveUserInformation from './saveUserInformation'

export default combineReducers({
    router: routerReducer,
    signInFrom,
    saveUserInformation
})

