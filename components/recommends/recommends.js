async function initRecommends() {
    const res = await fetch('content/recommends.json');
    if (!res.ok) { console.error('Failed to load recommends data'); return; }

    const items = await res.json();
    const slide = document.getElementById('rc-slide');

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'rc-item';
        div.style.backgroundImage = `url('${item.cover}')`;
        div.innerHTML = `
            <div class="rc-overlay"></div>
            <div class="rc-content">
                <span class="rc-tag">${item.tag}</span>
                <div class="rc-title">${item.title}</div>
                <div class="rc-author">${item.author}</div>
                <div class="rc-desc">${item.description}</div>
            </div>
        `;
        slide.appendChild(div);
    });

    function realItems() {
        return slide.querySelectorAll('.rc-item:not(.rc-duplicate)');
    }

    function syncDuplicate() {
        const existing = slide.querySelector('.rc-duplicate');
        if (existing) existing.remove();
        const clone = realItems()[0].cloneNode(true);
        clone.classList.add('rc-duplicate');
        realItems()[0].insertAdjacentElement('afterend', clone);
    }

    syncDuplicate();

    document.querySelector('.rc-next').addEventListener('click', () => {
        const all = realItems();
        slide.appendChild(all[0]);
        syncDuplicate();
    });

    document.querySelector('.rc-prev').addEventListener('click', () => {
        const all = realItems();
        slide.prepend(all[all.length - 1]);
        syncDuplicate();
    });
}

initRecommends();