<<<<<<< HEAD
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const phone = document.querySelector("#phone-signup").value.trim();

  if (username && email && password) {
    await fetch("/api/owners", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
        phone,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
=======
async function loginFormHandler(event) {
  event.preventDefault();

<<<<<<<< HEAD:public/js/login.js
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/owners/login", {
      method: "post",
========
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const first_name = document.querySelector("#first-name-signup").value.trim();
  const last_name = document.querySelector("#last-name-signup").value.trim();
  const phone = document.querySelector("#phone-signup").value.trim();

  if (username && email && password && first_name && last_name) {
    fetch('/api/owners', {
      method: 'post',
>>>>>>>> 4bf890b35b4c8ceafc36fc2616230f21b380bcda:public/js/signup.js
      body: JSON.stringify({
        username,
        password,
<<<<<<<< HEAD:public/js/login.js
========
        first_name,
        last_name,
        phone
>>>>>>>> 4bf890b35b4c8ceafc36fc2616230f21b380bcda:public/js/signup.js
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace("/");
>>>>>>> 4bf890b35b4c8ceafc36fc2616230f21b380bcda
    } else {
      alert(response.statusText);
    }
  }
}

<<<<<<< HEAD
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
=======
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
>>>>>>> 4bf890b35b4c8ceafc36fc2616230f21b380bcda
