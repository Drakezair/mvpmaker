import {
    LOGIN_USER
} from './constant'

export const loginUser = (user) =>{
    return{
        type: LOGIN_USER,
        user
    }
}