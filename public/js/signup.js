function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const first_name = document.querySelector("#first-name-signup").value.trim();
  const last_name = document.querySelector("#last-name-signup").value.trim();
  const phone = document.querySelector("#phone-signup").value.trim();

  if (username && email && password && first_name && last_name) {
    fetch('/api/owners', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
        first_name,
        last_name,
        phone
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {console.log(response)})
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);