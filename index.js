//Button hover effect
const numberOfButtons = document.querySelectorAll(".btn").length;
for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".btn")
    [i].addEventListener("mouseover", function () {
      this.classList.add("btnHighlight");
    });

  document
    .querySelectorAll(".btn")
    [i].addEventListener("mouseout", function () {
      this.classList.remove("btnHighlight");
    });
}
// Hamburger Menu Dropdown
const hamburgerSVG = document.querySelector(".hamburger");
const dropdownList = document.querySelector(".dropdown-list");

hamburgerSVG.addEventListener("mouseenter", () => {
  dropdownList.style.display = "block";
  console.log("mouse went ON (hamburger)");
});
hamburgerSVG.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropdownList.matches(":hover")) {
      dropdownList.style.display = "none";
      console.log("mouse went OFF (hamburger)");
    }
  }, 100); // Small delay to allow hovering over dropdown before hiding it
});

dropdownList.addEventListener("mouseenter", () => {
  dropdownList.style.display = "block";
  console.log("mouse went ON (dropdown)");
});
dropdownList.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropdownList.matches(":hover")) {
      dropdownList.style.display = "none";
      console.log("mouse went OFF (dropdown)");
    }
  }, 100); // Delay allows for smoother transitions
});
// CV Preview & Download
const cvDropdownBTN = document.getElementById("cv-btn");
const cvDropdownDiv = document.getElementById("cv-dropdown");
cvDropdownBTN.addEventListener("click", () => {
  cvDropdownDiv.classList.toggle("show");
});
cvDropdownDiv.addEventListener("mouseover", () => {
  cvDropdownDiv.classList.add("show");
});
cvDropdownDiv.addEventListener("mouseout", () => {
  cvDropdownDiv.classList.remove("show");
});

const cvPreviewBTN = document.getElementById("cv-preview");
const previewFileDiv = document.getElementById("preview-file-div");
const cvPreviewFrame = document.getElementById("cv-file");
const closePreview = document.getElementById("close-preview");

cvPreviewBTN.addEventListener("click", function () {
  previewFileDiv.classList.add("display-preview");
});
closePreview.addEventListener("click", function () {
  previewFileDiv.classList.remove("display-preview");
});
// Project showcase
fetch("http://127.0.0.1:5000/projects")
  .then(async (response) => {
    const result = await response.json();
    console.log(result);

    const mapShowcases = result.map((showcase) => {
      if (
        showcase.githubLink === undefined &&
        showcase.websiteLink === undefined
      ) {
        return `
          <div class="showcase-card">
            <img class="showcase-img" src=${showcase.thumbnail} />
            <div>
              <h2>${showcase.title}</h2>
              <p>${showcase.descrip}</p>
            </div>
            <div>
              <button class="btn">
                <a href=${showcase.link}>Visit</a>
              </button>
            </div>
          </div>
        `;
      } else if (showcase.websiteLink === undefined) {
        return `
          <div class="showcase-card">
            <img class="showcase-img" src=${showcase.thumbnail} />
            <div>
              <h2>${showcase.title}</h2>
              <p>${showcase.descrip}</p>
            </div>
            <div>
              <button class="btn">
                <a href=${showcase.githubLink}>Github</a>
              </button>
            </div>
          </div>
        `;
      } else if (showcase.githubLink === undefined) {
        return `
          <div class="showcase-card">
            <img class="showcase-img" src=${showcase.thumbnail} />
            <div>
              <h2>${showcase.title}</h2>
              <p>${showcase.descrip}</p>
            </div>
            <div>
              <button class="btn">
                <a href=${showcase.websiteLink}>Live</a>
              </button>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="showcase-card">
            <img class="showcase-img" src=${showcase.thumbnail} />
            <div>
              <h2>${showcase.title}</h2>
              <p>${showcase.descrip}</p>
            </div>
            <div>
              <button class="btn">
                <a href=${showcase.websiteLink}>Live</a>
              </button>
              <button class="btn">
                <a href=${showcase.githubLink}>Github</a>
              </button>
            </div>
          </div>
        `;
      }
    });
    mapShowcases.reverse();
    document.getElementById("showcase-container").innerHTML =
      mapShowcases.join("");
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });
// Profile image carousel
fetch("http://127.0.0.1:5000/profile_image")
  .then((response) => response.json())
  .then((result) => {
    const profileImagesArray = result;
    const profileImage = document.getElementById("profile-image");
    const profileImageMobile = document.getElementById("profile-image-mobile");

    let currentIndex = 0;
    setInterval(() => {
      // Increment index and reset if it exceeds the array length
      currentIndex = (currentIndex + 1) % profileImagesArray.length;

      // Update the image source
      profileImage.src = profileImagesArray[currentIndex];
      profileImageMobile.src = profileImagesArray[currentIndex];
    }, 6000);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });
