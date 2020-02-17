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
        await userRef.child(resp.user.uid).set(data)
        return {sucess: true, user: resp.user};
    }
    catch(error){
        return {sucess: false, message: error.message};
    }
}

export {
    RegisterMaker
}