// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name: name, email: email }),
    })
    .then(res => res.json())
    .then(data => {
        const body = document.querySelector("body");
        const anotherId = document.createElement("p");
        anotherId.textContent = `New ID: ${data.id}`;
        body.appendChild(anotherId);
    })
    .catch(error => {
        const body = document.querySelector("body");
        const errMessage = document.createElement("p");
        errMessage.textContent = `Error: ${error.message}`;
        body.appendChild(errMessage);
    });
}