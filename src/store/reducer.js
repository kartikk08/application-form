import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const redux = require('redux')


const createStore = redux.createStore

const initialState = {
    users : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case "REGISTRATION" :
            return {
                ...state,
                users : [...state.users, action.payload]
            }
            case "UPDATE": 
            return {
                user:action.payload
                   }   
                
            default :
            return state;
    }
}
const store = createStore(reducer,composeWithDevTools(redux.applyMiddleware(logger)))

export default store;