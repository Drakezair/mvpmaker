import {
    firebase,
} from '../helpers/firebase';


// STORE
import store from '../redux/store';
import {loginUser} from '../redux/actions';


// DATABASE REFS
const db = firebase.database()

const userRef = db.ref('users')


// ======================================
// REGISTRAR UN USUARIO MAKER
// ======================================
const RegisterMaker = async (data) => {
    try {
        let resp = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        await userRef.child(resp.user.uid).set({...data, type: 0})
        store.dispatch(loginUser({...data,  type: 0, uid: resp.user.uid}))
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
        store.dispatch(loginUser({email:data.email, type: 1, uid: resp.user.uid}))
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
        await firebase.auth().signOut()
        let resp = await firebase.auth().signInWithEmailAndPassword(email, password)
        let user = await userRef.child(resp.user.uid).once("value")
        store.dispatch(loginUser({...user.val(), uid: resp.user.uid}))
        return {sucess: true, user: {...user.val(), uid: resp.user.uid}};
    }
    catch(error){
        console.log(error)
        return {sucess: false, message: error.code};
    }

}


export {
    RegisterMaker,
    RegisterCreative,
    LoginWithEmailAndPassword
}