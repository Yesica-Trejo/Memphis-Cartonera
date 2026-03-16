/* ================================================================
   FILE: js/main.js
   PROJECT: Memphis Cartoneras Website
   ----------------------------------------------------------------
   This file handles all JavaScript behavior for the site.
   It is kept intentionally small — the site is mostly static HTML
   and CSS. Currently this file does one thing:

     ✓ Smooth scroll — intercepts clicks on anchor links (href="#...")
       and scrolls smoothly to the target section instead of jumping.

   It also serves as the reference guide for common customization
   tasks marked with ★ throughout index.html:

     ★ HOW TO ADD A GALLERY PHOTO         (see Section A below)
     ★ HOW TO ACTIVATE THE APPLY BUTTON   (see Section B below)
     ★ HOW TO UPDATE CONTACT INFO         (see Section C below)

   LOADED: at the bottom of index.html, before </body>, so the
   entire page is parsed before this script runs.
   ================================================================ */


/* ────────────────────────────────────────────────────────────────
   SMOOTH SCROLL
   Finds every link whose href starts with "#" (internal anchor)
   and overrides the default jump behavior with a smooth scroll.
   This works in tandem with `scroll-behavior: smooth` in CSS —
   the JS version provides better control and browser compatibility.
   ──────────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function(link) {

  link.addEventListener('click', function(event) {

    /* Get the target element (e.g. "#about" → finds <section id="about">) */
    var targetId = link.getAttribute('href');
    var targetEl = document.querySelector(targetId);

    /* Only intercept if the target section actually exists on the page */
    if (targetEl) {
      event.preventDefault();                         /* stop the default jump */
      targetEl.scrollIntoView({ behavior: 'smooth' }); /* smooth animated scroll */
    }

  });

});


/* ================================================================
   ★ SECTION A — HOW TO ADD A REAL GALLERY PHOTO
   ================================================================

   Each gallery card in index.html currently looks like this:

     <div class="gallery-card">
       <div class="gallery-img-placeholder" style="background:rgba(...)">
         <svg>...</svg>
         <span class="gallery-upload-hint">Upload student book image</span>
       </div>
       <div class="gallery-caption">
         <div class="gallery-caption-line"></div>
         <div class="gallery-caption-line"></div>
       </div>
     </div>

   STEP 1 — Add your photo to the images/ folder.
     Place your file at: images/book-title-student-name.jpg
     (Use lowercase, hyphens instead of spaces, no special characters)

   STEP 2 — Replace the placeholder div with an <img> tag.
     Delete this entire block:
       <div class="gallery-img-placeholder" style="...">
         <svg>...</svg>
         <span>...</span>
       </div>

     Replace it with:
       <img
         src="images/book-title-student-name.jpg"
         alt="Book title by Student Name"
         style="width:100%; aspect-ratio:4/3; object-fit:cover; display:block;"
       >

   STEP 3 — Replace the ruled lines with real caption text.
     Delete this block:
       <div class="gallery-caption">
         <div class="gallery-caption-line"></div>
         <div class="gallery-caption-line"></div>
       </div>

     Replace it with:
       <div class="gallery-caption" style="padding:12px 16px 16px;">
         <p style="font-family:'Caveat',cursive; font-size:1.1rem;
                   font-weight:700; color:#2c1810; margin-bottom:4px;">
           Book Title Here
         </p>
         <p style="font-size:0.85rem; color:#7a5030;">
           Student Name · Spring 2025
         </p>
       </div>

   ================================================================ */


/* ================================================================
   ★ SECTION B — HOW TO ACTIVATE THE "APPLY TO BE A FELLOW" BUTTON
   ================================================================

   In index.html, find this block inside the #contact section:

     <a
       href="https://forms.google.com/your-form-link-here"
       target="_blank"
       class="btn btn-apply"
       style="display:inline-block;"
     >
       Apply to Be a Fellow
     </a>

   Replace the placeholder URL with your real Google Form link.

   To get your Google Form share link:
     1. Open your form at forms.google.com
     2. Click the "Send" button (top right)
     3. Click the link icon (chain icon)
     4. Copy the URL shown

   The finished line should look like:
     href="https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform"

   ================================================================ */


/* ================================================================
   ★ SECTION C — HOW TO UPDATE CONTACT INFORMATION
   ================================================================

   The professor email appears in THREE places in index.html:

     1. Inside .contact-info-card → <a href="mailto:professor@rhodes.edu">
     2. Inside .contact-info-card → the visible link text
     3. Inside <footer>           → <a href="mailto:professor@rhodes.edu">

   Search the file for "professor@rhodes.edu" (there are 3 matches)
   and replace all three with the real address.

   To update office hours, find this comment in index.html:
     <!-- Row: office hours -->
   And edit the <p> text below it.

   To update the office location, find:
     <!-- Row: office location -->
   And edit the Department, University, and city lines.

   ================================================================ */
