function editProfileFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-edit").value.trim();
    const email = document.querySelector("#email-edit").value.trim();
    const password = document.querySelector("#password-edit").value.trim();
    const first_name = document.querySelector("#first-name-edit").value.trim();
    const last_name = document.querySelector("#last-name-edit").value.trim();
    const phone = document.querySelector("#phone-edit").value.trim();
  
    if (username && email && password && first_name && last_name && phone) {
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
  
  document.querySelector('.edit-profile-form').addEventListener('submit', editProfileFormHandler);