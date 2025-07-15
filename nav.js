document.addEventListener("DOMContentLoaded", () => {
  // nav button scroll
  const navButtons = document.querySelectorAll(".navigations");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, null, " ");
      }
    });
  });

  // back to top
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, null, " ");
      }
    });
  }

  // ✅ hamburger toggle (fixed)
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
    });

    document.querySelectorAll(".mobile-nav .navigations").forEach(btn => {
      btn.addEventListener("click", () => {
        mobileNav.classList.remove("show");
      });
    });
  } else {
    console.warn("hamburger or mobileNav not found!");
  }
});
