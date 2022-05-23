async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="dog-name"]').value;
  const age = document.querySelector('input[name="dog-age"]').value;
  const gender = document.querySelector('input[name="dog-gender"]').value;
  const breed = document.querySelector('input[name="dog-breed"]').value;
  const bio = document.querySelector('textarea[name="dog-bio"]').value;


  const response = await fetch(`/api/dogs`, {
    method: "POST",
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
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-dog-form")
  .addEventListener("submit", newFormHandler);
