async function editFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="dog-name"]').value.trim();
  const age = document.querySelector('input[name="dog-age"]').value.trim();
  const gender = document.querySelector('input[name="dog-gender"]').value.trim();
  const breed = document.querySelector('input[name="dog-breed"]').value.trim();
  const bio = document.querySelector('textarea[name="dog-bio"]').value.trim();
  
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/dogs/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      age,
      gender,
      breed,
      bio
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
