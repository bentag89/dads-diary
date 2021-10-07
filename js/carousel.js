const postsUrl = "https://dads-diary.bentagi.one/wp-json/wp/v2/posts?_embed&per_page=8";
const postContainer = document.querySelector(".posts");


async function getPosts(url) {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    posts.forEach(function (post) {
        postContainer.innerHTML +=
            `<div>
            <a href="post-specific.html?id=${post.id}">
            <img class = "img" src="${post._embedded['wp:featuredmedia'][0].source_url}" alt = ${post.title.rendered}></a>
            <h2 class = "posttitle">${post.title.rendered}</h2></div>`
    })
}

getPosts(postsUrl);


const arrowRight = document.getElementById("slideright");
arrowRight.onclick = function () {
    const container = document.getElementById("postcarousel");
    slider(container,'right',5,400,10);
}

const arrowLeft = document.getElementById("slideleft");
arrowLeft.onclick = function () {
    const container = document.getElementById("postcarousel");
    slider(container,'left',5,400,10);
}

function slider(element,direction,speed,distance,step){
    scrollAmount = 0;
    const carouselInterval = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(carouselInterval);
        }
    }, speed)
}

