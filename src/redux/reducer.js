import {
    LOGIN_USER,
} from './constant';

import {loadState} from '../helpers/localStorage';

const localState = loadState('user');

const stateDefault = {
    user: {}
}

let defaultState = localState
    ? {...stateDefault, ...localState}
    : stateDefault;
    
const reducerApp = (state = {hola: "hola"}, action) =>{

    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return defaultState
    }
}

export default reducerApp;