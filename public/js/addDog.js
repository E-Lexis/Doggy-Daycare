async function addDog(event) {
    event.preventDefault();

    if (Response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('addDogModal').addEventListener('submit', addDog);