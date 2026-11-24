// Habichou – Terms and Conditions
// Highlights the active section in the table of contents while scrolling.

(function () {
  "use strict";

  var tocLinks = Array.prototype.slice.call(
    document.querySelectorAll(".toc-list a[href^='#']")
  );

  if (!tocLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  var sections = tocLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  var linkById = {};
  tocLinks.forEach(function (link) {
    linkById[link.getAttribute("href").slice(1)] = link;
  });

  var currentLink = null;

  function setActive(id) {
    var link = linkById[id];
    if (!link || link === currentLink) return;
    if (currentLink) currentLink.classList.remove("active");
    link.classList.add("active");
    currentLink = link;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

  // Mark the first section active on load.
  setActive(sections[0].id);
})();
