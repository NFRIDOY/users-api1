// console.log("API");
const postList = document.getElementById("post-list");
const userName = document.getElementById("userName");

function getResponse(url, callback, key, perentIdElement, childElement) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data, key, perentIdElement, childElement))
}
function showData(data, key, perentIdElement, childElement) {
    const perentId = document.getElementById(perentIdElement);
    for (const post of data) {
        const child = document.createElement(childElement);
        child.innerText = post[key];
        perentId.appendChild(child);
        console.log(data)
    }
}

function showPost() {
    // getResponse("", showData, "", "", "HTML_ELEMNT" );
    getResponse("https://jsonplaceholder.typicode.com/posts", showData, "title", "post-list", "li" );
}
function showData1(data) {
    for (const post of data) {
        const li = document.createElement("li");
        li.innerText = post.title;
        postList.appendChild(li);
        console.log(data)

    }
}

 // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => response.json())
    //     // .then(data => console.log(data))
    //     .then(data => showData(data))