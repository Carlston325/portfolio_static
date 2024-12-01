const showcases = [
  {
    id: 10,
    title: "Journey of Results",
    description:
      "I worked for Journey of Results Ltd to build their consulting firm website, I was part of a team and my task was to add functionality to the website. I also learnt SEO & some web design through this experience.",
    image: "./assets/images/jor_website.png",
    websiteLink: "https://oli7760.wixstudio.com/journeyofresults",
  },
  {
    id: 9,
    title: "Carlston's Coffee",
    description: "",
    image: "./assets/images/carlstons_coffee_full_stack_web_app.jpg",
    githubLink: "https://github.com/Carlston325/carlstons-coffee",
    websiteLink: "https://carlston325.github.io/carlstons-coffee/",
  },
  {
    id: 8,
    title: "The Emporium",
    description:
      "This is a Ecommerce Shop to sell things for men, women & kids, this project was created in React.js",
    image: "./assets/images/the_emporium_web_app.png",
    githubLink: "https://github.com/Carlston325/the_emporium_react",
  },
  {
    id: 7,
    title: "Weather Web App",
    description:
      "Built with React.js and databases, this Web App offers personalised weather updates. Users select locations to receive accurate and current weather information in a user-friendly interface.",
    image: "./assets/images/weather_web_app.png",
    githubLink: "https://github.com/Carlston325/weather_react",
    websiteLink: "https://carlston325.github.io/weather_react/",
  },
  {
    id: 6,
    title: "JavaCoats Project",
    description:
      "This is a Ecommerce Products Website Project, I created in React.js",
    image: "./assets/images/javacoats_web_app.png",
    githubLink: "https://github.com/Carlston325/eCommerce",
    websiteLink: "https://carlston325.github.io/eCommerce/",
  },
  {
    id: 5,
    title: "Drone Shop",
    description:
      "Built with React.js, this is an ecommerce store that sell drones.",
    image: "./assets/images/drone_x-268.png",
    githubLink: "https://github.com/Carlston325/techproduct",
    websiteLink: "https://carlston325.github.io/techproduct/",
  },
  {
    id: 4,
    title: "Gallery Project",
    description:
      "This Project is Gallery page where you can input images & Videos. I created it to work on my jQuery skills & also gain new knowledge of Javascript learning new things. For example, inputting videos (& images) onto a webpage and being able to input more than 1 image or video to create a Gallery. I will further improve this website by learning to make a login system so that users can have accounts and their images & videos saved when they come back onto the website.",
    image: "./assets/images/gallery_website.png",
    githubLink: "https://github.com/Carlston325/gallery",
    websiteLink: "https://carlston325.github.io/gallery/",
  },
  {
    id: 3,
    title: "Top Ten",
    description:
      "This Project is website that gives the user the latest information on certain topics. For example movies. I created this website through simple HTML & CSS. There wll be further improvements to this website, the main one being a main page and I will also be adding more topics.",
    image: "./assets/images/top_ten_website.png",
    githubLink: "https://github.com/Carlston325/TopTen",
    websiteLink: "https://carlston325.github.io/TopTen/",
  },
  {
    id: 2,
    title: "Invite Cards Project",
    description:
      "This Project is an invite Cards creation website. I created it to work on my Javascript skills and knowledge, also learning new things. Like changing the background from an Input Selection and also Uploading your own Images.",
    image: "./assets/images/invite_cards_website.PNG",
    githubLink: "https://github.com/Carlston325/invites",
    websiteLink: "https://carlston325.github.io/invites/",
  },
  {
    id: 1,
    title: "3D Modelling",
    description:
      "I know how to 3D model. I learn't Autodesk Maya in University and I am now using blender.",
    image: "./assets/images/raygun_model.png",
    link: "https://sites.google.com/view/carlstons-portfolio/home",
  },
];

const mapShowcases = showcases.map((showcase) => {
  console.log(showcase.githubLink, showcase.websiteLink);

  if (showcase.githubLink === undefined && showcase.websiteLink === undefined) {
    return `
    <div class="showcase-card">
      <img class="showcase-img" src=${showcase.image} />
      <div>
        <h2>${showcase.title}</h2>
        <p>${showcase.description}</p>
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
      <img class="showcase-img" src=${showcase.image} />
      <div>
        <h2>${showcase.title}</h2>
        <p>${showcase.description}</p>
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
      <img class="showcase-img" src=${showcase.image} />
      <div>
        <h2>${showcase.title}</h2>
        <p>${showcase.description}</p>
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
      <img class="showcase-img" src=${showcase.image} />
      <div>
        <h2>${showcase.title}</h2>
        <p>${showcase.description}</p>
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
document.getElementById("showcase-container").innerHTML = mapShowcases.join("");

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
  // previewFileDiv.classList.add("show");
  previewFileDiv.classList.add("display-preview");
});
closePreview.addEventListener("click", function () {
  previewFileDiv.classList.remove("display-preview");
});

const profileImage = document.getElementById("profile-image");
const profileImageSources = [
  "./assets/images/Profile/carlston_1.png",
  "./assets/images/Profile/carlston_2.png",
  "./assets/images/Profile/carlston_3.png",
  "./assets/images/Profile/carlston_5.png",
];

let currentIndex = 0;

setInterval(() => {
  // Increment index and reset if it exceeds the array length
  currentIndex = (currentIndex + 1) % profileImageSources.length;

  // Update the image source
  profileImage.src = profileImageSources[currentIndex];
}, 5000);

const hamburgerSVG = document.querySelector(".hamburger");
const dropdownList = document.querySelector(".dropdown-list");

hamburgerSVG.addEventListener("mouseenter", () => {
  dropdownList.style.display = "block";
  console.log("mouse went ON (hamburger)");
});

dropdownList.addEventListener("mouseenter", () => {
  dropdownList.style.display = "block";
  console.log("mouse went ON (dropdown)");
});

hamburgerSVG.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropdownList.matches(":hover")) {
      dropdownList.style.display = "none";
      console.log("mouse went OFF (hamburger)");
    }
  }, 100); // Small delay to allow hovering over dropdown before hiding it
});

dropdownList.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropdownList.matches(":hover")) {
      dropdownList.style.display = "none";
      console.log("mouse went OFF (dropdown)");
    }
  }, 100); // Delay allows for smoother transitions
});
