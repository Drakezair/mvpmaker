import {
    firebase,
} from '../helpers/firebase';

// STORE
import store from '../redux/store';

const db = firebase.database()

const productsRef = db.ref('products')
const projectsDbRef = db.ref('projects')

// ======================================
// OBTENER TODOS LOS PRODUCTOS
// ======================================
const getProducts = async () =>{

    try{
        let resp = await productsRef.once('value')
        let toReturn = resp.val().map((item,i)=>{
            return item
        })
        return {succes: true, data: toReturn}
    }
    catch(error){
        return {succes: false, error}
    }
}

// ======================================
// OBTENER UN PRODUCTO
// ======================================
const getProductByUrl = async (url) =>{
    try{
        let resp = await productsRef.orderByChild("url").equalTo(url).once('value')
        return {succes: true, data: resp.val()[0]}
    }
    catch(error){
        return {succes: false, error}
    }
}

// ======================================
// CREAR REQUESTPROJECT
// ======================================
const createRequestProject = async (data) => {
    try{
        let newProjecRef = projectsDbRef.push()
        await newProjecRef.set({
            creative_id: store.getState().user.uid,
            maker_id: '',
            status: 0,
            ...data
        })

        return {succes: true, id:newProjecRef.key }
    }
    catch(error){
        return {succes: false, error}
    }
}

// ======================================
// APROVE EVENT BY ID
// ======================================
const aproveEvent = async (project_id ,event_id) => {
    try{
        console.log(event_id)
        await projectsDbRef.child(project_id).child('reviews').child(event_id).update({
            aprovedAt: new Date().toString(),
            status: 1
        })
    }
    catch(error){

    }
}

// ======================================
// END PROJECT BY ID
// ======================================
const endProject = async (project_id) => {
    try{
        await projectsDbRef.child(project_id).child('status').set(2)
    }
    catch(error){
        return {succes: false}
    }
}


export {
    getProducts,
    getProductByUrl,
    createRequestProject,
    aproveEvent,
    endProject
}