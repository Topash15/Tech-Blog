// function to log user in
async function login(){
    const response = await fetch('api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    // sends to dashboard if successful
    if (response.ok) {
        document.location.replace('/dashboard')
    }
}


// function to log user out
async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}
    });

    // returns to homepage if successful
    if (response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}

// log in button event listener
document.querySelector('#login').addEventListener('click', login);
// log out button event listener
document.querySelector('#logout').addEventListener('click', logout);