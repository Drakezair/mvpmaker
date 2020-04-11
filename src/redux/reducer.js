import {
    LOGIN_USER, ADD_PROJECT
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
        case ADD_PROJECT:
            return {
                ...state,
                projects: state.projects.push(action.projectId)
            }
        default:
            return defaultState
    }
}

export default reducerApp;