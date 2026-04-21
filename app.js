/* ============================================
   STREFA K200 - Application Logic
   ============================================ */

// ============================================
// APARTMENT DATA (from lista.pdf + karty_lokali)
// ============================================
const apartments = [
  // Klatka A — PARTER
  { id: 1,  staircase: 'A', floor: 0, rooms: 3, area: 67.47, status: 'available', card: 'assets/karty_lokali/1.pdf' },
  { id: 2,  staircase: 'A', floor: 0, rooms: 1, area: 42.00, status: 'available', card: 'assets/karty_lokali/2.pdf' },
  { id: 3,  staircase: 'A', floor: 0, rooms: 2, area: 44.92, status: 'available', card: 'assets/karty_lokali/3.pdf' },
  { id: 4,  staircase: 'A', floor: 0, rooms: 2, area: 45.04, status: 'available', card: 'assets/karty_lokali/4.pdf' },
  { id: 5,  staircase: 'A', floor: 0, rooms: 2, area: 46.20, status: 'available', card: 'assets/karty_lokali/5.pdf' },
  { id: 6,  staircase: 'A', floor: 0, rooms: 1, area: 26.06, status: 'available', card: 'assets/karty_lokali/6.pdf' },

  // Klatka A — PIĘTRO 1
  { id: 7,  staircase: 'A', floor: 1, rooms: 3, area: 76.69, status: 'available', card: 'assets/karty_lokali/7.pdf' },
  { id: 8,  staircase: 'A', floor: 1, rooms: 2, area: 47.28, status: 'available', card: 'assets/karty_lokali/8.pdf' },
  { id: 9,  staircase: 'A', floor: 1, rooms: 2, area: 44.92, status: 'available', card: 'assets/karty_lokali/9.pdf' },
  { id: 10, staircase: 'A', floor: 1, rooms: 2, area: 45.04, status: 'available', card: 'assets/karty_lokali/10.pdf' },
  { id: 11, staircase: 'A', floor: 1, rooms: 2, area: 46.20, status: 'available', card: 'assets/karty_lokali/11.pdf' },
  { id: 12, staircase: 'A', floor: 1, rooms: 1, area: 26.06, status: 'available', card: 'assets/karty_lokali/12.pdf' },

  // Klatka A — PIĘTRO 2
  { id: 13, staircase: 'A', floor: 2, rooms: 3, area: 76.69, status: 'available', card: 'assets/karty_lokali/13.pdf' },
  { id: 14, staircase: 'A', floor: 2, rooms: 2, area: 47.28, status: 'available', card: 'assets/karty_lokali/14.pdf' },
  { id: 15, staircase: 'A', floor: 2, rooms: 2, area: 44.92, status: 'available', card: 'assets/karty_lokali/15.pdf' },
  { id: 16, staircase: 'A', floor: 2, rooms: 2, area: 45.04, status: 'available', card: 'assets/karty_lokali/16.pdf' },
  { id: 17, staircase: 'A', floor: 2, rooms: 2, area: 46.20, status: 'available', card: 'assets/karty_lokali/17.pdf' },
  { id: 18, staircase: 'A', floor: 2, rooms: 1, area: 26.06, status: 'available', card: 'assets/karty_lokali/18.pdf' },

  // Klatka A — PIĘTRO 3
  { id: 19, staircase: 'A', floor: 3, rooms: 2, area: 40.34, status: 'available', card: 'assets/karty_lokali/19.pdf' },
  { id: 20, staircase: 'A', floor: 3, rooms: 2, area: 39.12, status: 'available', card: 'assets/karty_lokali/20.pdf' },
  { id: 21, staircase: 'A', floor: 3, rooms: 2, area: 33.45, status: 'available', card: 'assets/karty_lokali/21.pdf' },
  { id: 22, staircase: 'A', floor: 3, rooms: 2, area: 33.21, status: 'available', card: 'assets/karty_lokali/22.pdf' },
  { id: 23, staircase: 'A', floor: 3, rooms: 4, area: 71.10, status: 'available', card: 'assets/karty_lokali/23.pdf' },

  // Klatka B — PARTER
  { id: 24, staircase: 'B', floor: 0, rooms: 2, area: 33.17, status: 'available', card: 'assets/karty_lokali/24.pdf' },
  { id: 25, staircase: 'B', floor: 0, rooms: 1, area: 31.54, status: 'available', card: 'assets/karty_lokali/25.pdf' },
  { id: 26, staircase: 'B', floor: 0, rooms: 1, area: 31.49, status: 'available', card: 'assets/karty_lokali/26.pdf' },
  { id: 27, staircase: 'B', floor: 0, rooms: 1, area: 31.49, status: 'available', card: 'assets/karty_lokali/27.pdf' },
  { id: 28, staircase: 'B', floor: 0, rooms: 3, area: 59.11, status: 'available', card: 'assets/karty_lokali/28.pdf' },

  // Klatka B — PIĘTRO 1
  { id: 29, staircase: 'B', floor: 1, rooms: 2, area: 33.17, status: 'available', card: 'assets/karty_lokali/29.pdf' },
  { id: 30, staircase: 'B', floor: 1, rooms: 1, area: 31.54, status: 'available', card: 'assets/karty_lokali/30.pdf' },
  { id: 31, staircase: 'B', floor: 1, rooms: 1, area: 31.49, status: 'available', card: 'assets/karty_lokali/31.pdf' },
  { id: 32, staircase: 'B', floor: 1, rooms: 1, area: 31.49, status: 'available', card: 'assets/karty_lokali/32.pdf' },
  { id: 33, staircase: 'B', floor: 1, rooms: 3, area: 64.64, status: 'available', card: 'assets/karty_lokali/33.pdf' },

  // Klatka B — PIĘTRO 2
  { id: 34, staircase: 'B', floor: 2, rooms: 2, area: 33.17, status: 'available', card: 'assets/karty_lokali/34.pdf' },
  { id: 35, staircase: 'B', floor: 2, rooms: 1, area: 31.54, status: 'available', card: 'assets/karty_lokali/35.pdf' },
  { id: 36, staircase: 'B', floor: 2, rooms: 1, area: 31.49, status: 'available', card: 'assets/karty_lokali/36.pdf' },
  { id: 37, staircase: 'B', floor: 2, rooms: 1, area: 31.49, status: 'available', card: 'assets/karty_lokali/37.pdf' },
  { id: 38, staircase: 'B', floor: 2, rooms: 3, area: 64.64, status: 'available', card: 'assets/karty_lokali/38.pdf' },

  // Klatka B — PIĘTRO 3
  { id: 39, staircase: 'B', floor: 3, rooms: 2, area: 39.81, status: 'available', card: 'assets/karty_lokali/39.pdf' },
  { id: 40, staircase: 'B', floor: 3, rooms: 1, area: 25.37, status: 'available', card: 'assets/karty_lokali/40.pdf' },
  { id: 41, staircase: 'B', floor: 3, rooms: 1, area: 25.37, status: 'available', card: 'assets/karty_lokali/41.pdf' },
  { id: 42, staircase: 'B', floor: 3, rooms: 1, area: 25.70, status: 'available', card: 'assets/karty_lokali/42.pdf' },
  { id: 43, staircase: 'B', floor: 3, rooms: 2, area: 48.33, status: 'available', card: 'assets/karty_lokali/43.pdf' },
];

