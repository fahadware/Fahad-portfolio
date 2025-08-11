// Design Projects: data + rendering + modal

const designProjects = [
  {
    id: 1,
    name: "Movie Dashboard UI",
    type: "Dashboard",
    tags: ["Design", "Prototype", "UI"],
    description:
      "A cinematic dashboard UI concept with emphasis on rich visuals.",
    image: "moviedashboard.png",

    mockupUrl: "moviedashboard.png",
  },
  {
    id: 2,
    name: "E-commerce Website Womens Clothing",
    type: "E-commerce Website",
    tags: ["Design", "Wireframe", "Prototype"],
    description: "A clean and modern UI. ",
    image: "page-pic.png",

    mockupUrl: "women-clothing.png",
  },
  {
    id: 3,
    name: "Waether App UI",
    type: "Weather App",
    tags: ["Design", "prototyping", "animation"],
    description: "A clean and modern weather app UI.",
    image: "weatherpic.png",

    mockupUrl: "weathermockup.png",
  },
  {
    id: 4,
    name: "clothing store App UI",
    type: "Clothing Store",
    tags: ["Design", "UX", "Wireframe"],
    description: "A clean and modern clothing store UI.",
    image: "clothingstore.png",

    mockupUrl: "clothingstore.png",
  },
  {
    id: 5,
    name: "landing page",
    type: "Furniture Store",
    tags: ["Design", "UX", "Wireframe"],
    description: "A clean and modern furniture store landing page.",
    image: "funiture.png",

    mockupUrl: "furniturelandingpage.png",
  },
  {
    id: 6,
    name: "Add to Cart Page",
    type: "clothing store",
    tags: ["Design", "UX", "Animation"],
    description: "Design concept of add to cart Page",
    image: "clothingstore.png",

    mockupUrl: "Cart.png",
  },
];

function createTagChips(tags) {
  if (!Array.isArray(tags) || tags.length === 0) return '';
  return `<div class="project-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
}

function createDesignCard(project) {
  return `
    <div class="project-card loading" data-id="${project.id}">
        <div class="project-image">
            <img src="${project.image}" alt="${project.name}" loading="lazy">
        </div>
        <div class="project-info">
            <h3 class="project-name">${project.name}</h3>
            <div class="project-subject">${project.type || 'Design'}</div>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                <span class="tech-label">Tags:</span>
                <div class="tech-tags">
                    ${(project.tags || []).map(t => `<span class=\"tech-tag\">${t}</span>`).join('')}
                </div>
            </div>
            <div class="project-actions">
              
                <button class="project-btn btn-favourite btn-mockup" data-mockup="${project.mockupUrl}" data-caption="${project.name}">
                    <i class="fas fa-image"></i>
                    View Mockup
                </button>
            </div>
        </div>
    </div>
  `;
}

function renderDesignProjects() {
  const grid = document.getElementById('designsGrid');
  if (!grid) return;
  grid.innerHTML = designProjects.map(createDesignCard).join('');

  // Staggered pan-in animation like university page
  const cards = Array.from(grid.querySelectorAll('.project-card'));
  cards.forEach((card, index) => {
    // Remove loading class so pan-animate styles take effect
    card.classList.remove('loading');
    // force reflow
    void card.offsetWidth;
    setTimeout(() => {
      card.classList.add('pan-animate');
    }, index * (window.innerWidth <= 480 ? 180 : window.innerWidth <= 768 ? 200 : 220));
  });
}

// Modal logic
function openMockupModal(src, caption) {
  const modal = document.getElementById('mockupModal');
  const img = document.getElementById('mockupImage');
  const cap = document.getElementById('mockupCaption');
  if (!modal || !img || !cap) return;
  img.src = src;
  img.alt = caption || 'Design mockup';
  cap.textContent = caption || '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeMockupModal() {
  const modal = document.getElementById('mockupModal');
  const img = document.getElementById('mockupImage');
  if (!modal || !img) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  img.src = '';
}

document.addEventListener('DOMContentLoaded', () => {
  renderDesignProjects();

  // Delegate click for mockup buttons
  document.addEventListener('click', (e) => {
    const mockupBtn = e.target.closest('.btn-mockup');
    if (mockupBtn) {
      const src = mockupBtn.getAttribute('data-mockup');
      const caption = mockupBtn.getAttribute('data-caption');
      openMockupModal(src, caption);
    }

    const isBackdrop = e.target.matches('.mockup-backdrop') || e.target.getAttribute('data-close') === 'true';
    const isClose = e.target.closest('#mockupClose');
    if (isBackdrop || isClose) {
      closeMockupModal();
    }
  });

  // Esc to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMockupModal();
  });
});


