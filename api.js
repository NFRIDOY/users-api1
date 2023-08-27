// console.log("API");
const postList = document.getElementById("post-list");
const userName = document.getElementById("userName");

function getResponse(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data))
}



function showPost() {
    // console.log("Show Post Btn");

    getResponse("https://jsonplaceholder.typicode.com/posts", showData);

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => response.json())
    //     // .then(data => console.log(data))
    //     .then(data => showData(data))
}
function showData(data) {
    for (const post of data) {
        const li = document.createElement("li");
        li.innerText = post.title;
        postList.appendChild(li);
        console.log(data)

    }
}