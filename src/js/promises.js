if(typeof Promise){
    document.querySelector('h1').textContent = 'Polyfilled!'
}

const sayHi = name => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Hi ${name}!`)
        }, 500)
    })
}

const addToUl = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    document.querySelector('ul').appendChild(li)
}

sayHi('Kaleb')
    .then(response => {
        addToUl(response)
    })

sayHi('Travis')
    .then(response => {
        addToUl(response)
    })

sayHi('Jason')
    .then(response => {
        addToUl(response)
    })