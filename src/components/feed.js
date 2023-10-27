import { signOutFunction } from '../lib/auth';
import { querySnapshot, paintRealTime } from '../lib/database';
import LogoPeque from '../images/LogoPeque.png';

function renderPostContainer(renderTextPost) {
  const postContainer = document.createElement('section');
  postContainer.classList.add('post-square');
  const postContainerPage = `
    <div class = "post"> 
    <div class = "header-post"> 
      <h5>Usuarix</h5>
      <div>
        <button id="edit">🖋</button>
        <button id="delete">🗑</button>
      </div>
    </div>
    <div class="container-text-post">
      <p class="render-text-post">${renderTextPost}</p>
    </div>
    <picture class = "image">
      <img src="./images/imagen-muestra-post.png" alt="foto-post" class="foto-post" />
    </picture>
    <div class = "interactions">
      <div class= "reactions">
        <button id="like">✈️</button>
        <span id="like-counter">contador</span>
      </div>
    <button id="comment">💬</button>
    </div>
  </div>  
  <div class="comment">
    <h5 class="user-comment">Usuarix</h5>
    <textarea class="text-comment" placeholder="deja tu comentario"></textarea>
  </div>
  `;
  postContainer.innerHTML = postContainerPage;
  const posts = document.querySelector('.posts');
  return posts.appendChild(postContainer);
}

export const renderFeed = (navigateTo) => {
  const containerFeed = document.createElement('div');
  containerFeed.classList.add('feed');
  const feedPage = `
  <header>
    <img src=${LogoPeque} class="little-logo" />
    <h3>Mochileirxs</h3>
    <div class="signout-button">
    <h4 class="user">Usuarix</h4>
    <button id="signout">Salir</button>
  </header>
  <button class="share-experience">Comparte tu experiencia</button>
  <section class="posts"></section>
  `;
  containerFeed.innerHTML = feedPage;

  // -----------------llamar al dom-------------------
  const sharePost = containerFeed.querySelector('.share-experience');

  // -----------------navigate to renderPost-----------

  sharePost.addEventListener('click', () => {
    navigateTo('/post');
  });

  // ----------------------Botón salir------------------------

  const exitButton = containerFeed.querySelector('#signout');

  exitButton.addEventListener('click', () => {
    signOutFunction();
    navigateTo('/');
  });

  // querySnapshot.then((docs) => {
  //   docs.forEach((doc) => {
  //     console.log(doc.id);
  //     console.log(doc.data());
  //     const renderTextPost = doc.data().post;
  //     renderPostContainer(renderTextPost);
  //   });

  paintRealTime((querySnapshot) => {
    const sectionPosts = containerFeed.querySelector('.posts');
    sectionPosts.textContent = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
      const renderTextPost = doc.data().post;
      renderPostContainer(renderTextPost);
    });
  });
  return containerFeed;
};
