import { Promise as Promise$1 } from 'core-js/stable/promise/index';

if(typeof Promise$1){
    document.querySelector('h1').textContent = 'Working!';
}

const sayHi = name => {
    return new Promise$1((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Hi ${name}!`);
        }, 500);
    })
};

const addToUl = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    document.querySelector('ul').appendChild(li);
};

sayHi('Kaleb')
    .then(response => {
        addToUl(response);
    });

sayHi('Travis')
    .then(response => {
        addToUl(response);
    });

sayHi('Jason')
    .then(response => {
        addToUl(response);
    });
