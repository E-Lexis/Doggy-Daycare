function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#trainer-username-login").value.trim();
    const password = document.querySelector("#trainer-password-login").value.trim();

    if (username && password) {
        const response = await fetch('/api/trainers/login', {
          method: 'post',
          body: JSON.stringify({
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
}
  
document.querySelector('.trainer-login-form').addEventListener('submit', loginFormHandler);