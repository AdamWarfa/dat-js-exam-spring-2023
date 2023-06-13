"use strict";
window.addEventListener("load", initApp);

let posts;
async function initApp() {
  posts = await getPosts("posts.json");
  console.log(posts);
  displayPosts(posts);
  document.querySelector("#sortorder").addEventListener("change", sortPosts);
}

async function getPosts(url) {
  const res = await fetch(url);
  const data = res.json();
  return data;
}

function displayPosts() {
  document.querySelector("#posts-list").innerHTML = "";
  for (const post of posts) {
    document.querySelector("#posts-list").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
        
        <article>
                    <img src="${post.image}" alt="${post.caption}" />
                    <h2>${post.caption}</h2>
                    <p>Likes: ${post.likes}</p>
                </article>
        
        
        
        `
    );
  }
}
