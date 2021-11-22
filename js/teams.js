/*  
    Why this code is preferred over the normal copy paste HTML?

    In this all you have to do is write a  template HTML once 
    and then use the same template to create multiple elements.
    
    Debugging is faster as this way instead of verifying multiple 
    lines of HTML code all you need to do is verify the data.
*/

const teams = [
  {
    image: "./img/team/2020/naikgaurang.png",
    name: "Gaurang Naik",
    position: "Licensee",
    social: ["fa fa-instagram", "https://www.instagram.com/radicalbuzz"],
  },
  {
    image: "./img/team/2020/Brandon.jpg",
    name: "Brandon Saldanha",
    position: "Co-Organizer",
    social: ["fa fa-instagram", "https://www.instagram.com/brandon.saldanha"],
  },
  {
    image: "./img/team/2020/priyal.jpeg",
    name: "Priyal Bhiwapurkar",
    position: "Curator",
    social: ["fa fa-instagram", "https://www.instagram.com/priyalbhiwapurkar"],
  },
  {
    image: "./img/team/2020/prachii.jpeg",
    name: "Prachi Chodankar",
    position: "Curator",
    social: [
      "fa fa-linkedin",
      "https://www.linkedin.com/in/prachi-chodankar-b00728193/",
    ],
  },
  {
    image: "./img/team/2020/samyukta.jpg",
    name: "Samyukta Vasaikar",
    position: "Curator",
    social: ["fa fa-instagram", "https://www.instagram.com/samyukta_15/"],
  },
  {
    image: "./img/team/2020/krupa.jpeg",
    name: "Krupa Doshi",
    position: "Curator",
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/doshi-krupa"],
  },
  {
    image: "./img/team/2020/AkshayAgrawal.jpg",
    name: "Akshay Agrawal",
    position: "Designer",
    social: ["fa fa-twitter", "https://twitter.com/axayagrawal"],
  },
  {
    image: "./img/team/2020/mohit.jpeg",
    name: "Mohit Belokar",
    position: "Designer",
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/mohitbelokar/"],
  },
  {
    image: "./img/team/2020/vikrant.png",
    name: "Vikrant Patankar",
    position: "Designer - Filmmaker",
    social: ["fa fa-linkedin", "https://www.linkedin.com/in/ivikrant"],
  },
  {
    image: "./img/team/2020/shrilatha.png",
    name: "Shrilatha Shripathi",
    position: "Host",
    social: ["fa fa-instagram", "https://www.instagram.com/shrilatha_0402"],
  },
  {
    image: "./img/team/2020/AshayDave.jpg",
    name: "Akshay Dave",
    position: "Marketing - Social Media",
    social: ["fa fa-instagram", "https://www.instagram.com/hibskitmusic"],
  },
  {
    image: "./img/team/2020/Rajas.jpeg",
    name: "Rajas Pofalkar",
    position: "Social Media",
    social: ["fa fa-instagram", "https://www.instagram.com/__rajaass__/"],
  },
  {
    image: "./img/team/2020/rajvaya.jpg",
    name: "Raj Vaya",
    position: "Developer",
    social: ["fa fa-globe", "https://raj.codes"],
  },
  {
    image: "./img/team/2020/gauravkonde.jpeg",
    name: "Gaurav Konde",
    position: "Developer",
    social: ["fa fa-instagram", "https://www.instagram.com/codegrammed/"],
  },
  {
    image: "./img/team/2020/parth.jpg",
    name: "Parth Doshi",
    position: "Operations Manager",
    social: ["fa fa-instagram", "https://www.instagram.com/_.parthdoshi._/"],
  },
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
