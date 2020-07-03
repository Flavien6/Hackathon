export default function alertToast(title, msg, type, component) {
    
    if(msg.response) {
        component.statusCode = msg.response.status
        component.error = msg.response.statusText
    }

    component.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        icon: type,
        title: title,
        text: msg.message
    }).then(() => {
        if(msg.response) {
            
            component.retry++
            if(component.retry <= 3) {
                component.$swal({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    icon: 'warning',
                    title: "Retry " + component.retry
                })
                setTimeout(component.reload, 2000)
            }
            else if(component.retry > 4) component.retry = 1
        }
        else {
            component.retry = 0
            component.reload()
        }
    })
}