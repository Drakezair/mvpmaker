import {
    firebase,
} from '../helpers/firebase';

// STORE
import store from '../redux/store'

const db = firebase.database()

const projectsDbRef = db.ref('projects')
const chatRef = db.ref('chats')

// ======================================
// CHAT LISTENER
// ======================================
const chatListener = async (project_id, hook) => {
    try{
        await chatRef.child(project_id).on("value",(snapshot)=>{
            if(snapshot.val() !== null) {
                hook(Object.keys(snapshot.val()).map(item => {
                    return {id: item, ...snapshot.val()[item]}
                }))
            }
            else{
                return []
            }
        })
    }
    catch(error){
        return { succes: false}
    }
}


// =====================================
// SEND MESSAGE
// =====================================

const sendMessage = async (project_id, from, msg) => {
    /*
        from: (0 - maker), (1 - creative)
    */

    try{
        await chatRef.child(project_id).push({
            from,
            msg,
            date: new Date().toString()
        })
    }
    catch(error){
        return {succes: false, message: "message can't send"}
    }
}

// ======================================
// DETALLES DE PROYECTO
// ======================================
const getProjectById = async (project_id) => {
    try{

        let project = await projectsDbRef.child(project_id).once("value")
        return {succes: true, data: project.val()}
    }
    catch(error){
        return {succes: false, error}
    }
}


// ======================================
// LISTENER PROJECTS HISTORY
// ======================================

const projectHistory = async (hook, type_user) =>{
    try{
        await projectsDbRef.orderByChild("status").equalTo(2).on("value",(snapshot)=>{
            console.log(store.getState().user.uid)
            if(snapshot.val() !== null){
                const projectsDone = Object.keys(snapshot.val()).filter(item => 
                    snapshot.val()[item][type_user] === store.getState().user.uid
                )

                hook(projectsDone.map(item=> {return {uid: item, ...snapshot.val()[item]}}))
            }
            else{
                return []
            }
        })
    }
    catch(error){
        return {succes: false, error}
    }
}

// ======================================
// LISTENER PROJECTS HISTORY
// ======================================

const projectCurrents = async (hook, type_user) =>{
    try{
        await projectsDbRef.orderByChild(type_user).equalTo(store.getState().user.uid).on("value",(snapshot)=>{
            console.log(snapshot.val())
            if(snapshot.val() !== null){
                const projects = Object.keys(snapshot.val()).filter(item => 
                    snapshot.val()[item]['status'] < 2
                )
                hook(projects.map(item=> {return {uid: item, ...snapshot.val()[item]}}))
            }
            else{
                return []
            }
        })
    }
    catch(error){
        return {succes: false, error}
    }
}

export {
    // CHAT
    chatListener,
    sendMessage,

    // PROJECT
    getProjectById,
    projectHistory,
    projectCurrents
}