// ============================================
// GALLERY DATA
// ============================================
const galleryImages = [
  { src: 'assets/images/5-render_4.webp', label: 'Wizualizacja — Elewacja frontowa' },
  { src: 'assets/images/2-render.webp', label: 'Wizualizacja — Widok zewnętrzny' },
  { src: 'assets/images/3-render_2.webp', label: 'Wizualizacja — Perspektywa uliczna' },
  { src: 'assets/images/4-render_3.webp', label: 'Wizualizacja — Otoczenie zieleni' },
  { src: 'assets/images/6-render_5.webp', label: 'Wizualizacja — Balkony' },
  { src: 'assets/images/7-render 16.webp', label: 'Wizualizacja — Dziedziniec' },
  { src: 'assets/images/8-render_9.webp', label: 'Wizualizacja — Tarasy' },
  { src: 'assets/images/9-render_10.webp', label: 'Wizualizacja — Detale elewacji' },
  { src: 'assets/images/10-render_11.webp', label: 'Wizualizacja — Widok z ulicy' },
  { src: 'assets/images/11-render_12.webp', label: 'Wizualizacja — Narożnik budynku' },
  { src: 'assets/images/12-render_13.webp', label: 'Wizualizacja — Panorama' },
  { src: 'assets/images/13-render_14.webp', label: 'Wizualizacja — Ujęcie boczne' },
  { src: 'assets/images/14-render_15.webp', label: 'Wizualizacja — Wieczór' },
  { src: 'assets/K200_pow_wsp/Korytarz%20z%20muralem%20%C5%81odzi.webp', label: 'Przestrzeń wspólna — Korytarz' },
  { src: 'assets/K200_pow_wsp/ChatGPT%20Image%2027%20lut%202026,%2011_52_09.webp', label: 'Przestrzeń wspólna — Wnętrze' },
  { src: 'assets/K200_pow_wsp/ChatGPT%20Image%202%20mar%202026,%2008_14_32.webp', label: 'Przestrzeń wspólna — Lobby' },
  { src: 'assets/K200_pow_wsp/ChatGPT%20Image%202%20mar%202026,%2008_16_13.webp', label: 'Przestrzeń wspólna — Detal' },
  { src: 'assets/K200_pow_wsp/ChatGPT%20Image%203%20mar%202026,%2008_50_07.webp', label: 'Przestrzeń wspólna — Wypoczynek' },
  { src: 'assets/K200_pow_wsp/ChatGPT%20Image%203%20mar%202026,%2008_50_17.webp', label: 'Przestrzeń wspólna — Strefa relaksu' }
];

