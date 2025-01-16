window.onload = async function () {
  try {
    const response = await fetch("https://backend-fmv0.onrender.com/projects");
    let { profileImageSources, projects } = await response.json();

    //Project Showcase & Profile Images
    initialiseProjects(projects, profileImageSources);
    hamburgerUi();
    buttonUi();
    cvUi();
  } catch (error) {
    console.error("Error fetching projects:", error);
    showErrorMessage();
  }
};

function showErrorMessage() {
  console.error("Failed to load projects");
}

//Load Projects & Profile Images
function initialiseProjects(projects, profileImageSources) {
  //Projects
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

  // Images
  const profileImagesArray = profileImageSources;
  const profileImage = document.getElementById("profile-image");
  const profileImageMobile = document.getElementById("profile-image-mobile");

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % profileImagesArray.length;

    profileImage.src = profileImagesArray[currentIndex];
    profileImageMobile.src = profileImagesArray[currentIndex];
  }, 6000);
}

//Button hover effect
function buttonUi() {
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
}

// Hamburger Menu Dropdown
function hamburgerUi() {
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
}

// CV Preview & Download
function cvUi() {
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
}
