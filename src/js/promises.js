const sayHi = name => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Hi ${name}!`)
        }, 500)
    })
}

sayHi('Kaleb')
    .then(response => {
        console.log(response)
    })

sayHi('Travis')
    .then(response => {
        console.log(response)
    })

sayHi('Jason')
    .then(response => {
        console.log(response)
    })