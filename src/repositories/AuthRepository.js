import {
    firebase,
} from '../helpers/firebase';

const db = firebase.database()

const userRef = db.ref('users')

// ======================================
// REGISTRAR UN USUARIO MAKER
// ======================================
const RegisterMaker = async (data) => {
    try {
        let resp = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        await userRef.child(resp.user.uid).set({...data, type: 0})
        return {sucess: true, user: resp.user};
    }
    catch(error){
        return {sucess: false, message: error.message};
    }
}

// ======================================
// REGISTRAR UN USUARIO MAKER
// ======================================
const RegisterCreative = async (data) => {
    try {
        let resp = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        await userRef.child(resp.user.uid).set({...data, type: 1})
        return {sucess: true, user: resp.user};
    }
    catch(error){
        return {sucess: false, message: error.message};
    }
}

// ======================================
// LOGIN UN USUARIO
// ======================================

const LoginWithEmailAndPassword = async (email, password) =>{

    try{
        let resp = await firebase.auth().signInWithEmailAndPassword(email, password)
        let user = await userRef.child(resp.user.uid).once("value")
        return {sucess: true, user: user.val()};
    }
    catch(error){
        return {sucess: false, message: error.code};
    }

}


export {
    RegisterMaker,
    RegisterCreative,
    LoginWithEmailAndPassword
}