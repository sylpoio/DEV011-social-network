export const error = () => {
  const title = document.createElement('h2');
  console.log(title);
  title.textContent = 'Error 404 page no found, please go home';
  title.classList.add('error');
  return title;
};
