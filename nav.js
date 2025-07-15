document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".navigations");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, null, " "); // removes hash from URL
      }
    });
  });
});


const backToTopBtn = document.querySelector(".back-to-top");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, null, " "); // remove hash if any
    }
  });
}
