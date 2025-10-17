function info1() {
  var x = document.getElementById("info-1");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function info2() {
  var x = document.getElementById("info-2");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function info3() {
  var x = document.getElementById("info-3");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function info4() {
  var x = document.getElementById("info-4");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function info1() { toggleInfo("info-1"); }
function info2() { toggleInfo("info-2"); }
function info3() { toggleInfo("info-3"); }
function info4() { toggleInfo("info-4"); }

function toggleInfo(id) {
  document.querySelectorAll("[id^='info-']").forEach(box => {
    if (box.id !== id) box.classList.remove("show");
  });

  document.getElementById(id).classList.toggle("show");
}

document.addEventListener("click", function(event) {
  const clickedButton = event.target.closest(".info-button");
  const clickedInfoBox = event.target.closest("[id^='info-']");
});