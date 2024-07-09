// Add your code here

function submitData(name,email){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        },
        body : JSON.stringify({name, email})
    })
    .then(response => response.json())
    .then(result => {
        //This will return the id only since it is unique, while the name and email being passed as arguments are the same
        document.body.innerHTML = result["id"]
        //Can be verified by checking the url: http://localhost:3000/users/`${id}`
    })
    .catch(error => document.body.innerHTML = error.message)
}

submitData()