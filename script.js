const allImages = document.querySelectorAll(".image-container");
const previousButton = document.querySelector(".left-button");
const forwardButton = document.querySelector(".right-button");

forwardButton.addEventListener("click", moveSlidesForward);
previousButton.addEventListener("click", moveSlidesBackward);

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
