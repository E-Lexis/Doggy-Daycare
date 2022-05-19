async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#owner-username-login").value.trim();
    const password = document.querySelector("#owner-password-login").value.trim();

    if (username && password) {
        const response = await fetch('/api/owners/login', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      }
}
  
document.querySelector('.owner-login-form').addEventListener('submit', loginFormHandler);