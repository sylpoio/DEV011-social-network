export const renderFeed = (navigateTo) => {
  const containerFeed = document.createElement('div');
  containerFeed.classList.add('feed');
  const feedPage = `
  <header>
    <img src="./images/LogoPeque.png" alt="logo-mochileiros" class="little-logo" />
    <h3>Mochileiros</h3>
    <div class="signout-button">
    <h4 class="user">Usuario</h4>
    <button id="signout">Salir</button>
    <div>
  </header>
  <section>
  <div class = "post"> 
    <h5>Usuario</h5>
    <button id="edit">🖋</button>
    <p>Post</p>
    <div class = "image">
    <img src="./images/Fondo-login.png" alt="foto-post" class="foto-post" />
    </div>
  </div>  
  <div class = "reactions">
    <button id="like">✈️</button>
    <span id="like-counter">contador</span>
    <button id="comment">💬</button>
    <button id="delete">🗑</button>
  </div>
  <div class= "comment">
    <h5>Usuario</h5>
    <p>Comentario</p>
  </div>
</section>
    `;
  containerFeed.innerHTML = feedPage;
  return containerFeed;
};
