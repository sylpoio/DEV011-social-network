import { signOutFunction } from '../lib/auth' 

export const renderFeed = (navigateTo) => {
  const containerFeed = document.createElement('div');
  containerFeed.classList.add('feed');
  const feedPage = `
  <header>
    <img src="./images/LogoPeque.png" alt="logo-mochileiros" class="little-logo" />
    <h3>Mochileirxs</h3>
    <div class="signout-button">
    <h4 class="user">Usuarix</h4>
    <button id="signout">Salir</button>
  </header>
  <button class="share-experience">Comparte tu experiencia</button>
  <section class="posts">
    <section class="post-square">
      <div class = "post"> 
      <div class = "header-post"> 
        <h5>Usuarix</h5>
        <button id="edit">🖋</button>
      </div> 
        <p>Miren esta cascada bella</p>
        <div class = "image">
        <img src="./images/imagen-muestra-post.png" alt="foto-post" class="foto-post" />
        </div>
      </div>  
      <div class = "reactions">
        <button id="like">✈️</button>
        <span id="like-counter">contador</span>
        <button id="comment">💬</button>
        <button id="delete">🗑</button>
      </div>
      <div class="comment">
        <h5 class="user-comment">Usuarix</h5>
        <textarea class="text-comment" placeholder="deja tu comentario"></textarea>
      </div>
    </section>
    <section class="post-square">
      <div class = "post"> 
      <div class = "header-post"> 
        <h5>Usuarix</h5>
        <button id="edit">🖋</button>
      </div>
        <p>Miren esta cascada bella</p>
        <div class="image">
          <img src="./images/imagen-muestra-post.png" alt="foto-post" class="foto-post" />
        </div>
      </div>  
      <div class = "reactions">
        <button id="like">✈️</button>
        <span id="like-counter">contador</span>
        <button id="comment">💬</button>
        <button id="delete">🗑</button>
      </div>
      <div class= "comment">
      <h5 class="user-comment">Usuarix</h5>
        <textarea class="text-comment" placeholder="deja tu comentario"></textarea>
      </div>
    </section>
  <section/>
  `;
  containerFeed.innerHTML = feedPage;

  //----------------------Botón salir------------------------

  const exitButton = containerFeed.querySelector('#signout')

  exitButton.addEventListener('click', () => {
    signOutFunction();
    navigateTo('/');
  });

  return containerFeed;
};
