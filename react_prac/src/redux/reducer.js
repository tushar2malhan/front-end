// MAIN REDUCER 

    
// final value of the store > where userDetails = {action.payload}
// everything remains same in the state , except for userDetails as we includde aciton.payload iniside it


import { combineReducers } from 'redux'
import userReducer from './reducer3'
import commentReducer from './reducer2'

export default combineReducers({
    userDetails: userReducer ,
    userComments: commentReducer
})