// Initialize the Async Function
async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("HTTP error! status: " + response.status);
        }
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement("ul");
        users.forEach(user => {
            const list = document.createElement('li');
            list.textContent = user.name;
            userList.appendChild(list)
        });
        dataContainer.appendChild(userList);

    }
    catch(error) {
        dataContainer.innerHTML = '';
        dataContainer.innerHTML = "Failed to load user data.";
        console.error("Error fetching data:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchUserData)
