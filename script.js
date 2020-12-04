const scroll = document.getElementById("scroll");
const iconsContainer = document.getElementById("iconsContainer");
const mapContainer = document.getElementById("mapContainer");
const rightContainer = document.getElementById("rightContainer");
const leftScreen = document.getElementById("leftScreen");
const rightScreen = document.getElementById("rightScreen");
const map = document.getElementById("map");

init();
handleScroll();

function init() {
  scroll.classList.add("scroll-top");
  leftScreen.classList.add("dark-mode");
  rightScreen.classList.add("dark-mode");
  rightContainer.removeChild(mapContainer);
}

function handleScroll() {
  scroll.addEventListener("click", () => {
    if (scroll.className.includes("scroll-top")) {
      scroll.classList.remove("scroll-top");
      scroll.classList.add("scroll-bottom");
      handleScreenChange();
    } else {
      scroll.classList.remove("scroll-bottom");
      scroll.classList.add("scroll-top");
      handleScreenChange();
    }
  });
}

function handleScreenChange() {
  if (rightContainer.contains(iconsContainer)) {
    iconsContainer.classList.add("fade-in");
    mapContainer.classList.remove("fade-in");
    setTimeout(() => {
      rightContainer.removeChild(iconsContainer);
      rightContainer.appendChild(mapContainer);
      rightScreen.classList.remove("dark-mode");
      rightScreen.classList.add("light-mode");
    }, 200);
  } else {
    iconsContainer.classList.remove("fade-in");
    mapContainer.classList.add("fade-in");
    setTimeout(() => {
      rightContainer.removeChild(mapContainer);
      rightContainer.appendChild(iconsContainer);
      rightScreen.classList.remove("light-mode");
      rightScreen.classList.add("dark-mode");
    }, 200);
  }
}
