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

const teams = [
  {
    image: "./img/team/2022/prachi.jpeg",
    name: "Prachi C.",
    position: "Licensee",
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/prachi-chodankar/"],
  },
  {
    image: "./img/team/2022/krupa.jpg",
    name: "Krupa D.",
    position: "Co-Organizer",
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/doshi-krupa"],
  },
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
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/aarnav-sangekar-11228b217/"],
  },
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
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/sumeet-bhimanpally-9220a420a/"],
  },
  {
    image: "./img/team/2022/rajas.jpg",
    name: "Rajas P.",
    position: "Social Media Manager",
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
    image: "./img/team/2022/shrilatha.jpg",
    name: "Shrilatha S.",
    position: "Marketing Head",
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/shrilathashripathi"],
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
  {
    image: "./img/team/2022/anjan.jpg",
    name: "Anjan N.",
    position: "Web Developer",
    social: ["fa fa-globe", "https://anjannair.xyz"],
  },
  {
    image: "./img/team/2022/gauravkonde.jpeg",
    name: "Gaurav K.",
    position: "Web Developer",
    social: ["fa fa-instagram", "https://www.instagram.com/codegrammed/"],
  }
];

var wrapper = document.getElementById("teamWrite");

var finalTeam = "";

for (var i = 0; i < teams.length; i++) {
  finalTeam += `
  <div class="col-lg-3 col-6 p-3">
  <div class="team">
    <div class="team-img">
      <img src="${teams[i].image}" alt="${teams[i].name}">
    </div>
    <div class="team-content">
      <h2>${teams[i].name}</h2>
      <h3>${teams[i].position}</h3>
      <a href="${teams[i].social[1]}" class="${teams[i].social[0]}"></a>
    </div>
  </div>
  </div>`;
}

wrapper.innerHTML = finalTeam;
