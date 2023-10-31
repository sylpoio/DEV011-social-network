import { signOutFunction } from '../lib/auth';
import { paintRealTime, postReferenceLike } from '../lib/database';
import LogoPeque from '../images/LogoPeque.png';

function renderPostContainer(renderTextPost, renderDisplayName, postId, dataLikes) {
  const postContainer = document.createElement('section');
  postContainer.classList.add('post-square');
  const postContainerPage = `
    <div class = "post"> 
    <div class = "header-post"> 
      <h5>${renderDisplayName}</h5>
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
        <span id="like-counter">${dataLikes.length}</span>
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
  const like = postContainer.querySelector('#like');
  const spanCounter = postContainer.querySelector('#like-counter')

  like.addEventListener('click', async () => {
    dataLikes = await postReferenceLike(postId, dataLikes);
    spanCounter.textContent = dataLikes.length;
  });
  return posts.appendChild(postContainer);
}

export const renderFeed = (navigateTo) => {
  const containerFeed = document.createElement('div');
  containerFeed.classList.add('feed');
  const currentUser = sessionStorage.getItem('usuarioLogeado');
  const feedPage = `
  <header>
    <img src=${LogoPeque} class="little-logo" />
    <h3>Mochileirxs</h3>
    <div class="user-info">
      <h4 class="user">${currentUser}</h4>
      <button id="signout">Salir</button>
    </div>
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

  paintRealTime((querySnapshot) => {
    const sectionPosts = containerFeed.querySelector('.posts');
    sectionPosts.textContent = '';
    querySnapshot.forEach((doc) => {
      const renderTextPost = doc.data().post;
      const renderDisplayName = doc.data().displayName;
      const dataLikes = doc.data().likes;
      const postId = doc.id;
      renderPostContainer(renderTextPost, renderDisplayName, postId, dataLikes);
    });
  });
  return containerFeed;
};
