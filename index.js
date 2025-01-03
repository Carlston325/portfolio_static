// Project showcase
fetch("https://backend-fmv0.onrender.com/projects")
  // Load Projects and pass images
  .then(async (response) => {
    let { profileImageSources, projects } = await response.json();

    const createShowcaseCard = (showcase) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "showcase-card";

      const img = document.createElement("img");
      img.className = "showcase-img";
      img.src = showcase.thumbnail;
      cardDiv.appendChild(img);

      const titleDiv = document.createElement("div");
      const title = document.createElement("h2");
      title.textContent = showcase.title;
      const desc = document.createElement("p");
      desc.textContent = showcase.descrip;
      titleDiv.appendChild(title);
      titleDiv.appendChild(desc);
      cardDiv.appendChild(titleDiv);

      const linkDiv = document.createElement("div");

      if (showcase.github_link) {
        const githubBtn = document.createElement("button");
        githubBtn.className = "btn";
        const githubLink = document.createElement("a");
        githubLink.href = showcase.github_link;
        githubLink.textContent = "Github";
        githubBtn.appendChild(githubLink);
        linkDiv.appendChild(githubBtn);
      }

      if (showcase.website_link) {
        const liveBtn = document.createElement("button");
        liveBtn.className = "btn";
        const liveLink = document.createElement("a");
        liveLink.href = showcase.website_link;
        liveLink.textContent = "Live";
        liveBtn.appendChild(liveLink);
        linkDiv.appendChild(liveBtn);
      }

      if (showcase.other_link && !showcase.github_link && !showcase.website_link) {
        const otherBtn = document.createElement("button");
        otherBtn.className = "btn";
        const otherLink = document.createElement("a");
        otherLink.href = showcase.other_link;
        otherLink.textContent = "Visit";
        otherBtn.appendChild(otherLink);
        linkDiv.appendChild(otherBtn);
      }

      cardDiv.appendChild(linkDiv);
      return cardDiv.outerHTML;
    };

    const mapShowcases = projects.map(createShowcaseCard);
    mapShowcases.reverse();
    document.getElementById("showcase-container").innerHTML = mapShowcases.join("");

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

window.onload = function () {
  // Button hover effect
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      this.classList.add("btnHighlight");
    });
    button.addEventListener("mouseout", function () {
      this.classList.remove("btnHighlight");
    });
  });

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

  const menuOptions = document.querySelectorAll(".btn2");
  menuOptions.forEach((option) => {
    option.addEventListener("click", () => {
      dropdownList.style.display = "none";
    });
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
  const closePreview = document.getElementById("close-preview");

  cvPreviewBTN.addEventListener("click", () => {
    previewFileDiv.classList.add("display-preview");
  });
  closePreview.addEventListener("click", () => {
    previewFileDiv.classList.remove("display-preview");
  });
};