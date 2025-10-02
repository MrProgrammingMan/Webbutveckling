function showSection(sectionId, event) {
  event.preventDefault();
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  const activeSection = document.getElementById(sectionId);
  if (activeSection) activeSection.style.display = "block";
  document.querySelectorAll("ul li a").forEach(link => link.classList.remove("active"));
  if (event && event.currentTarget) event.currentTarget.classList.add("active");
}

  window.onload = function() {
  showSection('start', { preventDefault: () => {}, currentTarget: document.querySelector('a.active') });
};

document.querySelectorAll(".årtal h2").forEach(h2 => {
  h2.addEventListener("click", () => {
    h2.parentElement.classList.toggle("open");
  });
});