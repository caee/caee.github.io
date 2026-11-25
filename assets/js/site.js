/* Renders the site from window.SITE (content.js).
   You normally don't need to touch this file — edit content.js instead.

   URLs: #bio, #education, #education/1, #experience/2, #skills/1, #projects, #projects/<id> */
(function () {
  "use strict";
  var S = window.SITE;
  var main = document.getElementById("main");

  var LABELS = { bio: "Bio", education: "Education", experience: "Experience", skills: "Skills", projects: "Projects" };

  var ICONS = {
    pdf: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><path d="M12 4h17l9 9v30a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M29 4v9h9"/><path d="M17.5 36.5c3-4.5 6-11 6.5-16 .3-2.5-2-2.5-2 0 0 5 5 11.5 10 13.5 2 .8 3-1.3 1-1.7-4.5-1-10.5.5-15.5 4.2z" stroke-width="1.8"/></svg>',
    linkedin: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="2" y="2" width="44" height="44" fill="none" stroke="currentColor" stroke-width="3"/><path fill="currentColor" d="M11 19h5.5v17H11zM13.7 10.5a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4zM20 19h5.3v2.4h.1c.7-1.4 2.5-2.8 5.2-2.8 5.6 0 6.6 3.7 6.6 8.4V36h-5.5v-8c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.3V36H20z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 12l9-8v5h11v6H11v5z"/></svg>',
    right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12l-9 8v-5H2V9h11V4z"/></svg>'
  };

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function paras(list) { return (list || []).map(function (p) { return "<p>" + p + "</p>"; }).join(""); }
  function bullets(list) {
    return list && list.length ? "<ul>" + list.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>" : "";
  }
  function docLinks(list) {
    if (!list || !list.length) return "";
    return '<div class="docs">' + list.map(function (d) {
      return '<a class="doc-link" href="' + esc(d.href) + '" target="_blank" rel="noopener">' + ICONS.pdf +
        "<span><strong>" + esc(d.label) + "</strong></span></a>";
    }).join("") + "</div>";
  }
  function head(title, extra) {
    return '<div class="section-head"><h2>' + title + "</h2>" + (extra || "") + "</div>";
  }

  /* ---------- static chrome ---------- */
  function renderChrome() {
    document.title = S.name;
    document.getElementById("name").textContent = S.name;
    document.getElementById("title").textContent = S.title;
    var photo = document.getElementById("photo");
    photo.src = S.photo;
    photo.alt = "Photo of " + S.name;

    document.getElementById("nav").innerHTML = S.sections.map(function (id) {
      return '<a href="#' + id + '" data-section="' + id + '">' + (LABELS[id] || id) + "</a>";
    }).join("");

    var c = S.contact || {};
    var foot = "";
    if (S.resumePdf) {
      foot += '<a class="foot-item" href="' + esc(S.resumePdf) + '" target="_blank" rel="noopener">' +
        "<span><strong>PDF resume.</strong>Download my<br>resume here!</span>" + ICONS.pdf + "</a>";
    }
    var socials = "";
    if (c.linkedin) socials += '<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ICONS.linkedin + "</a>";
    if (c.github) socials += '<a href="' + esc(c.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + ICONS.github + "</a>";
    var lines = "";
    if (c.phone) lines += '<a href="tel:' + esc(c.phone.replace(/\s/g, "")) + '">' + esc(c.phone) + "</a><br>";
    if (c.email) lines += '<a href="mailto:' + esc(c.email) + '">' + esc(c.email).replace("@", "<wbr>@") + "</a>";
    foot += '<div class="foot-item"><span class="contact-lines"><strong>Contact me.</strong>' + lines +
      '</span><span class="socials">' + socials + "</span></div>";
    document.getElementById("sidebar-foot").innerHTML = foot;
  }

  /* ---------- views ---------- */
  function viewBio() {
    var b = S.bio;
    return head("Bio", b.tagline ? '<p class="tagline">' + b.tagline + "</p>" : "") +
      '<div class="prose">' + paras(b.text) + "</div>";
  }

  // Education & Experience share the carousel + side-timeline layout.
  function viewTimeline(id, title, idx) {
    var items = S[id];
    idx = Math.max(0, Math.min(items.length - 1, idx || 0));
    var it = items[idx];
    var nav = function (i) { return "#" + id + "/" + i; };

    var tl = '<ol class="tl">' + items.map(function (e, i) {
      return '<li><button data-go="' + nav(i) + '"' + (i === idx ? ' aria-current="true"' : "") + ">" +
        '<span class="when">' + esc(e.period) + '</span><span class="role">' + esc(e.role) +
        '</span><span class="org">' + esc(e.org) + "</span></button></li>";
    }).join("") + "</ol>";

    var entry =
      '<div class="carousel">' +
        '<button class="arrow" data-go="' + nav(idx - 1) + '" aria-label="Previous"' + (idx === 0 ? " disabled" : "") + ">" + ICONS.left + "</button>" +
        '<article class="entry fade-in">' +
          (it.logo ? '<div class="entry-logo"><img src="' + esc(it.logo) + '" alt="' + esc(it.org) + ' logo"></div>' : "") +
          '<div class="entry-meta"><span class="when">' + esc(it.period) + '</span><span class="role">' + esc(it.role) +
          '</span><span class="org">' + esc(it.place || it.org) + "</span>" +
          (it.extra ? '<span class="extra">' + esc(it.extra) + "</span>" : "") + "</div>" +
          '<div class="prose">' + paras(it.text) + bullets(it.bullets) + "</div>" +
          docLinks(it.documents) +
        "</article>" +
        '<button class="arrow" data-go="' + nav(idx + 1) + '" aria-label="Next"' + (idx === items.length - 1 ? " disabled" : "") + ">" + ICONS.right + "</button>" +
      "</div>";

    return head(title) + '<div class="timeline-view">' + entry + tl + "</div>";
  }

  function viewSkills(idx) {
    var groups = S.skills;
    idx = Math.max(0, Math.min(groups.length - 1, idx || 0));
    var g = groups[idx];
    var tabs = '<div class="tabs" role="tablist">' + groups.map(function (t, i) {
      return '<button role="tab" data-go="#skills/' + i + '" aria-selected="' + (i === idx) + '">' + esc(t.name) + "</button>";
    }).join("") + "</div>";

    var body;
    if (g.tags) {
      body = '<div class="soft fade-in"><ul class="tag-grid">' + g.tags.map(function (t) {
        return "<li" + (t.highlight ? ' class="hi"' : "") + ">" + esc(t.name) + "</li>";
      }).join("") + '</ul><div class="prose">' + paras(g.note) + "</div></div>";
    } else {
      body = '<ul class="skill-list fade-in">' + g.items.map(function (s) {
        var sq = "";
        for (var i = 1; i <= 5; i++) sq += "<i" + (i <= s.level ? ' class="on"' : "") + "></i>";
        return '<li class="skill"><span>' + esc(s.name) + '</span><span class="level" role="img" aria-label="' +
          s.level + ' out of 5">' + sq + "</span></li>";
      }).join("") + "</ul>";
    }
    return head("Skills", tabs) + body;
  }

  function viewProjects() {
    return head("Projects", '<p class="tagline">Click an image to expand</p>') +
      '<div class="grid">' + S.projects.map(function (p) {
        return '<a class="card" href="#projects/' + esc(p.id) + '"><img src="' + esc(p.thumb) + '" alt="" loading="lazy">' +
          '<span class="overlay">' + esc(p.title) + "<span>" + esc(p.year) + "</span></span></a>";
      }).join("") + "</div>";
  }

  function viewProject(id) {
    var p = S.projects.filter(function (x) { return x.id === id; })[0];
    if (!p) return viewProjects();
    var media = (p.media || []).map(function (m) {
      var inner = m.youtube
        ? '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(m.youtube) +
          '" title="' + esc(p.title) + ' video" allow="encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>'
        : '<img src="' + esc(m.image) + '" alt="' + esc((m.caption || p.title).replace(/<[^>]+>/g, "")) + '" loading="lazy" data-zoom>';
      var cap = (m.caption || "") + (m.youtube ? ' <a href="https://www.youtube.com/watch?v=' + esc(m.youtube) +
        '" target="_blank" rel="noopener">Watch on YouTube ↗</a>' : "");
      return "<figure>" + inner + (cap ? "<figcaption>" + cap + "</figcaption>" : "") + "</figure>";
    }).join("");
    var links = (p.links || []).map(function (l) {
      return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>";
    }).join("");

    return '<a class="back" href="#projects">← Back</a>' +
      '<article class="project fade-in">' +
      head(esc(p.title), '<span class="year">' + esc(p.year) + "</span>") +
      '<div class="prose">' + paras(p.text) + bullets(p.bullets) + "</div>" +
      (links ? '<div class="ext-links">' + links + "</div>" : "") +
      (media ? '<div class="media">' + media + "</div>" : "") +
      docLinks(p.documents) +
      "</article>";
  }

  /* ---------- router ---------- */
  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/");
    var section = S.sections.indexOf(parts[0]) >= 0 ? parts[0] : S.sections[0];
    var arg = parts[1];
    var html;
    switch (section) {
      case "bio": html = viewBio(); break;
      case "education": html = viewTimeline("education", "Education", +arg || 0); break;
      case "experience": html = viewTimeline("experience", "Experience", +arg || 0); break;
      case "skills": html = viewSkills(+arg || 0); break;
      case "projects": html = arg ? viewProject(arg) : viewProjects(); break;
    }
    main.innerHTML = html;

    var links = document.querySelectorAll("#nav a");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle("active", links[i].getAttribute("data-section") === section);
    }
    document.title = (section === S.sections[0] ? "" : LABELS[section] + " · ") + S.name;
  }

  /* ---------- events ---------- */
  main.addEventListener("click", function (e) {
    var go = e.target.closest("[data-go]");
    if (go && !go.disabled) { location.hash = go.getAttribute("data-go"); return; }
    var img = e.target.closest("img[data-zoom]");
    if (img) openLightbox(img.src, img.alt);
  });

  // ← / → step through education/experience entries
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") return closeLightbox();
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (/input|textarea/i.test(document.activeElement.tagName)) return;
    var btn = main.querySelectorAll(".arrow")[e.key === "ArrowLeft" ? 0 : 1];
    if (btn && !btn.disabled) location.hash = btn.getAttribute("data-go");
  });

  var lb = document.getElementById("lightbox");
  function openLightbox(src, alt) { lb.querySelector("img").src = src; lb.querySelector("img").alt = alt || ""; lb.hidden = false; }
  function closeLightbox() { lb.hidden = true; }
  lb.addEventListener("click", closeLightbox);

  window.addEventListener("hashchange", route);
  renderChrome();
  route();
})();
