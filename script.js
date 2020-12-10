const scroll = $("#scroll");
const iconsContainer = $("#iconsContainer");
const mapContainer = $("#mapContainer");
const rightContainer = $("#rightContainer");
const leftScreen = $("#leftScreen");
const rightScreen = $("#rightScreen");
const map = $("#map");
const speedInput = $("#speedInput");
const speedContainer = $("#speedContainer");

let speed = $("#speed");

init();
handleScroll();
handleSpeedChange();

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

function handleSpeedChange() {
  speedInput.on("input", (e) => {
    const previousSpeed = parseInt(speed.text().split(" ")[0]);
    const isSpeedingUp = previousSpeed < e.target.value;
    const currentSpeed = e.target.value;
    speed.text(`${currentSpeed} km/h`);

    if (isSpeedingUp) {
      handleSpeedingUp(currentSpeed);
    } else {
      handleSlowingDown(currentSpeed);
    }
  });

  function handleSpeedingUp(currentSpeed) {
    if (currentSpeed < 50) {
      speedContainer.find("#1").css("background-color", "green");
    } else if (currentSpeed > 50 && currentSpeed < 100) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
    } else if (currentSpeed > 100 && currentSpeed < 150) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
      speedContainer.find("#3").css("background-color", "orange");
    } else if (currentSpeed > 150 && currentSpeed < 200) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
      speedContainer.find("#3").css("background-color", "orange");
      speedContainer.find("#4").css("background-color", "orange");
    } else if (currentSpeed > 200 && currentSpeed < 250) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
      speedContainer.find("#3").css("background-color", "orange");
      speedContainer.find("#4").css("background-color", "orange");
      speedContainer.find("#5").css("background-color", "red");
    } else if (currentSpeed > 250) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
      speedContainer.find("#3").css("background-color", "orange");
      speedContainer.find("#4").css("background-color", "orange");
      speedContainer.find("#5").css("background-color", "red");
      speedContainer.find("#6").css("background-color", "red");
    }
  }

  function handleSlowingDown(currentSpeed) {
    if (currentSpeed < 50) {
      speedContainer.find("#1").css("background-color", "white");
      speedContainer.find("#2").css("background-color", "white");
      speedContainer.find("#3").css("background-color", "white");
      speedContainer.find("#4").css("background-color", "white");
      speedContainer.find("#5").css("background-color", "white");
      speedContainer.find("#6").css("background-color", "white");
    } else if (currentSpeed > 50 && currentSpeed < 100) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "white");
      speedContainer.find("#3").css("background-color", "white");
      speedContainer.find("#4").css("background-color", "white");
      speedContainer.find("#5").css("background-color", "white");
      speedContainer.find("#6").css("background-color", "white");
    } else if (currentSpeed > 100 && currentSpeed < 150) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
      speedContainer.find("#3").css("background-color", "white");
      speedContainer.find("#4").css("background-color", "white");
      speedContainer.find("#5").css("background-color", "white");
      speedContainer.find("#6").css("background-color", "white");
    } else if (currentSpeed > 150 && currentSpeed < 200) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
      speedContainer.find("#3").css("background-color", "orange");
      speedContainer.find("#4").css("background-color", "white");
      speedContainer.find("#5").css("background-color", "white");
      speedContainer.find("#6").css("background-color", "white");
    } else if (currentSpeed > 200 && currentSpeed < 250) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
      speedContainer.find("#3").css("background-color", "orange");
      speedContainer.find("#4").css("background-color", "orange");
      speedContainer.find("#5").css("background-color", "white");
      speedContainer.find("#6").css("background-color", "white");
    } else if (currentSpeed > 250) {
      speedContainer.find("#1").css("background-color", "green");
      speedContainer.find("#2").css("background-color", "green");
      speedContainer.find("#3").css("background-color", "orange");
      speedContainer.find("#4").css("background-color", "orange");
      speedContainer.find("#5").css("background-color", "red");
      speedContainer.find("#6").css("background-color", "white");
    }
  }
}
