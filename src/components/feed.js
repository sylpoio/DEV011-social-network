import { signOutFunction } from '../lib/auth';
import {
  paintRealTime, createComment, paintRealTimeComment, deletePost,
} from '../lib/database';
import LogoPeque from '../images/LogoPeque.png';
/* eslint-disable */

/* // Obtener un documento de post específico
const postID = "postID_n"; // Reemplaza con el ID del post que estás visualizando
const postRef = db.collection("posts").doc(postID);

// Obtener la subcolección de comentarios para ese post
postRef.collection("comentarios").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Acceder a los comentarios aquí (doc.data())
            console.log(doc.id, " => ", doc.data());
            // Puedes mostrar los comentarios en tu interfaz de usuario aquí
        });
    })
    .catch((error) => {
        console.error("Error obteniendo comentarios: ", error);
    });

 */


function renderComment(renderTextComment, renderDisplayNameLogged, postId) {
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comment-container');
  const commentContainerDiv = `
  <h5 class="user-comment">${renderDisplayNameLogged}</h5>
  <p class="text-comment">${renderTextComment}</p>
  `;
  const comments = document.querySelector(`#` + postId);
  console.log('que eres', comments);
  commentContainer.innerHTML = commentContainerDiv;
  return comments.appendChild(commentContainer);
}

function renderPostContainer(
  renderTextPost,
  renderDisplayName,
  postId,
) {
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
        <span id="like-counter">contador</span>
      </div>
    
    </div>
  </div>  
  <div class="create-comment">
    <textarea class="create-text-comment" placeholder="Deja tu comentario"></textarea>
    <button id="send-comment">➡</button>
  </div>
  <section class="comment-section" id=${postId}></section>
  `;

  postContainer.innerHTML = postContainerPage;
  // -----------------llamar al dom-------------------
  const posts = document.querySelector('.posts');
  const createTextComment = postContainer.querySelector('.create-text-comment');
  const sendComment = postContainer.querySelector('#send-comment');
  const deleteButton = postContainer.querySelector('#delete');

  deleteButton.addEventListener('click', () => deletePost)

  sendComment.addEventListener('click', () => {
    console.log('CLICK');
    const textCommentValue = createTextComment.value;
    createComment(textCommentValue, postId);
  });
  paintRealTimeComment((querySnapshotComment) => {
    const sectionComment = postContainer.querySelector(`#` + postId);
    sectionComment.textContent = '';
    querySnapshotComment.forEach((doc) => {
      const renderTextComment = doc.data().comment;
      const renderDisplayNameLogged = doc.data().displayName;
      renderComment(renderTextComment, renderDisplayNameLogged, postId);
    });
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
      const postId = doc.id;
      console.log(doc.id);
      console.log(doc.data());
      const renderTextPost = doc.data().post;
      const renderDisplayName = doc.data().displayName;
      renderPostContainer(renderTextPost, renderDisplayName, postId);
    });
  });
  return containerFeed;
};
