function editInfoFormHandler(event) {
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

function addDogFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector("#add-dog-name").value.trim();
    const age = document.querySelector("#add-dog-age").value.trim();
    const breed = document.querySelector("#add-dog-breed").value.trim();
    const size = document.querySelector("#add-dog-size").value.trim();
  
    if (name && age && breed && size) {
      fetch('/api/dogs', {
        method: 'post',
        body: JSON.stringify({
          name,
          age,
          breed,
          size
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {console.log(response)})
    }
}
  
document.querySelector('.edit-info-form').addEventListener('submit', editInfoFormHandler);
document.querySelector('.add-dog-form').addEventListener('submit', addDogFormHandler);

