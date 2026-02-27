/* ============================================
   STREFA K200 - Application Logic
   ============================================ */

// ============================================
// APARTMENT DATA
// ============================================
const apartments = [
  // Building A
  { id: 'A.01', building: 'A', floor: 0, rooms: 3, area: 62.30, price: 560700, status: 'sold', card: 'assets/Zrzut%20ekranu%202026-02-26%20o%2012.29.53.png' },
  { id: 'A.02', building: 'A', floor: 0, rooms: 4, area: 68.15, price: 613350, status: 'reserved' },
  { id: 'A.03', building: 'A', floor: 0, rooms: 4, area: 85.20, price: 766800, status: 'available' },
  { id: 'A.04', building: 'A', floor: 0, rooms: 4, area: 85.50, price: 769500, status: 'sold' },
  { id: 'A.05', building: 'A', floor: 1, rooms: 3, area: 62.30, price: 572120, status: 'available' },
  { id: 'A.06', building: 'A', floor: 1, rooms: 4, area: 68.15, price: 625780, status: 'available' },
  { id: 'A.07', building: 'A', floor: 1, rooms: 4, area: 85.20, price: 784840, status: 'reserved' },
  { id: 'A.08', building: 'A', floor: 1, rooms: 4, area: 85.50, price: 787600, status: 'available' },
  { id: 'A.09', building: 'A', floor: 2, rooms: 3, area: 62.30, price: 583540, status: 'available' },
  { id: 'A.10', building: 'A', floor: 2, rooms: 4, area: 68.15, price: 638210, status: 'sold' },
  { id: 'A.11', building: 'A', floor: 2, rooms: 4, area: 85.20, price: 802880, status: 'available' },
  { id: 'A.12', building: 'A', floor: 2, rooms: 4, area: 85.50, price: 805700, status: 'available' },
  { id: 'A.13', building: 'A', floor: 3, rooms: 3, area: 62.30, price: 594960, status: 'reserved' },
  { id: 'A.14', building: 'A', floor: 3, rooms: 4, area: 68.15, price: 650640, status: 'available' },
  { id: 'A.15', building: 'A', floor: 3, rooms: 4, area: 85.20, price: 820920, status: 'available' },
  { id: 'A.16', building: 'A', floor: 3, rooms: 4, area: 85.50, price: 823800, status: 'sold' },
  { id: 'A.17', building: 'A', floor: 4, rooms: 3, area: 62.30, price: 606380, status: 'available' },
  { id: 'A.18', building: 'A', floor: 4, rooms: 4, area: 68.15, price: 663070, status: 'available' },
  { id: 'A.19', building: 'A', floor: 4, rooms: 4, area: 85.20, price: 838960, status: 'reserved' },
  { id: 'A.20', building: 'A', floor: 4, rooms: 4, area: 85.50, price: 841900, status: 'available' },

  // Building B
  { id: 'B.01', building: 'B', floor: 0, rooms: 3, area: 63.10, price: 567900, status: 'available' },
  { id: 'B.02', building: 'B', floor: 0, rooms: 4, area: 67.80, price: 610200, status: 'sold' },
  { id: 'B.03', building: 'B', floor: 0, rooms: 4, area: 84.50, price: 760500, status: 'available' },
  { id: 'B.04', building: 'B', floor: 0, rooms: 4, area: 86.10, price: 774900, status: 'available' },
  { id: 'B.05', building: 'B', floor: 1, rooms: 3, area: 63.10, price: 579240, status: 'reserved' },
  { id: 'B.06', building: 'B', floor: 1, rooms: 4, area: 67.80, price: 622560, status: 'available' },
  { id: 'B.07', building: 'B', floor: 1, rooms: 4, area: 84.50, price: 778100, status: 'available' },
  { id: 'B.08', building: 'B', floor: 1, rooms: 4, area: 86.10, price: 792120, status: 'sold' },
  { id: 'B.09', building: 'B', floor: 2, rooms: 3, area: 63.10, price: 590580, status: 'available' },
  { id: 'B.10', building: 'B', floor: 2, rooms: 4, area: 67.80, price: 634920, status: 'available' },
  { id: 'B.11', building: 'B', floor: 2, rooms: 4, area: 84.50, price: 795700, status: 'reserved' },
  { id: 'B.12', building: 'B', floor: 2, rooms: 4, area: 86.10, price: 809340, status: 'available' },
  { id: 'B.13', building: 'B', floor: 3, rooms: 3, area: 63.10, price: 601920, status: 'available' },
  { id: 'B.14', building: 'B', floor: 3, rooms: 4, area: 67.80, price: 647280, status: 'sold' },
  { id: 'B.15', building: 'B', floor: 3, rooms: 4, area: 84.50, price: 813300, status: 'available' },
  { id: 'B.16', building: 'B', floor: 3, rooms: 4, area: 86.10, price: 826560, status: 'available' },
  { id: 'B.17', building: 'B', floor: 4, rooms: 3, area: 63.10, price: 613260, status: 'available' },
  { id: 'B.18', building: 'B', floor: 4, rooms: 4, area: 67.80, price: 659640, status: 'reserved' },
  { id: 'B.19', building: 'B', floor: 4, rooms: 4, area: 84.50, price: 830900, status: 'available' },
  { id: 'B.20', building: 'B', floor: 4, rooms: 4, area: 86.10, price: 843780, status: 'available' },

  // Building C (Etap II)
  { id: 'C.01', building: 'C', floor: 0, rooms: 3, area: 64.20, price: 577800, status: 'available' },
  { id: 'C.02', building: 'C', floor: 0, rooms: 4, area: 69.40, price: 624600, status: 'available' },
  { id: 'C.03', building: 'C', floor: 0, rooms: 4, area: 83.80, price: 754200, status: 'available' },
  { id: 'C.04', building: 'C', floor: 0, rooms: 4, area: 85.90, price: 773100, status: 'available' },
  { id: 'C.05', building: 'C', floor: 1, rooms: 3, area: 64.20, price: 589560, status: 'available' },
  { id: 'C.06', building: 'C', floor: 1, rooms: 4, area: 69.40, price: 637280, status: 'available' },
  { id: 'C.07', building: 'C', floor: 1, rooms: 4, area: 83.80, price: 771960, status: 'available' },
  { id: 'C.08', building: 'C', floor: 1, rooms: 4, area: 85.90, price: 790280, status: 'available' },
  { id: 'C.09', building: 'C', floor: 2, rooms: 3, area: 64.20, price: 601320, status: 'available' },
  { id: 'C.10', building: 'C', floor: 2, rooms: 4, area: 69.40, price: 649960, status: 'available' },
  { id: 'C.11', building: 'C', floor: 2, rooms: 4, area: 83.80, price: 789720, status: 'available' },
  { id: 'C.12', building: 'C', floor: 2, rooms: 4, area: 85.90, price: 807460, status: 'available' },
  { id: 'C.13', building: 'C', floor: 3, rooms: 3, area: 64.20, price: 613080, status: 'available' },
  { id: 'C.14', building: 'C', floor: 3, rooms: 4, area: 69.40, price: 662640, status: 'available' },
  { id: 'C.15', building: 'C', floor: 3, rooms: 4, area: 83.80, price: 807480, status: 'available' },
  { id: 'C.16', building: 'C', floor: 3, rooms: 4, area: 85.90, price: 824640, status: 'available' },
  { id: 'C.17', building: 'C', floor: 4, rooms: 3, area: 64.20, price: 624840, status: 'available' },
  { id: 'C.18', building: 'C', floor: 4, rooms: 4, area: 69.40, price: 675320, status: 'available' },
  { id: 'C.19', building: 'C', floor: 4, rooms: 4, area: 83.80, price: 825240, status: 'available' },
  { id: 'C.20', building: 'C', floor: 4, rooms: 4, area: 85.90, price: 841820, status: 'available' },

  // Building D (Etap II)
  { id: 'D.01', building: 'D', floor: 0, rooms: 2, area: 45.60, price: 410400, status: 'available' },
  { id: 'D.02', building: 'D', floor: 0, rooms: 3, area: 62.50, price: 562500, status: 'available' },
  { id: 'D.03', building: 'D', floor: 0, rooms: 4, area: 84.70, price: 762300, status: 'available' },
  { id: 'D.04', building: 'D', floor: 0, rooms: 4, area: 85.30, price: 767700, status: 'available' },
  { id: 'D.05', building: 'D', floor: 1, rooms: 2, area: 45.60, price: 419520, status: 'available' },
  { id: 'D.06', building: 'D', floor: 1, rooms: 3, area: 62.50, price: 575000, status: 'available' },
  { id: 'D.07', building: 'D', floor: 1, rooms: 4, area: 84.70, price: 779240, status: 'available' },
  { id: 'D.08', building: 'D', floor: 1, rooms: 4, area: 85.30, price: 784760, status: 'available' },
  { id: 'D.09', building: 'D', floor: 2, rooms: 2, area: 45.60, price: 428640, status: 'available' },
  { id: 'D.10', building: 'D', floor: 2, rooms: 3, area: 62.50, price: 587500, status: 'available' },
  { id: 'D.11', building: 'D', floor: 2, rooms: 4, area: 84.70, price: 796180, status: 'available' },
  { id: 'D.12', building: 'D', floor: 2, rooms: 4, area: 85.30, price: 801820, status: 'available' },
  { id: 'D.13', building: 'D', floor: 3, rooms: 2, area: 45.60, price: 437760, status: 'available' },
  { id: 'D.14', building: 'D', floor: 3, rooms: 3, area: 62.50, price: 600000, status: 'available' },
  { id: 'D.15', building: 'D', floor: 3, rooms: 4, area: 84.70, price: 813120, status: 'available' },
  { id: 'D.16', building: 'D', floor: 3, rooms: 4, area: 85.30, price: 818880, status: 'available' },
  { id: 'D.17', building: 'D', floor: 4, rooms: 2, area: 45.60, price: 446880, status: 'available' },
  { id: 'D.18', building: 'D', floor: 4, rooms: 3, area: 62.50, price: 612500, status: 'available' },
  { id: 'D.19', building: 'D', floor: 4, rooms: 4, area: 84.70, price: 830060, status: 'available' },
  { id: 'D.20', building: 'D', floor: 4, rooms: 4, area: 85.30, price: 835940, status: 'available' },
];

