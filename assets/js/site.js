// Shared nav + footer for every page.
// Each page provides:
//   <body data-page="home|projects|publications|experience|contact" data-root="">
//   <header id="site-header"></header> ... <footer id="site-footer"></footer>
// data-root is the relative path back to the site root ("" at the root, "../" inside projects/).

const SITE = {
  name: "Joseph Tran",
  email: "hello@jotran.com",
  linkedin: "https://www.linkedin.com/in/jotrann",
  github: "https://github.com/jztrxn",
  cv: "assets/Joseph_Tran_CV.pdf"
};

(function () {
  const root = document.body.dataset.root || "";
  const current = document.body.dataset.page || "";

  const links = [
    { id: "about", label: "About", href: "index.html#about" },
    { id: "projects", label: "Projects", href: "all_projects.html" },
    { id: "publications", label: "Publications", href: "publications.html" },
    { id: "experience", label: "Experience", href: "timeline.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  const linkClass = (id) =>
    "font-headline font-bold tracking-tight text-sm uppercase transition-colors duration-100 " +
    (id === current
      ? "text-primary border-b-2 border-primary pb-1"
      : "text-on-surface/70 hover:text-primary");

  const navLinks = links
    .map((l) => `<a class="${linkClass(l.id)}" href="${root}${l.href}">${l.label}</a>`)
    .join("");

  const mobileLinks = links
    .map((l) => `<a class="block py-3 font-headline font-bold text-sm uppercase tracking-tight ${l.id === current ? "text-primary" : "text-on-surface/80"}" href="${root}${l.href}">${l.label}</a>`)
    .join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <nav class="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur">
        <div class="flex justify-between items-center px-6 md:px-8 py-6 w-full max-w-[1440px] mx-auto">
          <a class="text-lg font-black tracking-tighter text-on-surface font-headline uppercase" href="${root}index.html">${SITE.name}</a>
          <div class="hidden md:flex items-center space-x-12">
            <div class="flex space-x-8">${navLinks}</div>
            <a href="${root}${SITE.cv}" target="_blank" rel="noopener" class="bg-primary text-on-primary px-6 py-2.5 font-headline font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity">Download CV</a>
          </div>
          <button id="menu-toggle" class="md:hidden text-on-surface" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
        <div id="mobile-menu" class="hidden md:hidden px-6 pb-6 border-t border-outline-variant/40">
          ${mobileLinks}
          <a href="${root}${SITE.cv}" target="_blank" rel="noopener" class="inline-block mt-3 bg-primary text-on-primary px-6 py-2.5 font-headline font-bold text-xs uppercase tracking-widest">Download CV</a>
        </div>
      </nav>`;

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("hidden") === false;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("span").textContent = open ? "close" : "menu";
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector("span").textContent = "menu";
      })
    );
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    const social = "font-label text-xs font-medium tracking-widest uppercase text-on-surface/50 hover:text-primary underline decoration-2 underline-offset-4 transition-colors";
    footer.innerHTML = `
      <div class="w-full py-16 px-6 md:px-8 bg-surface-container-low">
        <div class="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          <div class="flex flex-col items-center md:items-start">
            <h3 class="font-headline font-bold text-4xl mb-6 uppercase tracking-tighter">Get in touch</h3>
            <a class="text-primary text-xl md:text-2xl font-body font-semibold hover:opacity-70 transition-opacity" href="mailto:${SITE.email}">${SITE.email}</a>
          </div>
          <div class="flex flex-col items-center md:items-end gap-6">
            <div class="flex gap-8">
              <a class="${social}" href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
              <a class="${social}" href="${SITE.github}" target="_blank" rel="noopener">GitHub</a>
              <a class="${social}" href="mailto:${SITE.email}">Email</a>
            </div>
            <p class="font-label text-[10px] font-medium tracking-widest uppercase text-on-surface/50">
              &copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>`;
  }
  // ---- "Upcoming" badges for presentations ----
  // Any entry whose details line ends with a date like "October 27, 2026" gets an
  // "Upcoming" badge through that day, and loses it automatically the day after.
  // Runs in each visitor's browser, so nothing needs to be republished.
  const MONTHS = ["january","february","march","april","may","june","july",
                  "august","september","october","november","december"];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  document.querySelectorAll(".flex-grow > p.font-mono").forEach((details) => {
    const m = details.textContent.match(/([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})\s*$/);
    if (!m) return;
    const month = MONTHS.indexOf(m[1].toLowerCase());
    if (month < 0) return;
    const eventDay = new Date(Number(m[3]), month, Number(m[2]));
    const title = details.parentElement.querySelector("h3");
    if (!title || eventDay < today) return;
    const badge = document.createElement("span");
    badge.className = "align-middle ml-2 px-2 py-0.5 bg-primary text-on-primary font-mono text-[10px] uppercase tracking-widest";
    badge.textContent = "Upcoming";
    title.appendChild(badge);
  });
})();
