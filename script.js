const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const toggle = document.querySelector(".nav-toggle");
const memberGrid = document.querySelector("#member-grid");
const memberResult = document.querySelector("#member-result");
const sectorFilter = document.querySelector("#sector-filter");
const interestFilter = document.querySelector("#interest-filter");
const memberSearch = document.querySelector("#member-search");
const members = window.MEMBER_DATA || [];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealObserver;

document.documentElement.classList.add("js");

const state = {
  sector: "all",
  interest: "all",
  query: ""
};

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);

const getInitials = (name = "") => {
  const compactName = String(name)
    .replace(/（.*?）|\(.*?\)/g, "")
    .replace(/\s+/g, "");
  return compactName.slice(0, 2) || "N";
};

const truncateBio = (bio = "") => {
  const cleanBio = String(bio).trim();
  return cleanBio.length > 50 ? `${cleanBio.slice(0, 49)}…` : cleanBio;
};

const getMemberTags = (member) => [member.sector, ...(member.interests || [])].filter(Boolean).slice(0, 3);

const getMemberLinks = (links = []) => {
  if (Array.isArray(links)) {
    return links.filter((link) => link && link.label && link.url);
  }

  return Object.entries(links)
    .filter(([, url]) => url)
    .map(([label, url]) => ({ label, url }));
};

const uniqueValues = (values) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "ja"));

const populateSelect = (select, values) => {
  if (!select) {
    return;
  }

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
};

const createMemberCard = (member, index = 0) => {
  const item = document.createElement("li");
  item.className = "member-item reveal";
  item.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 70}ms`);

  const card = document.createElement("article");
  card.className = member.preparing ? "member-card is-preparing" : "member-card";

  const avatar = document.createElement("div");
  avatar.className = "member-avatar";

  if (member.photo) {
    const img = document.createElement("img");
    img.src = member.photo;
    img.alt = `${member.name}さんの写真`;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      img.remove();
      avatar.classList.add("is-empty");
      avatar.textContent = getInitials(member.name);
    });
    avatar.appendChild(img);
  } else {
    avatar.classList.add("is-empty");
    avatar.textContent = getInitials(member.name);
  }

  const tags = getMemberTags(member)
    .map((tag) => `<span class="member-tag">${escapeHtml(tag)}</span>`)
    .join("");
  const linkItems = getMemberLinks(member.links)
    .map((link) => `
      <a class="member-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">
        ${escapeHtml(link.label)}
      </a>
    `)
    .join("");
  const affiliation = [member.affiliation, member.title].filter(Boolean).join(" / ");

  card.appendChild(avatar);
  card.insertAdjacentHTML("beforeend", `
    <div class="member-info">
      <h3>${escapeHtml(member.name)}</h3>
      ${affiliation ? `<p class="member-position">${escapeHtml(affiliation)}</p>` : ""}
      ${tags ? `<div class="member-tags">${tags}</div>` : ""}
      ${member.shortBio ? `<p class="member-comment">${escapeHtml(truncateBio(member.shortBio))}</p>` : ""}
      ${linkItems ? `<div class="member-links">${linkItems}</div>` : ""}
    </div>
  `);

  item.appendChild(card);
  return item;
};

const observeReveal = (elements) => {
  if (prefersReducedMotion) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    return;
  }

  elements.forEach((element) => revealObserver.observe(element));
};

const getFilteredMembers = () => {
  const query = state.query.trim().toLowerCase();

  return members.filter((member) => {
    const matchesSector = state.sector === "all" || member.sector === state.sector;
    const matchesInterest = state.interest === "all" || (member.interests || []).includes(state.interest);
    const searchableText = [
      member.name,
      member.affiliation,
      member.title,
      member.sector,
      member.shortBio,
      ...(member.interests || []),
      ...getMemberLinks(member.links).flatMap((link) => [link.label, link.url])
    ].join(" ").toLowerCase();
    const matchesQuery = !query || searchableText.includes(query);

    return matchesSector && matchesInterest && matchesQuery;
  });
};

const renderMemberList = () => {
  if (!memberGrid) {
    return;
  }

  const filteredMembers = getFilteredMembers();
  const fragment = document.createDocumentFragment();
  filteredMembers.forEach((member, index) => fragment.appendChild(createMemberCard(member, index)));

  if (!filteredMembers.length) {
    const item = document.createElement("li");
    item.className = "member-empty reveal";
    item.textContent = "条件に一致するメンバーは見つかりませんでした。";
    fragment.appendChild(item);
  }

  memberGrid.replaceChildren(fragment);

  if (memberResult) {
    memberResult.textContent = `${filteredMembers.length}名を表示中`;
    memberResult.classList.remove("is-updating");
  }

  observeReveal(Array.from(memberGrid.children));
};

const renderMembers = ({ animate = false } = {}) => {
  if (!animate || prefersReducedMotion) {
    renderMemberList();
    return;
  }

  memberGrid?.classList.add("is-updating");
  memberResult?.classList.add("is-updating");

  window.setTimeout(() => {
    renderMemberList();
    window.requestAnimationFrame(() => memberGrid?.classList.remove("is-updating"));
  }, 150);
};

const initMemberFilters = () => {
  const publicMembers = members.filter((member) => !member.preparing);
  populateSelect(sectorFilter, uniqueValues(publicMembers.map((member) => member.sector)));
  populateSelect(interestFilter, uniqueValues(publicMembers.flatMap((member) => member.interests || [])));

  sectorFilter?.addEventListener("change", (event) => {
    state.sector = event.target.value;
    renderMembers({ animate: true });
  });

  interestFilter?.addEventListener("change", (event) => {
    state.interest = event.target.value;
    renderMembers({ animate: true });
  });

  memberSearch?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderMembers({ animate: true });
  });
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const initReveal = () => {
  const revealTargets = [
    ...document.querySelectorAll(".hero-copy, .section, .section-heading, .member-item, .project-card, .news-item, .contact-panel")
  ];

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 60}ms`);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.12
  });

  observeReveal(revealTargets);
};

initMemberFilters();
renderMembers();
initReveal();
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
