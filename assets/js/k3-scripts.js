/* 
=========================================================
* K3 - Keselamatan dan Kesehatan Kerja Landing Page JS
* Based on Argon Design System - v1.2.2
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  // --- Animasi muncul saat scroll ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));

  // --- Smooth scroll untuk semua link internal ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // offset navbar
          behavior: "smooth"
        });
      }
    });
  });
});

document.querySelectorAll(".card ul li").forEach(li => {
  const parts = li.innerHTML.split(":");
  if (parts.length > 1) {
    li.innerHTML = `<strong>${parts[0].trim()}:</strong>${parts.slice(1).join(":")}`;
  }
});