function toggleMainMenu() {
  document.getElementById("myAccessibility").classList.toggle("show");
}

function toggleTextMenu() {
  document.getElementById("text-size").classList.toggle("show");
}

function setFontSize(size) {
  document.querySelectorAll("p, .actions ul li").forEach(el => {
    el.style.fontSize = size;
  });
}

function dark_mode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("click", function(event) {
  if (!event.target.closest(".accessbtn") && !event.target.closest("#myAccessibility")) {
    document.getElementById("myAccessibility").classList.remove("show");
  }
  if (!event.target.closest(".fsbtn") && !event.target.closest("#text-size")) {
    document.getElementById("text-size").classList.remove("show");
  }
});