// ============================================
// GALLERY DATA
// ============================================
const galleryImages = [
  { src: 'assets/images/5-render_4.jpg', label: 'Wizualizacja — Główna elewacja' },
  { src: 'assets/images/2-render.jpg', label: 'Wizualizacja — Widok zewnętrzny 1' },
  { src: 'assets/images/3-render_2.jpg', label: 'Wizualizacja — Widok zewnętrzny 2' },
  { src: 'assets/images/4-render_3.jpg', label: 'Wizualizacja — Widok na zieleń' },
  { src: 'assets/images/6-render_5.jpg', label: 'Wizualizacja — Balkony' },
  { src: 'assets/images/7-render 16.jpg', label: 'Wizualizacja — Dziedziniec' },
  { src: 'assets/images/8-render_9.jpg', label: 'Wizualizacja — Tarasy' },
  { src: 'assets/images/9-render_10.jpg', label: 'Wizualizacja — Detale architektoniczne' },
  { src: 'assets/images/10-render_11.jpg', label: 'Wnętrze — Salon z aneksem' },
  { src: 'assets/images/11-render_12.jpg', label: 'Wnętrze — Sypialnia' },
  { src: 'assets/images/12-render_13.jpg', label: 'Wnętrze — Sypialnia 2' },
  { src: 'assets/images/13-render_14.jpg', label: 'Wnętrze — Łazienka' },
  { src: 'assets/images/14-render_15.jpg', label: 'Wnętrze — Przestrzeń wspólna' },
];

