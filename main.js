const bannerContainer = document.querySelector(".banner_image_container");
const bannerImage = document.querySelector(".banner_main_image");
const bannerHover = document.querySelector(".hover_state");

function displayGlass() {
  try {
    bannerImage.addEventListener("mouseover", function (e) {
      console.log("hovering");
      bannerHover.style.display = "block";
    });

    bannerHover.addEventListener("mouseout", function () {
      bannerHover.style.display = "none";
    });
  } catch (error) {
    if (error) throw error;
  }
}

displayGlass();
