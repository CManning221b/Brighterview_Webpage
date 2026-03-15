async function init() {
    await loadComponent('navbar', 'components/navbar/navbar.html');
    await loadComponent('blog', 'components/blogPosts/blogPosts.html');

    loadStylesheet('components/navbar/navbar.css');
    loadStylesheet('components/blogPosts/blogPosts.css');

    const navScript = document.createElement('script');
    navScript.src = 'components/navbar/navbar.js';
    document.body.appendChild(navScript);

    const blogScript = document.createElement('script');
    blogScript.src = 'components/blogPosts/blogPosts.js';
    document.body.appendChild(blogScript);
}

init();