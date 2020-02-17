export const showAlert = (hook, message, variant='danger', delay=3000) => {
    hook({show:true, message, variant})
    window.setTimeout(()=>{
        hook({show: false})
    },delay)
}