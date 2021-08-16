console.log('Hello world')

const getProfile = username => {
    return fetch(`https://api.github.com/users/${username}`)
        .then((data) => {
            console.log(data.json())
            ({
                name: data.name,
                location: data.location,
                company: data.company
            })
        })
        .catch(e => {
            console.warn(e)
        })
}

getProfile('KalebDykema')
    .then(response => {
        console.log(response)
    })