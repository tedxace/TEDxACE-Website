/*  
    Why this code is preferred over the normal copy paste HTML?

    In this all you have to do is write a  template HTML once 
    and then use the same template to create multiple elements.
    
    Debugging is faster as this way instead of verifying multiple 
    lines of HTML code all you need to do is verify the data.

    Format for the array:
    image - The image path should be in consideration of where the linked HTML is.
    name - The name of the team member.
    position - The position of the team member.
    social - The first element is the social media icon and the second is the link.
*/

const curator = [
  {
    image: "./img/team/2022/samyukta.jpg",
    name: "Samyukta V.",
    position: "Curator",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/samyukta-vasaikar-ba07261bb",
    ],
  },
  {
    image: "./img/team/2022/jeenal.jpeg",
    name: "Jeenal D.",
    position: "Curator",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/jeenal-dhuri-5ba810206/ ",
    ],
  },
  {
    image: "./img/team/2022/aarnav.jpg",
    name: "Aarnav S.",
    position: "Curator - Video Production",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/aarnav-sangekar-11228b217/",
    ],
  },
];

const designer = [
  {
    image: "./img/team/2022/vedant.png",
    name: "Vedant D.",
    position: "Designer",
    social: ["fa fa-linkedin", "http://www.linkedin.com/in/vedant-dandge-1010"],
  },
  {
    image: "./img/team/2022/sumeet.jpeg",
    name: "Sumeet B.",
    position: "Designer",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/sumeet-bhimanpally-9220a420a/",
    ],
  },
];

const social = [
  {
    image: "./img/team/2022/rajas.jpg",
    name: "Rajas P.",
    position: "Social Media",
    social: ["fa fa-instagram", "https://www.instagram.com/__rajaass__/"],
  },
  {
    image: "./img/team/2022/gargi.jpg",
    name: "Gargi P.",
    position: "Social Media",
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/gargi-p-0745131a0"],
  },
  {
    image: "./img/team/2022/ombhamare.jpg",
    name: "Om B.",
    position: "Social Media",
    social: ["fa fa-instagram", "https://www.instagram.com/ombhamare99/"],
  },
  {
    image: "./img/team/2022/ramya.jpg",
    name: "Ramya",
    position: "Social Media",
    social: ["fa fa-instagram", "https://www.instagram.com/_.ramy.a/"],
  },
];

const market = [
  {
    image: "./img/team/2022/shrilatha.jpg",
    name: "Shrilatha S.",
    position: "Marketing",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/shrilathashripathi",
    ],
  },
  {
    image: "./img/team/2022/yash.jpeg",
    name: "Yash P.",
    position: "Marketing",
    social: ["fa fa-instagram", "http://instagram.com/_yash_pawar17"],
  },
  {
    image: "./img/team/2022/riya.jpg",
    name: "Riya S.",
    position: "Marketing",
    social: ["fa fa-instagram", "https://instagram.com/aasya2468"],
  },
  {
    image: "./img/team/2022/amitesh.JPG",
    name: "Amitesh S.",
    position: "Marketing",
    social: ["fa fa-instagram", "https://instagram.com/amiitbhatt"],
  },
  {
    image: "./img/team/2022/simran.jpg",
    name: "Simran S.",
    position: "Marketing",
    social: ["fa fa-instagram", "https://instagram.com/simran_singh1391"],
  },
];

const tech = [
  {
    image: "./img/team/2022/gauravkonde.jpeg",
    name: "Gaurav K.",
    position: "Web Developer",
    social: ["fa fa-instagram", "https://www.instagram.com/codegrammed/"],
  },
  {
    image: "./img/team/2022/anjan.jpg",
    name: "Anjan N.",
    position: "Web Developer",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
];

var wrapper = document.getElementById("teamWrite");

var finalTeam = "";

for (var i = 0; i < curator.length; i++) {
  finalTeam += `
  <div class="col-lg-3 col-6 p-3">
  <div class="team">
    <div class="team-img">
      <img src="${curator[i].image}" alt="${curator[i].name}">
    </div>
    <div class="team-content">
      <h2>${curator[i].name}</h2>
      <h3>${curator[i].position}</h3>
      <a href="${curator[i].social[1]}" class="${curator[i].social[0]}"></a>
    </div>
  </div>
  </div>`;
}

wrapper.innerHTML = finalTeam;

function writeCurators() {
  var finalTeam = "";

  for (var i = 0; i < curator.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${curator[i].image}" alt="${curator[i].name}">
      </div>
      <div class="team-content">
        <h2>${curator[i].name}</h2>
        <h3>${curator[i].position}</h3>
        <a href="${curator[i].social[1]}" class="${curator[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeSocial() {
  var finalTeam = "";

  for (var i = 0; i < social.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${social[i].image}" alt="${social[i].name}">
      </div>
      <div class="team-content">
        <h2>${social[i].name}</h2>
        <h3>${social[i].position}</h3>
        <a href="${social[i].social[1]}" class="${social[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeDesign() {
  var finalTeam = "";

  for (var i = 0; i < designer.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${designer[i].image}" alt="${designer[i].name}">
      </div>
      <div class="team-content">
        <h2>${designer[i].name}</h2>
        <h3>${designer[i].position}</h3>
        <a href="${designer[i].social[1]}" class="${designer[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeMarket() {
  var finalTeam = "";

  for (var i = 0; i < market.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${market[i].image}" alt="${market[i].name}">
      </div>
      <div class="team-content">
        <h2>${market[i].name}</h2>
        <h3>${market[i].position}</h3>
        <a href="${market[i].social[1]}" class="${market[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}

function writeTech() {
  var finalTeam = "";

  for (var i = 0; i < tech.length; i++) {
    finalTeam += `
    <div class="col-lg-3 col-6 p-3">
    <div class="team">
      <div class="team-img">
        <img src="${tech[i].image}" alt="${tech[i].name}">
      </div>
      <div class="team-content">
        <h2>${tech[i].name}</h2>
        <h3>${tech[i].position}</h3>
        <a href="${tech[i].social[1]}" class="${tech[i].social[0]}"></a>
      </div>
    </div>
    </div>`;
  }

  wrapper.innerHTML = finalTeam;
}
