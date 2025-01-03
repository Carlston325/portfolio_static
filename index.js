// Project showcase
fetch("https://backend-fmv0.onrender.com/projects")
  //Load Projects and pass images
  .then(async (response) => {
    let { profileImageSources, projects } = await response.json();

    const mapShowcases = projects.map((showcase) => {
      if (showcase.github_link === null && showcase.website_link === null) {
        return `
        <div class="showcase-card">
          <img class="showcase-img" src=${showcase.thumbnail} />
          <div>
            <h2>${showcase.title}</h2>
            <p>${showcase.descrip}</p>
          </div>
          <div>
            <button class="btn">
              <a href=${showcase.other_link}>Visit</a>
            </button>
          </div>
        </div>
      `;
      } else if (showcase.website_link === null) {
        return `
        <div class="showcase-card">
          <img class="showcase-img" src=${showcase.thumbnail} />
          <div>
            <h2>${showcase.title}</h2>
            <p>${showcase.descrip}</p>
          </div>
          <div>
            <button class="btn">
              <a href=${showcase.github_link}>Github</a>
            </button>
          </div>
        </div>
      `;
      } else if (showcase.github_link === null) {
        return `
        <div class="showcase-card">
          <img class="showcase-img" src=${showcase.thumbnail} />
          <div>
            <h2>${showcase.title}</h2>
            <p>${showcase.descrip}</p>
          </div>
          <div>
            <button class="btn">
              <a href=${showcase.website_link}>Live</a>
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
              <a href=${showcase.website_link}>Live</a>
            </button>
            <button class="btn">
              <a href=${showcase.github_link}>Github</a>
            </button>
          </div>
        </div>
      `;
      }
    });
    mapShowcases.reverse();
    document.getElementById("showcase-container").innerHTML =
      mapShowcases.join("");

    return profileImageSources;
  })
  .then((profileImageSources) => {
    // Load Images in Image Carousel
    const profileImagesArray = profileImageSources;
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
window.onload = async function () {
  //Button hover effect
  const numberOfButtons = document.querySelectorAll(".btn").length;

  for (let i = 0; i < numberOfButtons; i++) {
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
  const closeMenuBtn = document.querySelector(".close-menu-btn");

  hamburgerSVG.addEventListener("click", () => {
    dropdownList.style.display = "block";
  });
  closeMenuBtn.addEventListener("click", () => {
    dropdownList.style.display = "none";
  });
  const numberOfMenuOptions = document.querySelectorAll(".btn2").length;
  for (let i = 0; i < numberOfMenuOptions; i++) {
    document.querySelectorAll(".btn2")[i].addEventListener("click", () => {
      dropdownList.style.display = "none";
    });
  }
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
};
