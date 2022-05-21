async function editHandler(event) {
    event.preventDefault();

    if (Response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('editInfoModal').addEventListener('submit', editHandler);