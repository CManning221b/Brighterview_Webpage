async function initBlog() {
    const res = await fetch('content/blog/index.json');
    if (!res.ok) { console.error('Failed to load blog index'); return; }

    const posts = await res.json();
    posts.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    const listEl = document.getElementById('blog-list');
    const postEl = document.getElementById('blog-post');
    const postContent = document.getElementById('blog-post-content');
    const fsSplit = document.querySelector('.fs-split');

    listEl.innerHTML = `
        <h2 class="blog-list-header">Blog</h2>
        <div class="blog-cards">
            ${posts.map(post => `
                <div class="blog-card" data-slug="${post.slug}">
                    <div class="blog-card-title">${post.title}</div>
                    <div class="blog-card-date">${formatDate(post.date)}</div>
                    <div class="blog-card-excerpt">${post.excerpt}</div>
                </div>
            `).join('')}
        </div>
    `;

    listEl.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', async () => {
            const slug = card.dataset.slug;
            const mdRes = await fetch(`content/blog/${slug}.md`);
            if (!mdRes.ok) { console.error(`Failed to load post: ${slug}`); return; }

            postContent.innerHTML = marked.parse(await mdRes.text());
            listEl.style.display = 'none';
            postEl.style.display = 'block';
            fsSplit.classList.add('post-open');
        });
    });

    document.getElementById('blogBack').addEventListener('click', () => {
        postEl.style.display = 'none';
        listEl.style.display = 'block';
        fsSplit.classList.remove('post-open');
    });
}

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('-');
    return new Date(year, month - 1, day);
}

function formatDate(dateStr) {
    return parseDate(dateStr).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    });
}

initBlog();