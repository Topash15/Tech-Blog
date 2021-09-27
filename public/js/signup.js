console.log('js loaded')

// function to handle signup event
async function signUpForm(event) {
  event.preventDefault();

  // saves trimmed versions of user input
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();


  // confirms that all forms have been filled before making request
  if (username && email && password) {

    console.log('hello there')
    const response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok){
      console.log('ok')
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signUpForm);
