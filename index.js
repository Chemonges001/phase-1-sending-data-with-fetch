// Add your code here

function submitData(name, email) {
    
    const userInfo = {name: name, email: email}

    return fetch("http://localhost:3000/users",{
    method : "POST",
    headers : {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    body: JSON.stringify(userInfo),

    })

    .then (response => response.json())
    .then(users => {
        document.body.innerHTML = users.id
    })

    .catch(function (error) {
        document.body.innerHTML = error.message;
     })
     
}

