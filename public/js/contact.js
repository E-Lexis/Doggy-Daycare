async function contactFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector("#name-contact").value.trim();
    const questions = document.querySelector("#questions").value.trim();
  
    if (name && email && questions ) {
        alert("Your inquiry has been received. Please expect a response within 1-2 business days.");
    };
  }
  
  document
    .querySelector(".contact-us-form")
    .addEventListener("submit", contactFormHandler);
  