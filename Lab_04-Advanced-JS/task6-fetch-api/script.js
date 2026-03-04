const container = document.getElementById("cardContainer");
const loadBtn = document.getElementById("loadMore");

let start = 0;
const limit = 3;

async function fetchPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
    const data = await response.json();

    data.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        container.appendChild(div);
    });

    start += limit;
}

loadBtn.addEventListener("click", fetchPosts);

fetchPosts();