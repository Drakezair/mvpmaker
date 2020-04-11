import {
    firebase,
} from '../helpers/firebase';

// STORE
import store from '../redux/store';

// REFS
const db = firebase.database()
const storage =  firebase.storage()

// db
const projectsdbRef = db.ref('projects')
// storage
const projectsStRef = storage.ref('projects')

// ===================================
//  LISTENER OF PROJECTS TO TAKE
// ===================================
const getProjectsToApply = async (hook, alertHook) =>{
    try{
        await projectsdbRef.orderByChild("status").equalTo(0).on("value",(snapshot)=>{
            if(snapshot.val() !== null){
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
        return {succes: false, error}
    }
}


// ===================================
//  TAKE PROJECT
// ===================================
const takeProject = async (id) =>{
    try{
        await projectsdbRef.child(id).child("status").set(1)
        await projectsdbRef.child(id).child("reviews").push({
            title: "Start project",
            date: new Date().toString(),
            status: 1
        })
        await projectsdbRef.child(id).child("maker_id").set(store.getState().user.uid)
        return {succes: true}
    }
    catch(error){
        return {succes: false, error}
    }
}

// ====================================
// MAKER NEW EVENT PROJECT
// ====================================
const newReviewsProject = async (project_id, formData, owner) =>{
    try{
        if(formData.file){
            let uploadFile = await projectsStRef
                .child(project_id)
                .child(new Date().toString() + ' - ' + formData.file.name)
                .put(formData.file)
            
            formData.file = uploadFile.metadata.fullPath
        }
        
        await projectsdbRef.child(project_id).child('reviews').push({...formData, date: formData.date.toString(), status: 0, owner: owner})
        return {succes: true}
    }
    catch(error){
        console.log(error)
        return {succes: false}
    }
}

// ====================================
// LISTENER TO EVENTS PROJECT BY ID
// ====================================
const listenerReviewsProjectById = (project_id, hook, alert_hook) =>{
    try{
        projectsdbRef.child(project_id).child('reviews').on("value",snapshot => {
            if(snapshot.val() !== null){
                hook(Object.keys(snapshot.val()).map(item => {
                    return {id: item, ...snapshot.val()[item]}
                }).reverse())
            }
            else{
                return []
            }
        })
    }
    catch(error){
        console.log(error)
    }
}

// ====================================
// DOWNLOAD A FILE FROM EVENT
// ====================================
const downloadReviewFile = async (path) => {
    console.log(path)
    let fileRef = await storage.ref(path)
    let url = await fileRef.getDownloadURL()
    console.log(url)
    window.open(url, '_blank');
    return false
}
export {
    getProjectsToApply,
    takeProject,
    newReviewsProject,
    listenerReviewsProjectById,
    downloadReviewFile
}