// Floor plan images (split from r1.pdf and r2.pdf)
const floorPlanImages = {
  0: 'assets/rzutykondygnacjiwsvg/parter.svg',
  1: 'assets/rzutykondygnacjiwsvg/pietro1.svg',
  2: 'assets/rzutykondygnacjiwsvg/pietro2.svg',
  3: 'assets/rzutykondygnacjiwsvg/pietro3.svg'
};

const floorLabels = {
  0: 'Parter',
  1: 'Piętro 1',
  2: 'Piętro 2',
  3: 'Piętro 3'
};

// ============================================
// STATE
// ============================================
let filteredApartments = [...apartments];
let currentPage = 1;
const perPage = 12;
let sortColumn = -1;
let sortDirection = 1;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initCounters();
  renderApartments();
  renderPriceReport();
  renderGallery();
  populateContactApartments();
  initLocationTabs();
  initCookieBar();
  initInteractiveMap();
});

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-to-top button
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 600) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });
}

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 25);
}

// ============================================
// APARTMENT TABLE
// ============================================
function getFloorLabel(floor) {
  return floorLabels[floor] || `Piętro ${floor}`;
}

function getStatusBadge(status) {
  const map = {
    available: { label: 'Wolne', class: 'available' },
    reserved: { label: 'Zarezerwowane', class: 'reserved' },
    sold: { label: 'Sprzedane', class: 'sold' }
  };
  const s = map[status];
  return `<span class="status-badge ${s.class}">${s.label}</span>`;
}

function renderApartments() {
  const body = document.getElementById('apartmentBody');
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const pageData = filteredApartments.slice(start, end);

  body.innerHTML = pageData.map(apt => `
    <tr class="${apt.status === 'sold' ? 'row-sold' : ''}">
      <td>${apt.id}</td>
      <td>${getFloorLabel(apt.floor)}</td>
      <td>${apt.rooms}</td>
      <td>${apt.area.toFixed(2)} m²</td>
      <td>—</td>
      <td>—</td>
      <td>${getStatusBadge(apt.status)}</td>
      <td>
        <button class="table-action-btn" title="Karta lokalu" onclick="${apt.card ? `openApartmentCard(${apt.id})` : `alert('Karta lokalu ${apt.id} — wkrótce dostępna')`}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </button>
        <button class="table-action-btn" title="Zapytaj o lokal" onclick="askAboutApartment(${apt.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </button>
      </td>
    </tr>
  `).join('');

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(filteredApartments.length / perPage);
  const container = document.getElementById('tablePagination');

  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = '';
  if (currentPage > 1) {
    html += `<button class="page-btn" onclick="goToPage(${currentPage - 1})">← Poprzednia</button>`;
  }
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  if (currentPage < totalPages) {
    html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})">Następna →</button>`;
  }
  container.innerHTML = html;
}

function goToPage(page) {
  currentPage = page;
  renderApartments();
}

