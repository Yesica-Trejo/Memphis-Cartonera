/* ================================================================
   FILE: js/main.js
   PROJECT: Memphis Cartoneras Website
   ----------------------------------------------------------------
   This file does two things:
     1. Renders the gallery from the BOOKS array (edit here only!)
     2. Smooth scroll for all anchor links

   ================================================================
   ★ HOW TO ADD A NEW BOOK TO THE GALLERY
   ================================================================
   1. Put your photo in the images/gallery/ folder
      e.g.  images/gallery/mi-libro.jpg

   2. Add ONE object to the BOOKS array below:
      {
        img:     "images/gallery/mi-libro.jpg",  ← photo path
        title:   "Mi Libro",                      ← book title
        student: "Student Name",                  ← author
        date:    "Spring 2025"                    ← semester
      },

   That's it! The page builds the card automatically.
   Leave img as "" to show a placeholder card instead.
   ================================================================ */

const BOOKS = [

  // ── PUBLISHED BOOKS ────────────────────────────────────────────
  // Add entries here. Order = order displayed on page.

  {
    img:     "images/gallery/las-medias-flamencos.jpg",
    title:   "Las Medias de los Flamencos",
    student: "Student Name",
    date:    "Date TBD"
  },

  // ── PLACEHOLDER CARDS ──────────────────────────────────────────
  // Leave img as "" to show the "add photo" placeholder.
  // Replace "" with the real path when a photo is ready.

  { img: "", title: "", student: "", date: "" },
  { img: "", title: "", student: "", date: "" },
  { img: "", title: "", student: "", date: "" },
  { img: "", title: "", student: "", date: "" },

];

// ── Placeholder colors for cards without photos ─────────────────
const PLACEHOLDER_COLORS = [
  "rgba(26,122,110,0.1)",
  "rgba(36,113,163,0.1)",
  "rgba(142,68,173,0.1)",
  "rgba(230,126,34,0.1)",
  "rgba(192,57,43,0.1)",
];

// ── Build and inject gallery cards ──────────────────────────────
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = "";

  BOOKS.forEach(function(book, i) {
    const card = document.createElement("div");
    card.className = "gallery-card";

    if (book.img) {
      // Real photo card
      card.innerHTML =
        '<img src="' + book.img + '" alt="' + book.title + ' by ' + book.student + '">' +
        '<div class="gallery-caption">' +
          '<div class="gallery-caption-title">' + book.title + '</div>' +
          '<div class="gallery-caption-meta">' + book.student + (book.date ? " · " + book.date : "") + '</div>' +
        '</div>';
    } else {
      // Placeholder card
      var color = PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length];
      card.innerHTML =
        '<div class="gallery-img-placeholder" style="background:' + color + ';">' +
          '<svg width="48" height="48" fill="none" stroke="rgba(60,40,20,0.35)" stroke-width="1.5" viewBox="0 0 24 24">' +
            '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>' +
          '</svg>' +
          '<span style="font-size:0.8rem; opacity:0.6;">Add book photo</span>' +
        '</div>' +
        '<div class="gallery-caption">' +
          '<div style="height:1px; background:var(--cardboard-dark); opacity:0.4; width:80%; margin-bottom:8px;"></div>' +
          '<div style="height:1px; background:var(--cardboard-dark); opacity:0.4; width:55%;"></div>' +
        '</div>';
    }

    grid.appendChild(card);
  });

  // "More coming soon" card at the end
  const comingSoon = document.createElement("div");
  comingSoon.className = "gallery-card";
  comingSoon.style.cssText = "border-style:dashed; background:rgba(255,248,220,0.5); cursor:default;";
  comingSoon.innerHTML =
    '<div class="gallery-img-placeholder" style="background:transparent; border-bottom:2px dashed var(--cardboard-dark);">' +
      '<svg width="48" height="48" fill="none" stroke="rgba(120,80,30,0.3)" stroke-width="1.5" viewBox="0 0 24 24">' +
        '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>' +
      '</svg>' +
      '<span style="font-family:\'Caveat\',cursive; font-size:1rem; color:rgba(80,50,20,0.5);">More coming soon</span>' +
    '</div>' +
    '<div class="gallery-caption">' +
      '<div style="height:1px; background:var(--cardboard-dark); opacity:0.15; width:80%; margin-bottom:8px;"></div>' +
      '<div style="height:1px; background:var(--cardboard-dark); opacity:0.15; width:55%;"></div>' +
    '</div>';
  grid.appendChild(comingSoon);
}

renderGallery();


/* ────────────────────────────────────────────────────────────────
   SMOOTH SCROLL
   ──────────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    var targetId = link.getAttribute('href');
    var targetEl = document.querySelector(targetId);
    if (targetEl) {
      event.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* ================================================================
   ★ HOW TO ADD A FELLOW PHOTO (in index.html)
   ================================================================
   In the #history section, find a .fellow-photo-card block.

   Replace this placeholder div:
     <div class="fellow-photo-placeholder">...</div>

   With a real image tag:
     <img src="images/fellows/firstname-lastname.jpg"
          alt="Fellow Name"
          class="fellow-photo-img">

   Then update the caption:
     <strong>Actual Name</strong>
     <span>2024 · Writer & Bookmaker</span>
   ================================================================ */


/* ================================================================
   ★ HOW TO UPDATE CONTACT INFORMATION
   ================================================================
   Search index.html for "PettinaroliE@rhodes.edu" — it appears
   in 3 places. Replace all three with the correct email address.

   To update office hours or location, find the comments:
     <!-- Row: office hours -->
     <!-- Row: office location -->
   and edit the <p> text beneath them.
   ================================================================ */