// ============================================
// STATE
// ============================================
let filteredApartments = [...apartments];
let currentPage = 1;
const perPage = 10;
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
function formatPrice(num) {
  return num.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatPricePerM2(price, area) {
  return (price / area).toLocaleString('pl-PL', { style: 'currency', currency: 'PLN', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function getFloorLabel(floor) {
  if (floor === 0) return 'Parter';
  return floor + ' piętro';
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
    <tr>
      <td>${apt.id}</td>
      <td>Budynek ${apt.building}</td>
      <td>${getFloorLabel(apt.floor)}</td>
      <td>${apt.rooms}</td>
      <td>${apt.area.toFixed(2)} m²</td>
      <td>${formatPrice(apt.price)}</td>
      <td>${formatPricePerM2(apt.price, apt.area)}/m²</td>
      <td>${getStatusBadge(apt.status)}</td>
      <td>
        <button class="table-action-btn" title="Karta lokalu" onclick="${apt.card ? `window.open('${apt.card}', '_blank')` : `alert('Karta lokalu ${apt.id} — wkrótce dostępna jako PDF')`}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </button>
        <button class="table-action-btn" title="Zapytaj o lokal" onclick="askAboutApartment('${apt.id}')">
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
  const building = document.getElementById('filter-building').value;
  const rooms = document.getElementById('filter-rooms').value;
  const floor = document.getElementById('filter-floor').value;
  const status = document.getElementById('filter-status').value;

  filteredApartments = apartments.filter(apt => {
    if (building && apt.building !== building) return false;
    if (rooms && apt.rooms !== +rooms) return false;
    if (floor !== '' && apt.floor !== +floor) return false;
    if (status && apt.status !== status) return false;
    return true;
  });

  currentPage = 1;
  renderApartments();
  renderPriceReport();
}

function resetFilters() {
  document.getElementById('filter-building').value = '';
  document.getElementById('filter-rooms').value = '';
  document.getElementById('filter-floor').value = '';
  document.getElementById('filter-status').value = '';
  filteredApartments = [...apartments];
  currentPage = 1;
  renderApartments();
  renderPriceReport();
}

function sortTable(colIndex) {
  const keys = ['id', 'building', 'floor', 'rooms', 'area', 'price', 'pricePerM2'];

  if (sortColumn === colIndex) {
    sortDirection *= -1;
  } else {
    sortColumn = colIndex;
    sortDirection = 1;
  }

  filteredApartments.sort((a, b) => {
    let valA, valB;
    if (colIndex === 6) {
      valA = a.price / a.area;
      valB = b.price / b.area;
    } else {
      const key = keys[colIndex];
      valA = a[key];
      valB = b[key];
    }

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
// PRICE REPORT
// ============================================
function renderPriceReport() {
  const container = document.getElementById('priceReport');
  const available = filteredApartments.filter(a => a.status === 'available');

  if (available.length === 0) {
    container.innerHTML = '<p style="color: var(--color-text-secondary); grid-column: 1/-1; text-align: center;">Brak dostępnych lokali spełniających kryteria.</p>';
    return;
  }

  const prices = available.map(a => a.price);
  const pricesPerM2 = available.map(a => a.price / a.area);
  const areas = available.map(a => a.area);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPricePerM2 = pricesPerM2.reduce((s, v) => s + v, 0) / pricesPerM2.length;
  const minArea = Math.min(...areas);
  const maxArea = Math.max(...areas);

  container.innerHTML = `
    <div class="price-stat">
      <div class="price-stat-value">${formatPrice(minPrice)}</div>
      <div class="price-stat-label">Cena od</div>
    </div>
    <div class="price-stat">
      <div class="price-stat-value">${formatPrice(maxPrice)}</div>
      <div class="price-stat-label">Cena do</div>
    </div>
    <div class="price-stat">
      <div class="price-stat-value">${avgPricePerM2.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł</div>
      <div class="price-stat-label">Średnia cena / m²</div>
    </div>
    <div class="price-stat">
      <div class="price-stat-value">${available.length}</div>
      <div class="price-stat-label">Dostępnych lokali</div>
    </div>
    <div class="price-stat">
      <div class="price-stat-value">${minArea.toFixed(0)}–${maxArea.toFixed(0)} m²</div>
      <div class="price-stat-label">Zakres powierzchni</div>
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
    option.textContent = `${apt.id} — ${apt.rooms} pok., ${apt.area} m², ${formatPrice(apt.price)}`;
    select.appendChild(option);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;

  // Create success message
  const form = document.getElementById('contactForm');
  const btn = form.querySelector('.submit-btn');
  const originalText = btn.textContent;
  btn.textContent = '✓ Wysłano!';
  btn.style.background = 'var(--color-success)';

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    alert(`Dziękujemy, ${name}! Twoje zapytanie zostało wysłane. Skontaktujemy się wkrótce.`);
    form.reset();
  }, 1500);
}

// ============================================
// LOCATION TABS
// ============================================
function initLocationTabs() {
  const tabs = document.querySelectorAll('.location-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // In a real implementation, this would filter map markers
    });
  });
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