function filterApartments() {
  const rooms = document.getElementById('filter-rooms').value;
  const floor = document.getElementById('filter-floor').value;
  const status = document.getElementById('filter-status').value;

  filteredApartments = apartments.filter(apt => {
    if (rooms && apt.rooms !== +rooms) return false;
    if (floor !== '' && floor && apt.floor !== +floor) return false;
    if (status && apt.status !== status) return false;
    return true;
  });

  currentPage = 1;
  renderApartments();
  renderPriceReport();
}

function resetFilters() {
  document.getElementById('filter-rooms').value = '';
  document.getElementById('filter-floor').value = '';
  document.getElementById('filter-status').value = '';
  filteredApartments = [...apartments];
  currentPage = 1;
  renderApartments();
  renderPriceReport();
}

function sortTable(colIndex) {
  // Columns: id(0), floor(1), rooms(2), area(3), price(4), pricePerM2(5)
  const keys = ['id', 'floor', 'rooms', 'area'];

  if (sortColumn === colIndex) {
    sortDirection *= -1;
  } else {
    sortColumn = colIndex;
    sortDirection = 1;
  }

  filteredApartments.sort((a, b) => {
    const key = keys[colIndex];
    if (!key) return 0;
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === 'string') {
      return valA.localeCompare(valB) * sortDirection;
    }
    return (valA - valB) * sortDirection;
  });

  // Update header styling
  document.querySelectorAll('.apartment-table thead th').forEach((th, i) => {
    th.classList.toggle('sorted', i === colIndex);
  });

  currentPage = 1;
  renderApartments();
}

function scrollToApartments() {
  // Apply hero search filters
  const rooms = document.getElementById('search-rooms').value;
  const areaMin = document.getElementById('search-area-min').value;
  const areaMax = document.getElementById('search-area-max').value;
  const floor = document.getElementById('search-floor').value;

  filteredApartments = apartments.filter(apt => {
    if (rooms && apt.rooms !== +rooms) return false;
    if (areaMin && apt.area < +areaMin) return false;
    if (areaMax && apt.area > +areaMax) return false;
    if (floor !== '' && floor && apt.floor !== +floor) return false;
    return true;
  });

  currentPage = 1;
  renderApartments();
  renderPriceReport();

  document.getElementById('znajdz-mieszkanie').scrollIntoView({ behavior: 'smooth' });
}

function askAboutApartment(id) {
  const select = document.getElementById('contact-apartment');
  select.value = id;
  document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// APARTMENT CARD VIEWER
// ============================================
function openApartmentCard(id) {
  const apt = apartments.find(a => a.id === id);
  if (!apt || !apt.card) {
    alert(`Karta lokalu ${id} — wkrótce dostępna`);
    return;
  }

  const modal = document.getElementById('apartmentCardModal');
  const iframe = document.getElementById('apartmentCardFrame');
  const title = document.getElementById('apartmentCardTitle');

  title.textContent = `Lokal ${apt.id} — ${getFloorLabel(apt.floor)}, ${apt.rooms} pok., ${apt.area.toFixed(2)} m²`;
  iframe.src = apt.card;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeApartmentCard() {
  const modal = document.getElementById('apartmentCardModal');
  const iframe = document.getElementById('apartmentCardFrame');
  iframe.src = '';
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// PRICE REPORT
// ============================================
function renderPriceReport() {
  const container = document.getElementById('priceReport');
  const available = filteredApartments.filter(a => a.status === 'available');

  if (available.length === 0) {
    container.innerHTML = '<p style="color: var(--color-text-secondary); grid-column: 1/-1; text-align: center;">Brak dostępnych lokali spełniających kryteria.</p>';
    return;
  }

  const areas = available.map(a => a.area);
  const minArea = Math.min(...areas);
  const maxArea = Math.max(...areas);
  const rooms = [...new Set(available.map(a => a.rooms))].sort();

  container.innerHTML = `
    <div class="price-stat">
      <div class="price-stat-value">${available.length}</div>
      <div class="price-stat-label">Dostępnych lokali</div>
    </div>
    <div class="price-stat">
      <div class="price-stat-value">${minArea.toFixed(0)}–${maxArea.toFixed(0)} m²</div>
      <div class="price-stat-label">Zakres powierzchni</div>
    </div>
    <div class="price-stat">
      <div class="price-stat-value">${rooms.join(', ')}</div>
      <div class="price-stat-label">Liczba pokoi</div>
    </div>
    <div class="price-stat">
      <div class="price-stat-value">4</div>
      <div class="price-stat-label">Piętra</div>
    </div>
  `;
}

// ============================================
// GALLERY
// ============================================
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = galleryImages.map((img, i) => `
    <div class="gallery-item" onclick="openLightbox('${img.src}')">
      <img src="${img.src}" alt="${img.label}" loading="lazy">
      <span class="gallery-label">${img.label}</span>
    </div>
  `).join('');
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeApartmentCard();
    // Also close any open modals
    document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }
});

