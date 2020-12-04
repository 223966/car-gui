const scroll = $("#scroll");
const iconsContainer = $("#iconsContainer");
const mapContainer = $("#mapContainer");
const rightContainer = $("#rightContainer");
const leftScreen = $("#leftScreen");
const rightScreen = $("#rightScreen");
const map = $("#map");

init();
handleScroll();

function init() {
  scroll.addClass("scroll-top");
  leftScreen.addClass("dark-mode");
  rightScreen.addClass("dark-mode");
  mapContainer.remove();
}

function handleScroll() {
  scroll.on("click", () => {
    if (scroll.hasClass("scroll-top")) {
      scroll.removeClass("scroll-top");
      scroll.addClass("scroll-bottom");
      handleScreenChange();
    } else {
      scroll.removeClass("scroll-bottom");
      scroll.addClass("scroll-top");
      handleScreenChange();
    }
  });
}

function handleScreenChange() {
  if (rightContainer.has(iconsContainer).length) {
    iconsContainer.addClass("fade-in");
    mapContainer.removeClass("fade-in");
    setTimeout(() => {
      iconsContainer.remove();
      rightContainer.append(mapContainer);
      rightScreen.removeClass("dark-mode");
      rightScreen.removeClass("light-mode");
    }, 200);
  } else {
    iconsContainer.removeClass("fade-in");
    mapContainer.addClass("fade-in");
    setTimeout(() => {
      mapContainer.remove();
      rightContainer.append(iconsContainer);
      rightScreen.removeClass("light-mode");
      rightScreen.addClass("dark-mode");
    }, 200);
  }
}
