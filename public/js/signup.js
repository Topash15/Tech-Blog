// function to handle signup event
async function signUpFormHandler(event) {
  event.preventDefault();

  // saves trimmed versions of user input
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  // confirms that all forms have been filled before making request
  if (username && email && password) {
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
        document.location.replace('./')
    } else {
        alert(response.statusText)
    }
  }
}
