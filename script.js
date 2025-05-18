const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalArt = document.getElementById('modal-art');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

const artPiecesData = [
  {
    title: "Ethereal Bloom",
    artist: "AI Curator",
    description: "A delicate dance of pastel gradients and soft curves, evoking a serene digital blossom."
  },
  {
    title: "Neon Prism",
    artist: "AI Curator",
    description: "Sharp geometric shapes bathed in vibrant neon hues, reflecting futuristic minimalism."
  },
  {
    title: "Solar Flare",
    artist: "AI Curator",
    description: "Radiant gradients and circular forms mimic the explosive energy of a distant star."
  },
  {
    title: "Liquid Mirage",
    artist: "AI Curator",
    description: "Fluid shapes and smooth transitions create an illusion of flowing digital water."
  },
  {
    title: "Pixel Drift",
    artist: "AI Curator",
    description: "Abstract pixelated forms drifting in a sea of soft gradients and subtle shadows."
  },
  {
    title: "Chromatic Wave",
    artist: "AI Curator",
    description: "Wavy lines and vibrant colors blend to form a dynamic visual rhythm."
  },
  {
    title: "Silent Echo",
    artist: "AI Curator",
    description: "Muted tones and minimalist shapes evoke a quiet digital reverberation."
  },
  {
    title: "Fractal Bloom",
    artist: "AI Curator",
    description: "Repeating geometric patterns unfold like a blossoming fractal flower."
  },
  {
    title: "Glitch Garden",
    artist: "AI Curator",
    description: "Deliberate distortions and vibrant colors create a digital garden of chaos."
  },
  {
    title: "Aurora Pulse",
    artist: "AI Curator",
    description: "Soft gradients and pulsating shapes mimic the northern lights in digital form."
  }
];

// Helper to create CSS art elements
function createCSSArt(index) {
  const art = document.createElement('div');
  art.classList.add('css-art');

  // Add abstract shapes based on index for variety
  const shape1 = document.createElement('div');
  shape1.classList.add('shape1');
  art.appendChild(shape1);

  const shape2 = document.createElement('div');
  shape2.classList.add('shape2');
  art.appendChild(shape2);

  const shape3 = document.createElement('div');
  shape3.classList.add('shape3');
  art.appendChild(shape3);

  return art;
}

// Create gallery pieces
function createGallery() {
  artPiecesData.forEach((data, index) => {
    const piece = document.createElement('div');
    piece.classList.add('art-piece');
    piece.dataset.index = index;

    const art = createCSSArt(index);
    piece.appendChild(art);

    // Hover info tooltip
    piece.title = `${data.title} by ${data.artist}`;

    // Click to open modal
    piece.addEventListener('click', () => openModal(index));

    gallery.appendChild(piece);
  });
}

// Open modal with art details
function openModal(index) {
  const data = artPiecesData[index];
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;

  // Clear previous art
  modalArt.innerHTML = '';
  const art = createCSSArt(index);
  modalArt.appendChild(art);

  modal.classList.remove('hidden');
}

// Close modal
modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Initialize gallery on page load
createGallery();