// ============================================
// CONTACT FORM
// ============================================
function populateContactApartments() {
  const select = document.getElementById('contact-apartment');
  const available = apartments.filter(a => a.status === 'available');
  available.forEach(apt => {
    const option = document.createElement('option');
    option.value = apt.id;
    option.textContent = `Lokal ${apt.id} — ${apt.rooms} pok., ${apt.area} m²`;
    select.appendChild(option);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = document.getElementById('contactForm');
  const btn = form.querySelector('.submit-btn');
  const originalText = btn.textContent;
  
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const phone = document.getElementById('contact-phone').value;
  const aptSelect = document.getElementById('contact-apartment');
  const apartment = aptSelect.options[aptSelect.selectedIndex].text;
  const message = document.getElementById('contact-message').value;

  btn.textContent = 'Wysyłanie...';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  const FORMSUBMIT_EMAIL = "biuro@strefa-k200.pl";

  fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          apartment: apartment,
          message: message,
          _subject: "Nowe zapytanie z formularza kontaktowego (" + name + ")",
          _template: "table"
      })
  })
  .then(async (response) => {
      let json = await response.json();
      if (response.status == 200 && json.success === "true") {
          btn.textContent = '✓ Wysłano!';
          btn.style.background = 'var(--color-success)';
          btn.style.opacity = '1';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
            alert(`Dziękujemy, ${name}! Twoje zapytanie zostało wysłane. Skontaktujemy się wkrótce.`);
          }, 1500);
      } else {
          console.log(response);
          throw new Error("API responded with " + response.status);
      }
  })
  .catch(error => {
      console.log(error);
      btn.textContent = '❌ Błąd. Zadzwoń do nas, proszę.';
      btn.style.background = 'red';
      setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.opacity = '1';
          btn.disabled = false;
      }, 3500);
  });
}

// ============================================
// LOCATION TABS
// ============================================
function initLocationTabs() {
  const tabs = document.querySelectorAll('.location-tab');
  const iframe = document.querySelector('.location-map iframe');

  const mapQueries = {
    all: 'Jana Kilińskiego 200, Łódź',
    education: 'Szkoły uczelnie w pobliżu Jana Kilińskiego 200, Łódź',
    nature: 'Parki w pobliżu Jana Kilińskiego 200, Łódź',
    sport: 'Sport siłownie w pobliżu Jana Kilińskiego 200, Łódź',
    shopping: 'Sklepy supermarkety w pobliżu Jana Kilińskiego 200, Łódź',
    food: 'Restauracje gastronomia w pobliżu Jana Kilińskiego 200, Łódź',
    health: 'Przychodnie szpitale apteki w pobliżu Jana Kilińskiego 200, Łódź',
    transport: 'Przystanki komunikacji miejskiej w pobliżu Jana Kilińskiego 200, Łódź'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');
      const searchQuery = mapQueries[category] || mapQueries.all;

      // Update iframe source
      if (iframe) {
        iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
      }
    });
  });
}

// ============================================
// INTERACTIVE MAP / APARTMENT FINDER
// ============================================
function initInteractiveMap() {
  const buildingView = document.getElementById('building-view');
  const floorView = document.getElementById('floor-view');
  const backBtn = document.getElementById('btn-back-to-building');
  const finderTitle = document.getElementById('finder-title');

  if (!buildingView) return;

  // Building view: click on floor polygon (supports mobile touch)
  buildingView.querySelectorAll('.finder-poly[data-floor]').forEach(poly => {
    const handleSelect = (e) => {
      if (e.type === 'touchstart') e.preventDefault();
      const floor = parseInt(poly.getAttribute('data-floor'));
      showFloorView(floor);
    };
    poly.addEventListener('click', handleSelect);
    poly.addEventListener('touchstart', handleSelect, { passive: false });
  });

  // Back button
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      showBuildingView();
    });
  }
}

