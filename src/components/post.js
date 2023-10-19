export const renderPost = (navigateTo) => {
    const containerPost = document.createElement('div');
    containerPost.classList.add('post-page');
    const postPage = `
    <section>
      <div>
        <h5>Usuario</h5>
        <button id="cancel">❌✖</button>
      </div>
      <label for="inputPost"></label>
      <input type="text">
      <button id="uploadPicture">📷</button>
      <button id="publish">Publicar</button>
    </section>
      `;
    containerPost.innerHTML = postPage;
    return containerPost;
};
