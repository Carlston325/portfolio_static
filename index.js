const showcases = [
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
  if (showcase.githubLink === undefined && showcase.websiteLink === undefined) {
    return `
    <div class="showcase-card">
      <img class="showcase-img" src=${showcase.image} />
      <h2>${showcase.title}</h2>
      <p>${showcase.description}</p>
      <a href=${showcase.link}>
        <button class="btn">Visit</button>
      </a>
      
    </div>
  `;
  } else if (showcase.websiteLink === undefined) {
    return `
    <div class="showcase-card">
      <img class="showcase-img" src=${showcase.image} />
      <h2>${showcase.title}</h2>
      <p>${showcase.description}</p>
       <a href=${showcase.githubLink}>
        <button class="btn">Github</button>
      </a>
    </div>
  `;
  } else {
    return `
    <div class="showcase-card">
      <img class="showcase-img" src=${showcase.image} />
      <h2>${showcase.title}</h2>
      <p>${showcase.description}</p>
      <a href=${showcase.websiteLink}>
        <button class="btn">Live</button>
      </a>
       <a href=${showcase.githubLink}>
        <button class="btn">Github</button>
      </a>
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
      console.log(this);
    });

  document
    .querySelectorAll(".btn")
    [i].addEventListener("mouseout", function () {
      this.classList.remove("btnHighlight");
    });
}
