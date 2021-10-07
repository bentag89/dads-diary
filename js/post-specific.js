const blogSpec = document.querySelector(".postspec");
const blogTitle = document.querySelector(".blogtitle");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



console.log(id);

const url = "https://dads-diary.bentagi.one/wp-json/wp/v2/posts/" + id + "?_embed";

async function fetchPost() {

    try {
        const response = await fetch(url);
        const post = await response.json();

        console.log(post);

        createHtml(post);

      
    }
    catch(error) {
        console.log(error);
    }
    
}

fetchPost();


function createHtml(post){
blogSpec.innerHTML += 
`<h1>${post.title.rendered}</h1>
<img class = "contentimg" class = "img" src = "${post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt = ${post.title.rendered}>
<div class = "abouttext"><p>${post.content.rendered}</p></div>`

blogTitle.innerHTML += 
`Blogs | ${post.title.rendered}`


}

const modalImage = document.querySelectorAll("figure");
modalImage.onclick = function () {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.innerHTML += 
    `<img class = "large-modal-image" src = "${post.content.rendered.figure}">`
}



