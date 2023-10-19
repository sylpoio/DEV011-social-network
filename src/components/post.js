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
      <input type="text" id= "textPost">
      <button id="uploadPicture">📷</button>
      <button id="publish">Publicar</button>
    </section>
      `;
    containerPost.innerHTML = postPage;

    const cancelBtn = containerPost.querySelector('#cancel');
    const textPost = containerPost.querySelector ('#textPost');
    const uploadPictureBtn = containerPost.querySelector('#uploadPicture');
    const publishBtn = containerPost.querySelector ('#publish');

    // -----------DOM calls-------------------

    textPost.addEventListener = ('keyup', () => {

    });
    
    cancelBtn.addEventListener = ('click', () => {

    });

    uploadPictureBtn.addEventListener = ('click', () => {
      
    });

    publishBtn.addEventListener = ('click', () => {
      
    });

    return containerPost;
};
