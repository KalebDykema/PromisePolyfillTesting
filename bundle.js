(function (index) {
    'use strict';

    if(typeof index.Promise){
        document.querySelector('h1').textContent = 'Working!';
    }

    const sayHi = name => {
        return new index.Promise((resolve, reject)=>{
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

}(index));
