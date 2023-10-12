export const renderFeed = () => {
    const containerFeed = document.createElement("div");
    containerFeed.classList.add('feed')
    const feedPage = `
    
    `
    containerFeed.innerHTML = feedPage
    return containerFeed;
  }