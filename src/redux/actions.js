import {
    LOGIN_USER
} from './constant'

export const loginUser = (user) =>{
    return{
        type: LOGIN_USER,
        user
    }
}

export const addProject = (id) => {
    return{
        type: LOGIN_USER,
        projectId: id 
    }  
}