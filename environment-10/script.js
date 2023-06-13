"use strict";
window.addEventListener("load", initApp);
let posts;
async function initApp() {
  posts = await getPosts("posts.json");
  console.log(posts);

  document.querySelector("#all").addEventListener("click", () => displayPosts(posts));
}

async function getPosts(url) {
  const res = await fetch(url);
  const data = res.json();
  return data;
}

function displayPosts(posts) {
  let checkbox = document.querySelector("#all").checked;
  console.log(checkbox);
  document.querySelector("#posts-list").innerHTML = "";
  for (const post of posts) {
    if (checkbox === false) {
      if (post.published === true) {
        displayPost(post);
      }
    } else if (checkbox === true) {
      displayPost(post);
    }
  }
}

function displayPost(post) {
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
