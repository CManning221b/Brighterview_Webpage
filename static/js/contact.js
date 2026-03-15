async function init() {
    await loadComponent('navbar', 'components/navbar/navbar.html');
    await loadComponent('counselling-logo', 'components/logoDiv/logoDiv.html');
    await loadComponent('contactForm', 'components/contactForm/contactForm.html');
    await loadComponent('contactDetails', 'components/contactDetails/contactDetails.html');



    loadStylesheet('components/navbar/navbar.css');
    loadStylesheet('components/logoDiv/logoDiv.css');
    loadStylesheet('components/contactForm/contactForm.css');
    loadStylesheet('components/contactDetails/contactDetails.css');

    loadMarkdownInto('contact-content', 'content/contact.md');
    loadMarkdownInto('contactDetails-content', 'content/contactDetails.md');



    const script = document.createElement('script');
    script.src = 'components/navbar/navbar.js';
    document.body.appendChild(script);

}

init();