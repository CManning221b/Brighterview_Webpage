async function loadComponent(targetId, htmlPath) {
    const res = await fetch(htmlPath);
    if (!res.ok) { console.error(`Failed to load component: ${htmlPath}`); return; }
    document.getElementById(targetId).innerHTML = await res.text();
}

function loadStylesheet(path) {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = path;
    document.head.appendChild(link);
}

async function loadMarkdownInto(targetId, mdPath) {
    const res = await fetch(mdPath);
    if (!res.ok) { console.error(`Failed to load markdown: ${mdPath}`); return; }
    document.getElementById(targetId).innerHTML = marked.parse(await res.text());
}