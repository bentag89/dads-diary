const postsUrl = "https://dads-diary.bentagi.one/wp-json/wp/v2/posts?_embed&per_page=12";
const postContainer = document.querySelector(".allposts");


async function getPosts(url) {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    posts.forEach(function (post) {
        postContainer.innerHTML +=
            `<div>
            <a href="post-specific.html?id=${post.id}">
            <div class = "img"><img src="${post._embedded['wp:featuredmedia'][0].source_url}" alt = ${post.title.rendered}></a></div>
            <h2 class = "posttitle">${post.title.rendered}</h2></div>`
    })
}

getPosts(postsUrl);

const mediaQuerySmall = window.matchMedia('(min-width: 600px)');
const mediaQueryMedium = window.matchMedia('(min-width: 800px)');
const mediaQueryLarge = window.matchMedia('(min-width: 1000px)');


document.querySelector('button').onclick = function() {
    var blogsDiv = document.getElementById('all-posts');
    blogsDiv.style.height = '4500px';
}



if (mediaQuerySmall.matches) {
document.querySelector('button').onclick = function() {
    var blogsDiv = document.getElementById('all-posts');
    blogsDiv.style.height = '2600px';
}
}

if (mediaQueryMedium.matches) {
    document.querySelector('button').onclick = function() {
        var blogsDiv = document.getElementById('all-posts');
        blogsDiv.style.height = '1800px';
    }
    }

if (mediaQueryLarge.matches) {
        document.querySelector('button').onclick = function() {
            var blogsDiv = document.getElementById('all-posts');
            blogsDiv.style.height = '1400px';
        }
        }