function showBuildingView() {
  const buildingView = document.getElementById('building-view');
  const floorView = document.getElementById('floor-view');
  const backBtn = document.getElementById('btn-back-to-building');
  const finderTitle = document.getElementById('finder-title');

  buildingView.style.display = '';
  floorView.style.display = 'none';
  backBtn.style.display = 'none';
  finderTitle.textContent = 'Wybierz piętro na budynku';
}

function showFloorView(floor) {
  const buildingView = document.getElementById('building-view');
  const floorView = document.getElementById('floor-view');
  const backBtn = document.getElementById('btn-back-to-building');
  const finderTitle = document.getElementById('finder-title');

  buildingView.style.display = 'none';
  floorView.style.display = '';
  backBtn.style.display = '';
  finderTitle.textContent = `Rzut — ${floorLabels[floor]}`;

  // Set up the floor plan dynamically to allow SVG vector manipulation (thinner lines on mobile)
  const floorPlanWrapper = floorView.querySelector('.floor-plan-wrapper');
  if (floorPlanWrapper) {
    floorPlanWrapper.innerHTML = '<div style="text-align: center; padding: 2rem; color: #999;">Trwa ładowanie rzutu...</div>';
    fetch(floorPlanImages[floor])
      .then(res => res.text())
      .then(svgText => {
        // Strip non-scaling-stroke so CAD outline lines aren't 1px thick relative to tiny screen
        const optimizedSvg = svgText
          .replace(/vector-effect="non-scaling-stroke"/g, 'stroke-width="8"')
          .replace(/<title>.*?<\/title>/ig, '')
          .replace(/<desc>.*?<\/desc>/ig, '')
          .replace(/<svg\s/i, '<svg style="width: 100%; height: auto; display: block;" ');
        floorPlanWrapper.innerHTML = optimizedSvg;
      })
      .catch(err => {
        console.error('Błąd pobierania rzutu SVG', err);
      });
  }

  // Render the apartment list for this floor
  renderFloorApartmentList(floor);
}

function renderFloorApartmentList(floor) {
  const container = document.getElementById('floor-apartment-list');
  if (!container) return;

  const floorApartments = apartments.filter(a => a.floor === floor);

  container.innerHTML = floorApartments.map(apt => {
    const statusClass = apt.status === 'available' ? 'apt-available' : apt.status === 'reserved' ? 'apt-reserved' : 'apt-sold';
    const statusLabel = apt.status === 'available' ? 'Wolne' : apt.status === 'reserved' ? 'Zarezerwowane' : 'Sprzedane';

    return `
      <div class="floor-apt-card ${statusClass}" onclick="${apt.card ? `openApartmentCard(${apt.id})` : `askAboutApartment(${apt.id})`}">
        <div class="floor-apt-header">
          <span class="floor-apt-id">Lokal ${apt.id}</span>
          <span class="floor-apt-status ${statusClass}">${statusLabel}</span>
        </div>
        <div class="floor-apt-details">
          <div class="floor-apt-detail">
            <span class="floor-apt-detail-label">Pokoje</span>
            <span class="floor-apt-detail-value">${apt.rooms}</span>
          </div>
          <div class="floor-apt-detail">
            <span class="floor-apt-detail-label">Pow.</span>
            <span class="floor-apt-detail-value">${apt.area.toFixed(2)} m²</span>
          </div>
          <div class="floor-apt-detail">
            <span class="floor-apt-detail-label">Klatka</span>
            <span class="floor-apt-detail-value">${apt.staircase}</span>
          </div>
        </div>
        <div class="floor-apt-actions">
          ${apt.card ? `<button class="floor-apt-btn floor-apt-btn-card" onclick="event.stopPropagation(); openApartmentCard(${apt.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Karta lokalu
          </button>` : ''}
          <button class="floor-apt-btn floor-apt-btn-ask" onclick="event.stopPropagation(); askAboutApartment(${apt.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Zapytaj
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// MODALS
// ============================================
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// ============================================
// COOKIE CONSENT
// ============================================
function initCookieBar() {
  const cookieBar = document.getElementById('cookieBar');
  const accepted = localStorage.getItem('cookies_accepted');
  if (!accepted) {
    setTimeout(() => {
      cookieBar.classList.add('active');
    }, 1500);
  }
}

function acceptCookies() {
  localStorage.setItem('cookies_accepted', 'true');
  document.getElementById('cookieBar').classList.remove('active');
}
