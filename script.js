const allImages = document.querySelectorAll(".image-container");
const navButtons = document.querySelectorAll(".nav-buttons");
const previousButton = document.querySelector(".left-button");
const forwardButton = document.querySelector(".right-button");

forwardButton.addEventListener("click", forwardClickHandler);
previousButton.addEventListener("click", backwardClickHandler);

let imageTimer = setInterval(autoSlideShow, 5000);

function forwardClickHandler() {
  moveSlidesForward();
  moveNavButtonsForward();
  clearInterval(imageTimer);
  imageTimer = setInterval(autoSlideShow, 5000);
}

function backwardClickHandler() {
  moveSlidesBackward();
  moveNavButtonsBackward();
  clearInterval(imageTimer);
  imageTimer = setInterval(autoSlideShow, 5000);
}

function autoSlideShow() {
  moveSlidesForward();
  moveNavButtonsForward();
}

function moveSlidesForward() {
  for (let i = 0; i < allImages.length; i++) {
    if (allImages[i].classList.contains("active")) {
      if (i === allImages.length - 1) {
        allImages[i].classList.toggle("active");
        allImages[0].classList.toggle("active");
        return;
      }
      allImages[i].classList.toggle("active");
      allImages[++i].classList.toggle("active");
      return;
    }
  }
}

function moveSlidesBackward() {
  for (let i = 0; i < allImages.length; i++) {
    if (allImages[i].classList.contains("active")) {
      if (i === 0) {
        allImages[i].classList.toggle("active");
        allImages[allImages.length - 1].classList.toggle("active");
        return;
      }
      allImages[i].classList.toggle("active");
      allImages[--i].classList.toggle("active");
      return;
    }
  }
}

function moveNavButtonsForward() {
  for (let i = 0; i < navButtons.length; i++) {
    if (navButtons[i].classList.contains("active")) {
      if (i === navButtons.length - 1) {
        navButtons[i].classList.toggle("active");
        navButtons[0].classList.toggle("active");
        return;
      }
      navButtons[i].classList.toggle("active");
      navButtons[++i].classList.toggle("active");
      return;
    }
  }
}

function moveNavButtonsBackward() {
  for (let i = 0; i < navButtons.length; i++) {
    if (navButtons[i].classList.contains("active")) {
      if (i === 0) {
        navButtons[i].classList.toggle("active");
        navButtons[navButtons.length - 1].classList.toggle("active");
        return;
      }
      navButtons[i].classList.toggle("active");
      navButtons[--i].classList.toggle("active");
      return;
    }
  }
}
